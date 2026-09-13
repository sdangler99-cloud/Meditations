(() => {
  "use strict";

  /* ============================= STATE ============================= */
  const STORAGE_KEYS = {
    favorites: "still.favorites",
    stats: "still.stats",
    theme: "still.theme",
  };

  const state = {
    category: "All",
    query: "",
    maxDuration: 9999,
    favoritesOnly: false,
    favorites: loadJSON(STORAGE_KEYS.favorites, []),
    stats: loadJSON(STORAGE_KEYS.stats, { sessions: 0, minutes: 0, lastDate: null, streak: 0 }),
    current: null,       // currently open meditation object
    isPlaying: false,
    elapsedSec: 0,
    totalSec: 0,
    timerHandle: null,
    ambientSound: "none",
    ambientVolume: 0.45,
    audioCtx: null,
    audioNodes: null,    // active ambient nodes, for teardown
    paragraphs: [],
    paraIndex: 0,
    voiceEnabled: true,
    rate: 0.9,
    sessionLogged: false,
  };

  function loadJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }
  function saveJSON(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* ignore */ }
  }

  /* ============================= DOM REFS ============================= */
  const el = (id) => document.getElementById(id);
  const categoryNav = el("categoryNav");
  const cardGrid = el("cardGrid");
  const emptyState = el("emptyState");
  const sectionTitle = el("sectionTitle");
  const sectionSubtitle = el("sectionSubtitle");
  const searchInput = el("searchInput");
  const durationFilter = el("durationFilter");
  const showFavoritesBtn = el("showFavorites");
  const statSessions = el("statSessions");
  const statMinutes = el("statMinutes");
  const statStreak = el("statStreak");
  const streakCount = el("streakCount");
  const themeToggle = el("themeToggle");
  const toast = el("toast");

  const playerOverlay = el("playerOverlay");
  const playerClose = el("playerClose");
  const playerCategory = el("playerCategory");
  const playerLevel = el("playerLevel");
  const playerTitle = el("playerTitle");
  const playerDescription = el("playerDescription");
  const breathingOrb = el("breathingOrb");
  const timerDisplay = el("timerDisplay");
  const favBtn = el("favBtn");
  const playPauseBtn = el("playPauseBtn");
  const restartBtn = el("restartBtn");
  const progressFill = el("progressFill");
  const voiceToggle = el("voiceToggle");
  const rateSelect = el("rateSelect");
  const ambientChips = el("ambientChips");
  const ambientVolRow = el("ambientVolRow");
  const ambientVolume = el("ambientVolume");
  const scriptBox = el("scriptBox");

  /* ============================= INIT ============================= */
  function init() {
    applyStoredTheme();
    renderCategoryNav();
    renderGrid();
    updateStatsUI();
    updateStreakUI();
    bindEvents();
  }

  function applyStoredTheme() {
    const stored = localStorage.getItem(STORAGE_KEYS.theme);
    if (stored === "dark" || stored === "light") {
      document.documentElement.setAttribute("data-theme", stored);
      themeToggle.textContent = stored === "dark" ? "☀️" : "🌙";
    }
  }

  /* ============================= CATEGORY NAV ============================= */
  function getCategories() {
    const counts = {};
    MEDITATIONS.forEach((m) => { counts[m.category] = (counts[m.category] || 0) + 1; });
    return counts;
  }

  function renderCategoryNav() {
    const counts = getCategories();
    const cats = Object.keys(counts).sort();
    let html = `<button data-cat="All" class="${state.category === "All" ? "active" : ""}">
      <span>All Meditations</span><span class="count">${MEDITATIONS.length}</span>
    </button>`;
    cats.forEach((c) => {
      html += `<button data-cat="${escapeHtml(c)}" class="${state.category === c ? "active" : ""}">
        <span>${escapeHtml(c)}</span><span class="count">${counts[c]}</span>
      </button>`;
    });
    categoryNav.innerHTML = html;
  }

  /* ============================= GRID ============================= */
  function getFilteredMeditations() {
    return MEDITATIONS.filter((m) => {
      if (state.favoritesOnly && !state.favorites.includes(m.id)) return false;
      if (state.category !== "All" && m.category !== state.category) return false;
      if (m.duration > state.maxDuration) return false;
      if (state.query) {
        const q = state.query.toLowerCase();
        const haystack = (m.title + " " + m.description + " " + m.category).toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }

  function renderGrid() {
    const list = getFilteredMeditations();

    if (state.favoritesOnly) {
      sectionTitle.textContent = "My Favorites";
      sectionSubtitle.textContent = `${list.length} saved meditation${list.length === 1 ? "" : "s"}.`;
    } else if (state.category !== "All") {
      sectionTitle.textContent = state.category;
      sectionSubtitle.textContent = `${list.length} guided session${list.length === 1 ? "" : "s"} in this category.`;
    } else {
      sectionTitle.textContent = "All Meditations";
      sectionSubtitle.textContent = `${MEDITATIONS.length} guided sessions to help you rest, focus, and reset.`;
    }

    emptyState.hidden = list.length !== 0;
    cardGrid.innerHTML = list.map(cardHTML).join("");
  }

  function cardHTML(m) {
    const isFav = state.favorites.includes(m.id);
    return `
      <article class="card" data-id="${m.id}" tabindex="0" role="button" aria-label="Open ${escapeHtml(m.title)}">
        <div class="card-top">
          <span class="card-tag">${escapeHtml(m.category)}</span>
          <span class="card-duration">${m.duration} min</span>
        </div>
        <h3>${escapeHtml(m.title)}</h3>
        <p>${escapeHtml(m.description)}</p>
        <div class="card-footer">
          <span class="card-level">${escapeHtml(m.level)}</span>
          <button class="card-fav ${isFav ? "active" : ""}" data-fav="${m.id}" aria-label="Toggle favorite">${isFav ? "♥" : "♡"}</button>
        </div>
      </article>
    `;
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  /* ============================= EVENTS ============================= */
  function bindEvents() {
    categoryNav.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-cat]");
      if (!btn) return;
      state.category = btn.dataset.cat;
      state.favoritesOnly = false;
      renderCategoryNav();
      renderGrid();
    });

    searchInput.addEventListener("input", (e) => {
      state.query = e.target.value.trim();
      renderGrid();
    });

    durationFilter.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      [...durationFilter.children].forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      state.maxDuration = Number(chip.dataset.max);
      renderGrid();
    });

    showFavoritesBtn.addEventListener("click", () => {
      state.favoritesOnly = true;
      state.category = "All";
      renderCategoryNav();
      renderGrid();
    });

    cardGrid.addEventListener("click", (e) => {
      const favBtnEl = e.target.closest("[data-fav]");
      if (favBtnEl) {
        toggleFavorite(favBtnEl.dataset.fav);
        return;
      }
      const card = e.target.closest(".card");
      if (card) openPlayer(card.dataset.id);
    });

    cardGrid.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const card = e.target.closest(".card");
      if (card) { e.preventDefault(); openPlayer(card.dataset.id); }
    });

    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      themeToggle.textContent = next === "dark" ? "☀️" : "🌙";
      localStorage.setItem(STORAGE_KEYS.theme, next);
    });

    playerClose.addEventListener("click", closePlayer);
    playerOverlay.addEventListener("click", (e) => { if (e.target === playerOverlay) closePlayer(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !playerOverlay.hidden) closePlayer(); });

    playPauseBtn.addEventListener("click", togglePlayPause);
    restartBtn.addEventListener("click", restartSession);
    favBtn.addEventListener("click", () => { if (state.current) toggleFavorite(state.current.id); });

    voiceToggle.addEventListener("change", () => {
      state.voiceEnabled = voiceToggle.checked;
      if (!state.voiceEnabled) window.speechSynthesis && window.speechSynthesis.cancel();
      else if (state.isPlaying) speakParagraph(state.paraIndex);
    });

    rateSelect.addEventListener("change", () => {
      state.rate = Number(rateSelect.value);
    });

    ambientChips.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      [...ambientChips.children].forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      state.ambientSound = chip.dataset.sound;
      ambientVolRow.hidden = state.ambientSound === "none";
      stopAmbient();
      if (state.isPlaying && state.ambientSound !== "none") startAmbient();
    });

    ambientVolume.addEventListener("input", () => {
      state.ambientVolume = Number(ambientVolume.value) / 100;
      if (state.audioNodes && state.audioNodes.gain) {
        state.audioNodes.gain.gain.value = state.ambientVolume;
      }
    });
  }

  function toggleFavorite(id) {
    const idx = state.favorites.indexOf(id);
    if (idx === -1) state.favorites.push(id); else state.favorites.splice(idx, 1);
    saveJSON(STORAGE_KEYS.favorites, state.favorites);
    renderGrid();
    if (state.current && state.current.id === id) {
      const isFav = state.favorites.includes(id);
      favBtn.textContent = isFav ? "♥" : "♡";
      favBtn.classList.toggle("active", isFav);
    }
  }

  /* ============================= PLAYER ============================= */
  function openPlayer(id) {
    const m = MEDITATIONS.find((x) => x.id === id);
    if (!m) return;
    stopEverything();

    state.current = m;
    state.elapsedSec = 0;
    state.totalSec = m.duration * 60;
    state.paraIndex = 0;
    state.paragraphs = m.script.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
    state.sessionLogged = false;

    playerCategory.textContent = m.category;
    playerLevel.textContent = m.level;
    playerTitle.textContent = m.title;
    playerDescription.textContent = m.description;
    scriptBox.innerHTML = state.paragraphs.map((p, i) => `<p class="para" data-i="${i}">${escapeHtml(p)}</p>`).join("");

    const isFav = state.favorites.includes(m.id);
    favBtn.textContent = isFav ? "♥" : "♡";
    favBtn.classList.toggle("active", isFav);

    updateTimerDisplay();
    progressFill.style.width = "0%";
    playPauseBtn.textContent = "▶";
    breathingOrb.classList.remove("breathing");

    playerOverlay.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closePlayer() {
    stopEverything();
    playerOverlay.hidden = true;
    document.body.style.overflow = "";
  }

  function togglePlayPause() {
    if (!state.current) return;
    if (state.isPlaying) pauseSession(); else playSession();
  }

  function playSession() {
    state.isPlaying = true;
    playPauseBtn.textContent = "⏸";
    breathingOrb.classList.add("breathing");

    state.timerHandle = setInterval(tick, 1000);

    if (state.ambientSound !== "none") startAmbient();

    if (state.voiceEnabled && "speechSynthesis" in window) {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      } else if (!window.speechSynthesis.speaking) {
        speakParagraph(state.paraIndex);
      }
    }
  }

  function pauseSession() {
    state.isPlaying = false;
    playPauseBtn.textContent = "▶";
    breathingOrb.classList.remove("breathing");
    clearInterval(state.timerHandle);
    stopAmbient();
    if ("speechSynthesis" in window && window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
    }
  }

  function restartSession() {
    if (!state.current) return;
    stopEverything();
    state.elapsedSec = 0;
    state.paraIndex = 0;
    updateTimerDisplay();
    progressFill.style.width = "0%";
    [...scriptBox.children].forEach((p) => p.classList.remove("active", "done"));
    playSession();
  }

  function stopEverything() {
    clearInterval(state.timerHandle);
    state.isPlaying = false;
    if (playPauseBtn) playPauseBtn.textContent = "▶";
    if (breathingOrb) breathingOrb.classList.remove("breathing");
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    stopAmbient();
  }

  function tick() {
    state.elapsedSec += 1;
    updateTimerDisplay();
    const pct = Math.min(100, (state.elapsedSec / state.totalSec) * 100);
    progressFill.style.width = pct + "%";

    if (state.elapsedSec >= state.totalSec) {
      completeSession();
    }
  }

  function updateTimerDisplay() {
    const remaining = Math.max(0, state.totalSec - state.elapsedSec);
    const mm = String(Math.floor(remaining / 60)).padStart(2, "0");
    const ss = String(remaining % 60).padStart(2, "0");
    timerDisplay.textContent = `${mm}:${ss}`;
  }

  function completeSession() {
    stopEverything();
    progressFill.style.width = "100%";
    if (!state.sessionLogged) {
      state.sessionLogged = true;
      logCompletedSession(state.current.duration);
    }
    showToast("Session complete. Well done. 🌿");
  }

  /* ============================= SPEECH (TEXT-TO-SPEECH) ============================= */
  function speakParagraph(index) {
    if (!("speechSynthesis" in window)) return;
    if (!state.voiceEnabled) return;
    if (!state.current || index >= state.paragraphs.length) return;

    [...scriptBox.children].forEach((p, i) => {
      p.classList.toggle("active", i === index);
      p.classList.toggle("done", i < index);
    });
    const activeEl = scriptBox.querySelector(`[data-i="${index}"]`);
    if (activeEl) activeEl.scrollIntoView({ behavior: "smooth", block: "center" });

    const utter = new SpeechSynthesisUtterance(state.paragraphs[index]);
    utter.rate = state.rate;
    utter.pitch = 0.95;
    utter.onend = () => {
      if (!state.isPlaying) return;
      state.paraIndex = index + 1;
      if (state.paraIndex < state.paragraphs.length) {
        setTimeout(() => speakParagraph(state.paraIndex), 900);
      } else {
        [...scriptBox.children].forEach((p) => p.classList.add("done"));
      }
    };
    window.speechSynthesis.speak(utter);
  }

  /* ============================= AMBIENT SOUND (Web Audio API) ============================= */
  function ensureAudioCtx() {
    if (!state.audioCtx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      state.audioCtx = new Ctx();
    }
    if (state.audioCtx.state === "suspended") state.audioCtx.resume();
    return state.audioCtx;
  }

  function makeNoiseBuffer(ctx) {
    const bufferSize = 2 * ctx.sampleRate;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    return buffer;
  }

  function startAmbient() {
    stopAmbient();
    const ctx = ensureAudioCtx();
    const masterGain = ctx.createGain();
    masterGain.gain.value = state.ambientVolume;
    masterGain.connect(ctx.destination);

    const nodes = { gain: masterGain, extras: [] };

    if (state.ambientSound === "white") {
      const src = ctx.createBufferSource();
      src.buffer = makeNoiseBuffer(ctx);
      src.loop = true;
      src.connect(masterGain);
      src.start();
      nodes.extras.push(src);

    } else if (state.ambientSound === "rain") {
      const src = ctx.createBufferSource();
      src.buffer = makeNoiseBuffer(ctx);
      src.loop = true;
      const filter = ctx.createBiquadFilter();
      filter.type = "highpass";
      filter.frequency.value = 1200;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 0.6;
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.3;
      const lfoDepth = ctx.createGain();
      lfoDepth.gain.value = 0.3;
      lfo.connect(lfoDepth);
      lfoDepth.connect(lfoGain.gain);
      src.connect(filter);
      filter.connect(lfoGain);
      lfoGain.connect(masterGain);
      src.start(); lfo.start();
      nodes.extras.push(src, lfo);

    } else if (state.ambientSound === "ocean") {
      const src = ctx.createBufferSource();
      src.buffer = makeNoiseBuffer(ctx);
      src.loop = true;
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 500;
      const waveGain = ctx.createGain();
      waveGain.gain.value = 0.5;
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.12;
      const lfoDepth = ctx.createGain();
      lfoDepth.gain.value = 0.4;
      lfo.connect(lfoDepth);
      lfoDepth.connect(waveGain.gain);
      src.connect(filter);
      filter.connect(waveGain);
      waveGain.connect(masterGain);
      src.start(); lfo.start();
      nodes.extras.push(src, lfo);

    } else if (state.ambientSound === "drone") {
      const freqs = [110, 165, 220];
      freqs.forEach((f, i) => {
        const osc = ctx.createOscillator();
        osc.type = "sine";
        osc.frequency.value = f;
        const g = ctx.createGain();
        g.gain.value = 0.15 / (i + 1);
        osc.connect(g);
        g.connect(masterGain);
        osc.start();
        nodes.extras.push(osc);
      });
    }

    state.audioNodes = nodes;
  }

  function stopAmbient() {
    if (!state.audioNodes) return;
    try {
      state.audioNodes.extras.forEach((n) => { try { n.stop(); } catch (e) {} try { n.disconnect(); } catch (e) {} });
      state.audioNodes.gain.disconnect();
    } catch (e) { /* ignore */ }
    state.audioNodes = null;
  }

  /* ============================= STATS & STREAK ============================= */
  function logCompletedSession(durationMinutes) {
    const stats = state.stats;
    stats.sessions += 1;
    stats.minutes += durationMinutes;

    const today = new Date();
    const todayStr = today.toDateString();

    if (stats.lastDate !== todayStr) {
      const yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);
      if (stats.lastDate === yesterday.toDateString()) {
        stats.streak += 1;
      } else {
        stats.streak = 1;
      }
      stats.lastDate = todayStr;
    }

    saveJSON(STORAGE_KEYS.stats, stats);
    updateStatsUI();
    updateStreakUI();
  }

  function updateStatsUI() {
    statSessions.textContent = state.stats.sessions;
    statMinutes.textContent = state.stats.minutes;
    statStreak.textContent = `${state.stats.streak} day${state.stats.streak === 1 ? "" : "s"}`;
  }

  function updateStreakUI() {
    streakCount.textContent = state.stats.streak;
  }

  /* ============================= TOAST ============================= */
  let toastTimer = null;
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
  }

  /* ============================= START ============================= */
  document.addEventListener("DOMContentLoaded", init);
})();
