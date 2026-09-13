// Meditations library — original guided meditation scripts.
// Each entry: id, title, category, duration (minutes), level, description, script (paragraphs joined by \n\n)

const MEDITATIONS = [

  // ───────────────────────────── SLEEP ─────────────────────────────
  {
    id: "sleep-01", title: "Drifting into Deep Sleep", category: "Sleep", duration: 12, level: "All Levels",
    description: "A slow body-relaxation practice to ease you into restful sleep.",
    script: `Settle into your bed and let your body sink into the mattress. Close your eyes, and take one slow breath in through your nose, and let it go with a soft sigh through your mouth.

There is nowhere else you need to be. Nothing left to finish tonight. This is the end of your day, and you have earned this rest.

Bring your attention to your feet. Let them go completely heavy and loose. Feel that heaviness rise slowly into your ankles, your calves, your knees. With every breath out, your legs sink a little deeper.

Let the heaviness spread into your hips, your lower back, your stomach. Your whole body is being held by the bed beneath you — you don't have to hold yourself up anymore.

Relax your hands, your arms, your shoulders. Let your shoulders drop away from your ears. Soften your jaw, your eyes, the small muscles around your forehead. Your whole face is smooth and still.

With each slow breath, you drift a little further from the day, and a little closer to sleep. There is nothing to do now but rest. Let go, and let sleep come.`
  },
  {
    id: "sleep-02", title: "Counting Down to Rest", category: "Sleep", duration: 8, level: "Beginner",
    description: "A gentle countdown meditation to quiet a busy mind before sleep.",
    script: `Lie down comfortably and let your eyes close. Take a deep breath in, and a long, slow breath out.

We're going to count slowly down from twenty to one. With each number, let yourself sink a little deeper into rest.

Twenty... nineteen... feel your body growing heavier. Eighteen... seventeen... your breathing slows and softens. Sixteen... fifteen... any tension in your shoulders melts away. Fourteen... thirteen... your mind grows quiet, like a lake at dusk. Twelve... eleven... you feel safe, warm, unhurried.

Ten... nine... eight... each number carries you further from the day behind you. Seven... six... five... your thoughts drift by like slow clouds, nothing to chase, nothing to hold. Four... three... you are almost there. Two... one...

Now simply rest. There is nowhere to go and nothing to do. Let sleep find you in its own time, gently, easily, completely.`
  },
  {
    id: "sleep-03", title: "The Quiet House", category: "Sleep", duration: 10, level: "All Levels",
    description: "A visualization journey through a peaceful home, room by room, into sleep.",
    script: `Imagine a small, quiet house at the end of a lane, lit softly from within. This house is yours, entirely safe, entirely peaceful.

You step inside. The front room is warm, with a fire glowing low in the hearth. You feel the day's worries stay at the door, unable to follow you in.

Walk slowly down the hallway. Each step you take feels heavier, softer, slower. You pass a window where moonlight spills gently onto the floor.

At the end of the hall is your room. The bed is turned down, the sheets are cool and inviting. You climb in, and it holds you perfectly.

Outside, everything is still. No one needs anything from you here. There is only the soft rhythm of your breath, in and out, and the quiet of this safe, still house settling around you.

Let your body grow heavy against the sheets. Let your mind grow quiet like the hallway, like the moonlight, like the house at rest. Sleep is close now. Let it come.`
  },
  {
    id: "sleep-04", title: "Releasing the Day", category: "Sleep", duration: 9, level: "All Levels",
    description: "A meditation for setting down the mental weight of the day before sleep.",
    script: `Before you sleep, let's set the day down, piece by piece.

Take a breath in, and as you breathe out, silently say: "The day is over." Whatever happened today — the tasks finished, the ones left undone — none of it needs you right now.

Picture each worry as a small stone. One by one, pick them up in your mind, and simply place them on a shelf outside your bedroom door. They'll still be there tomorrow if you need them. Tonight, you don't.

Feel your chest rise and fall. Feel the weight already lifting from your shoulders, now that the stones are set down.

There is nothing to solve in the dark. No decision to make right now. Only rest.

Let your breathing slow, natural and unforced. Let your body soften into the bed. The day is over. You did enough. You are enough. Now let yourself rest, fully and completely, until morning.`
  },
  {
    id: "sleep-05", title: "Ocean of Rest", category: "Sleep", duration: 11, level: "All Levels",
    description: "A rhythmic, wave-like meditation using the ocean's rhythm to guide you to sleep.",
    script: `Picture yourself lying on warm sand, near the edge of a calm, dark ocean. The waves roll in slowly, and pull back out just as slowly — a rhythm older than thought itself.

Let your breath match the waves. Breathe in as a wave rises... and breathe out as it settles back into the sea.

With each wave, feel your body sink a little deeper into the warm sand beneath you. Your legs grow heavy. Your arms grow heavy. The sand holds you perfectly, and you don't need to hold yourself at all.

The stars above are wide and quiet. Nothing moves quickly here. Nothing needs to.

Wave after wave, your mind grows as calm and unhurried as the sea. Any thought that arises simply floats out with the tide, gone before you need to catch it.

Keep breathing with the waves. In... and out. There is nowhere to be but here, drifting, resting, safe on this quiet shore, closer to sleep with every breath.`
  },

  // ───────────────────────────── STRESS RELIEF ─────────────────────────────
  {
    id: "stress-01", title: "Melting Tension", category: "Stress Relief", duration: 8, level: "All Levels",
    description: "A progressive relaxation to release physical tension caused by stress.",
    script: `Find a comfortable position, and let your eyes close or soften. Take a deep breath in, and let it out slowly, like a long exhale of everything you've been carrying.

Bring your awareness to your jaw. Notice if it's clenched, and let it loosen. Let your tongue rest gently behind your teeth.

Move to your shoulders. So often we carry our stress right here. Let them drop, away from your ears, heavy and loose.

Notice your hands. Are they clenched, even slightly? Let your fingers uncurl, let your palms soften open.

Feel your stomach. Let it soften too — you don't need to hold it tight. Let your breath move it freely, rising and falling.

With every exhale, imagine tension leaving your body like steam rising and dissolving into the air. You don't have to fix anything right now. You only have to breathe, and let go, one small release at a time, until your body remembers what ease feels like.`
  },
  {
    id: "stress-02", title: "The Pressure Valve", category: "Stress Relief", duration: 6, level: "Beginner",
    description: "A short breathing practice to relieve acute stress in the moment.",
    script: `Stop for a moment, right where you are. Feel your feet on the floor, your body in the chair or standing. You are here, safe, in this moment.

Take a breath in through your nose for a count of four. Hold it gently for a count of four. Now release it slowly through your mouth for a count of six, like air easing out of a valve.

Do that again: in for four, hold for four, out for six, longer than the in-breath, letting your nervous system know it's safe to slow down.

Notice: the thing that felt urgent a moment ago is still there, but you don't have to solve it in your body. You can meet it with a steadier heart rate, a calmer chest, a clearer mind.

One more round: in for four, hold for four, out for six. Let your shoulders drop as you exhale. You have already changed the moment, just by breathing this way. Carry this steadiness back with you.`
  },
  {
    id: "stress-03", title: "Untangling the Knot", category: "Stress Relief", duration: 10, level: "Intermediate",
    description: "A meditation for working through the tight knot of accumulated stress.",
    script: `Notice where in your body stress tends to gather — perhaps your chest, your stomach, the back of your neck. Bring your attention there now, gently, like placing a warm hand on the spot.

Imagine that tension as a knot of rope. You don't need to yank it apart. Just notice its shape. How tight is it? Does it have edges, a texture, a temperature?

Breathe into that space. As you inhale, imagine the breath as warmth surrounding the knot. As you exhale, imagine the tiniest thread of it loosening — not gone, just slightly less tight than before.

There's no need to rush this. Knots loosen one loop at a time. Breathe in warmth, breathe out one small release, again and again.

Ask yourself gently: what is this stress trying to protect me from? You don't need an answer right now — just the asking softens its grip.

With each breath, the knot continues to loosen, thread by thread, until your body remembers it is allowed to soften, allowed to rest, even before every problem is solved.`
  },
  {
    id: "stress-04", title: "Widening the Lens", category: "Stress Relief", duration: 9, level: "Intermediate",
    description: "A perspective-shifting meditation to soften the intensity of a stressful moment.",
    script: `When stress takes over, our attention narrows, like a lens zoomed too far in on one problem. Let's widen that lens together.

Take a slow breath, and notice the size of the room you're in. Notice the walls, the light, the space around you that has nothing to do with the stressful thing at all.

Now imagine zooming out further — picture the building you're in, the street outside, the whole town going about its business, unaware of this one tight knot of worry in your chest.

Zoom out further still. Picture the country, the turning earth, the vastness of the sky above it all. Your stress is real, and it is also, from this height, one small point of light among countless others.

Breathe here for a moment, in this wider view. The problem hasn't disappeared, but it is no longer the whole sky. It is one star among many, and you are still here, breathing, capable, whole.

Slowly return your attention to the room, carrying this wider view with you.`
  },
  {
    id: "stress-05", title: "Grounding Through the Senses", category: "Stress Relief", duration: 7, level: "Beginner",
    description: "A sensory grounding technique (5-4-3-2-1) to calm an overwhelmed nervous system.",
    script: `When the mind is racing, the senses can bring us back to now. Let's move through them together, slowly.

Notice five things you can see around you. Just name them silently — a shape, a color, a shadow on the wall. Let your eyes rest on each one for a moment.

Notice four things you can feel — the texture of your clothing, the temperature of the air, the surface beneath your hands, the weight of your own body in the chair.

Notice three things you can hear — near sounds, far sounds, even the quiet hum beneath the silence.

Notice two things you can smell, or simply notice the scent of the air itself.

Notice one thing you can taste, even if it's simply the inside of your own mouth.

Take a breath. Notice: you did that without your racing thoughts. For these few minutes, your body was anchored fully in the present, and the present, right now, is safe.`
  },

  // ───────────────────────────── ANXIETY RELIEF ─────────────────────────────
  {
    id: "anxiety-01", title: "Steady in the Storm", category: "Anxiety Relief", duration: 9, level: "All Levels",
    description: "A meditation for finding a still center when anxious thoughts feel overwhelming.",
    script: `Anxiety can feel like standing in a storm, thoughts and fears whipping past like wind. Let's find the still point at the center of it.

Place a hand on your chest, or simply imagine one there. Feel the rise and fall beneath your palm. This rhythm has continued, without your effort, every moment of your life.

You don't need to stop the storm. Trees don't stop the wind — they bend, and their roots hold firm. Imagine roots extending from you, down through the floor, deep into the earth, steady no matter what moves above.

Let the anxious thoughts pass overhead like storm clouds. You don't have to chase them or push them away. Simply notice: "There is a thought," and let your roots hold you exactly where you are.

Breathe in for four counts. Breathe out for six. Again. In for four. Out for six.

The storm may still be moving, but you are rooted, steady, breathing. This feeling will pass, as all weather does. For now, you only need to hold steady, one breath at a time.`
  },
  {
    id: "anxiety-02", title: "Naming the Fear", category: "Anxiety Relief", duration: 8, level: "Intermediate",
    description: "A practice of gently naming anxious feelings to reduce their intensity.",
    script: `Anxiety often grows larger in the dark, unnamed. Let's bring some light to it together.

Notice the feeling in your body right now — perhaps tightness in the chest, a racing heart, a restless energy. You don't need to change it yet. Just notice it, as you would notice weather.

Silently name it: "This is anxiety." Not "I am anxious" — simply, "Anxiety is here right now." This small shift creates space between you and the feeling.

Ask the feeling, gently, without demanding an answer: "What are you trying to protect me from?" Let whatever comes up simply arrive, without judgment.

Now place a hand on your heart, and say inwardly: "This is a moment of difficulty. Difficulty is part of being alive. May I be kind to myself right now."

Breathe slowly. The fear doesn't need to disappear for you to be okay. You can hold it gently, the way you'd hold a frightened animal — not fighting it, just staying near it until it settles.`
  },
  {
    id: "anxiety-03", title: "The Anchor Breath", category: "Anxiety Relief", duration: 6, level: "Beginner",
    description: "A short breath-focused anchor for moments of acute anxiety.",
    script: `Right now, in this moment, you are safe enough to breathe. Let's use your breath as an anchor.

Breathe in slowly through your nose, counting to four in your mind. One, two, three, four.

Hold gently for a moment.

Breathe out slowly through your mouth, counting to six. One, two, three, four, five, six.

Notice: the out-breath is longer than the in-breath. This tells your nervous system that it's safe to settle, even before your mind believes it.

Let's do this three more times together. In for four... out for six. In for four... out for six. In for four... out for six.

If your mind wanders to worry, that's alright — just gently bring it back to counting the breath. The breath is always here, always available, an anchor you carry with you everywhere.

You are doing this exact breath, right now, and that is enough. One more round, whenever you need it.`
  },
  {
    id: "anxiety-04", title: "Making Room for Uncertainty", category: "Anxiety Relief", duration: 10, level: "Intermediate",
    description: "A meditation for easing the grip of anxiety rooted in not knowing what comes next.",
    script: `So much anxiety comes from wanting certainty about a future that hasn't happened yet. Let's practice, just for these few minutes, making room for not knowing.

Notice any thoughts trying to solve the future right now — the "what ifs," the rehearsed conversations, the imagined worst cases. You don't need to solve them in this moment. Let them exist in the background, like a radio playing quietly in another room.

Bring your attention instead to what is actually true right now: you are breathing. You are supported by the ground or the chair beneath you. In this exact instant, you are okay.

Say to yourself: "I don't know what will happen, and I don't have to know right now." Let that sentence be a place to rest, rather than a problem to fix.

Breathe in safety. Breathe out the need for certainty, just for this moment.

The future will unfold as it will, and you will meet it with whatever tools you have then. For now, there is only this breath, this body, this small, sturdy, uncertain, okay moment.`
  },

  // ───────────────────────────── MORNING ENERGY ─────────────────────────────
  {
    id: "morning-01", title: "Waking with Intention", category: "Morning Energy", duration: 7, level: "Beginner",
    description: "A gentle morning meditation to set a calm, intentional tone for the day.",
    script: `Good morning. Before the day pulls you into its momentum, let's take a few minutes to arrive here first.

Feel your body in the bed or the chair. Notice the quality of the morning light. Take a slow breath in, filling your lungs fully, and let it out with a soft sound if you like.

Ask yourself: how do I want to feel today? Not what do I need to do — how do I want to feel. Calm? Focused? Light-hearted? Let one word arise.

Picture yourself moving through the day carrying that feeling with you, like a small lantern lighting the way through each task and conversation.

Take another breath, and silently set this intention: "Today, I choose to move with [that word]." You don't need to control every outcome — just carry this quality with you as best you can.

When you're ready, gently open your eyes, or if they're already open, let your gaze soften into the room. Carry this steady, chosen feeling into your first step of the day.`
  },
  {
    id: "morning-02", title: "Sunrise Energy", category: "Morning Energy", duration: 6, level: "Beginner",
    description: "A brief energizing visualization to shake off sleepiness and greet the day.",
    script: `Sit up, or stand if you can, and take a deep breath in through your nose, filling your chest and belly.

Imagine the sun rising slowly at the center of your chest — warm, golden light beginning to spread with each breath.

Breathe in, and feel that light grow brighter, reaching your shoulders, your arms, all the way to your fingertips.

Breathe in again, and feel it spread down through your torso, your legs, down to the soles of your feet, waking up every part of you.

Roll your shoulders back. Feel your spine lengthen, lifting you a little taller. You are not dragging yourself into today — you are rising to meet it, powered by this inner light.

Take one more full breath, and as you exhale, imagine that golden light radiating outward, ready to meet whatever the day brings.

You are awake. You are energized. You are ready. Let's begin.`
  },
  {
    id: "morning-03", title: "Gratitude at Dawn", category: "Morning Energy", duration: 5, level: "Beginner",
    description: "A brief gratitude practice to start the day from a place of abundance.",
    script: `Before you reach for your phone, before the day's demands arrive, take a moment here.

Breathe in, and silently think of one thing you're grateful for this morning — it can be as simple as a warm bed, a roof over your head, or the fact that you woke up at all.

Breathe out, and let that gratitude settle in your chest.

Breathe in again, and think of one person you're grateful for. Picture their face for a moment. Let a small warmth arise for them.

Breathe out, and silently wish them well, wherever they are.

One more breath in — think of one thing about your own body or mind that you're grateful for today. Perhaps your strength, your curiosity, your capacity to keep going.

Breathe out, and carry this quiet abundance with you as you step into your day. You are starting from enough, not from lack. Let that be your foundation this morning.`
  },
  {
    id: "morning-04", title: "The First Ten Minutes", category: "Morning Energy", duration: 8, level: "Intermediate",
    description: "A grounding meditation to claim the first moments of your day before it claims you.",
    script: `The first minutes of the day often set its tone. Let's claim these ten minutes fully, before anything else does.

Sit comfortably, spine tall but not stiff. Close your eyes and take three slow, deep breaths, letting each exhale be a little longer than the inhale.

Notice: right now, no one needs anything from you. No message has been answered yet, no task begun. This is a rare, quiet space that belongs entirely to you.

Bring to mind the shape of your day ahead — not every detail, just its general shape. Notice if any tension arises, and simply breathe into it without needing to solve anything yet.

Ask yourself: what is the one thing that matters most today? Let an answer arise naturally, without forcing it.

Take one more breath, and silently commit: "I will meet today at my own pace, starting from this calm."

When you're ready, open your eyes slowly. You've claimed this time. Whatever comes next, you begin it from a place of steadiness, not scramble.`
  },
  {
    id: "morning-05", title: "Morning Body Wake-Up", category: "Morning Energy", duration: 6, level: "Beginner",
    description: "A gentle body-awareness practice to fully wake the body before the day begins.",
    script: `Still lying down or seated, let's wake the body gently, from the inside out.

Wiggle your toes, slowly, feeling life return to your feet. Roll your ankles in small circles.

Bring awareness to your legs, and give them a gentle stretch, reaching through your heels.

Interlace your fingers and stretch your arms overhead, feeling your ribs expand as you inhale deeply.

Roll your shoulders backward, a few slow circles, releasing any stiffness from sleep. Gently roll your neck side to side.

Take a deep breath in, and as you exhale, make a soft sound — a sigh, a hum, whatever wants to come out — releasing the last heaviness of sleep.

Blink your eyes open, or if open already, let them focus on something nearby. Notice colors, textures, the simple fact of being awake in a body that carried you safely through the night.

You are here. You are awake. Your body is ready. Let's meet the day.`
  },

  // ───────────────────────────── BODY SCAN ─────────────────────────────
  {
    id: "bodyscan-01", title: "Full Body Scan", category: "Body Scan", duration: 15, level: "All Levels",
    description: "A complete head-to-toe body scan for deep relaxation and awareness.",
    script: `Lie down or sit comfortably, and let your eyes close. Take three slow breaths, letting your body settle with each one.

Bring your attention to the top of your head. Notice any sensation there — tingling, warmth, nothing at all. Just notice, without needing to change anything.

Move your attention to your forehead, your eyebrows, your eyes. Let them soften. Move to your jaw, and let it unclench.

Bring awareness down to your neck and shoulders. Notice if they're holding tension, and simply breathe into that space.

Move down through your arms, to your elbows, your wrists, your hands, each finger. Notice the quality of sensation in each part.

Bring your attention to your chest, feeling it rise and fall. Move to your stomach, your lower back, your hips.

Continue down through your thighs, your knees, your calves, your ankles, into your feet, all the way to your toes.

Now feel your whole body at once, resting, breathing, whole. Notice how it feels to have moved through it all with such care. Stay here for a few more breaths, simply present in your body, exactly as it is.`
  },
  {
    id: "bodyscan-02", title: "Tension Release Scan", category: "Body Scan", duration: 10, level: "Intermediate",
    description: "A body scan focused specifically on identifying and releasing held tension.",
    script: `Settle into a comfortable position and take a few deep breaths. We're going to move through your body, searching specifically for tension, and inviting it to release.

Start at your feet. Clench them tightly for a moment... and release. Feel the difference between the tension and the relaxation that follows.

Move to your calves and thighs. Tighten them for a breath... and let go completely.

Bring awareness to your hands. Make tight fists... hold... and release, letting your fingers relax open.

Tense your shoulders, lifting them toward your ears... hold... and drop them down, exhaling as you do.

Scrunch your face muscles tightly... hold... and release, letting your face go completely smooth and soft.

Now take a full breath in, tensing your whole body at once for just a moment... and as you exhale, release everything, all at once, like a wave washing over you.

Rest here in the contrast — how different your body feels now, having consciously let go. Stay in this ease for a few more breaths.`
  },
  {
    id: "bodyscan-03", title: "Scan for Sleep", category: "Body Scan", duration: 12, level: "Beginner",
    description: "A slow body scan designed to transition the body toward sleep.",
    script: `Lying in bed, let your eyes close and your body settle into stillness.

Bring your attention to your feet, and simply invite them to feel heavy, as if sinking into warm sand. Let that heaviness be a signal to your whole body: it's safe to fully let go.

Move that heavy, sinking feeling up into your calves, your knees, your thighs. Each part grows heavier, more still, more at rest.

Let the feeling spread into your hips and lower back, releasing into the mattress beneath you.

Bring the heaviness into your stomach, your chest, noticing your breath slow naturally as your body settles.

Let your arms grow heavy, your hands, resting wherever they lie.

Let your shoulders sink away from your ears, your neck soften, your jaw loosen, your eyes rest gently closed.

Feel your entire body now, heavy, warm, held completely by the bed. There is nothing left to do but rest. Let this heaviness carry you gently toward sleep.`
  },
  {
    id: "bodyscan-04", title: "Mindful Body Awareness", category: "Body Scan", duration: 9, level: "Beginner",
    description: "A short, curious body scan to reconnect with physical sensation during the day.",
    script: `Pause wherever you are, and take a breath. For the next few minutes, let's simply visit the body you've been living in all day, perhaps without much notice.

Notice your feet against the floor or in your shoes. What do you feel — pressure, warmth, the texture of your socks?

Notice your legs. Are they crossed, still, restless? No need to change anything, just notice.

Bring awareness to your torso. Is your posture open or curled inward? Notice without judging.

Notice your hands. Are they relaxed or gripping something? Let them soften if they can.

Notice your shoulders, your neck, your jaw — the places we so often forget until they ache.

Notice your face. Are your brows furrowed? Let them ease if you can.

Take one more full breath, and simply appreciate this body that carries you through every moment of your life, often without thanks. Offer it a small thanks now, and carry this awareness back into your day.`
  },

  // ───────────────────────────── BREATHING ─────────────────────────────
  {
    id: "breath-01", title: "Box Breathing", category: "Breathing", duration: 6, level: "Beginner",
    description: "A structured four-count breathing pattern used to calm the nervous system quickly.",
    script: `Box breathing is simple: four equal counts, like the four sides of a box. Let's begin.

Breathe in slowly through your nose for a count of four. One, two, three, four.

Hold that breath gently for a count of four. One, two, three, four.

Breathe out slowly through your mouth for a count of four. One, two, three, four.

Hold empty, gently, for a count of four. One, two, three, four.

Let's repeat that full box: in for four... hold for four... out for four... hold for four.

Once more: in... hold... out... hold.

Notice how each side of the box gives your mind something simple to follow, a structure to rest inside while everything else stays still.

Continue this pattern at your own pace for as long as feels good, and know you can return to this box, this steady shape, any time you need calm.`
  },
  {
    id: "breath-02", title: "4-7-8 Calming Breath", category: "Breathing", duration: 5, level: "Beginner",
    description: "A well-known breathing ratio designed to trigger the body's relaxation response.",
    script: `This breathing pattern uses a simple ratio — four, seven, eight — to help your body shift out of stress and into calm.

Let your tongue rest gently behind your top front teeth. Exhale completely through your mouth, making a soft whoosh sound.

Close your mouth, and inhale quietly through your nose for a count of four.

Hold your breath gently for a count of seven.

Exhale completely through your mouth, with that same whoosh sound, for a count of eight.

That's one round. Let's continue: inhale for four... hold for seven... exhale for eight.

Once more: in for four... hold for seven... out for eight.

Notice that the exhale is the longest part — this is what tells your nervous system it's safe to slow down.

You can repeat this pattern up to four times whenever you need a quick reset. Let your body trust this rhythm, and let calm follow naturally.`
  },
  {
    id: "breath-03", title: "Belly Breathing", category: "Breathing", duration: 7, level: "Beginner",
    description: "A foundational diaphragmatic breathing practice for deep relaxation.",
    script: `Place one hand on your chest and one hand on your belly. We're going to breathe in a way that moves the bottom hand more than the top.

Take a slow breath in through your nose, and let your belly expand outward, like a balloon filling with air. Feel your bottom hand rise.

Let your breath out slowly through your mouth, feeling your belly fall gently back down. Your top hand stays relatively still throughout.

Let's continue this way. Breathe in, belly rises... breathe out, belly falls. In... and out.

This kind of breathing engages your diaphragm fully, sending a clear signal of safety to your nervous system, unlike the shallow, quick breaths we take when stressed.

Continue at your own gentle pace. In, belly rises. Out, belly falls. Notice the natural pause between breaths, a small moment of stillness each time.

There's nothing to force here — just a slow, full, easy breath, moving your belly like the tide, over and over, calming you from the inside.`
  },
  {
    id: "breath-04", title: "Alternate Nostril Breathing", category: "Breathing", duration: 8, level: "Intermediate",
    description: "A balancing breath practice traditionally used to calm and center the mind.",
    script: `Sit comfortably with your spine tall. Bring your right hand up, folding your index and middle fingers into your palm, leaving your thumb and ring finger free.

Close your eyes, and gently close your right nostril with your thumb. Inhale slowly through your left nostril.

At the top of the breath, close your left nostril with your ring finger, release your thumb, and exhale slowly through your right nostril.

Now inhale through your right nostril.

At the top, close your right nostril again, release your ring finger, and exhale through your left nostril.

That's one full round. Let's continue at your own pace: inhale left, exhale right, inhale right, exhale left.

Notice the sense of balance this creates, breath moving evenly between both sides, mind settling into the rhythm.

Continue for as many rounds as feels good, then let your hand rest, breathing naturally, and notice the clear, centered quality left behind.`
  },
  {
    id: "breath-05", title: "Cooling Breath", category: "Breathing", duration: 5, level: "Intermediate",
    description: "A refreshing breath practice to cool intense emotion or physical heat.",
    script: `This breath can help cool down intense feelings — frustration, anger, or simply a warm day.

Curl your tongue if you can, forming a tube, or purse your lips slightly if curling isn't possible for you.

Inhale slowly through your curled tongue or pursed lips, feeling the cool air move across your tongue.

Close your mouth, and exhale slowly and completely through your nose.

Let's repeat: inhale cool air through your mouth... exhale through your nose.

Again: inhale, feeling that cooling sensation... exhale slowly through your nose.

Notice, with each round, a subtle cooling sensation, both physically and in your emotional state. Whatever heat you were carrying — irritation, urgency, overwhelm — has a little more room to settle.

Continue for several more rounds at your own pace, and when you're ready, let your breath return to normal, carrying this cooler, clearer feeling with you.`
  },
  {
    id: "breath-06", title: "Extended Exhale", category: "Breathing", duration: 6, level: "Beginner",
    description: "A simple, effective technique using longer exhales to calm the body quickly.",
    script: `This is one of the simplest and most effective calming techniques: making your exhale longer than your inhale.

Breathe in naturally through your nose for a count of four.

Breathe out slowly through your mouth or nose for a count of six, letting the breath trail out gently at the end.

Let's continue: in for four... out for six.

Again: in for four... out for six.

If six feels short, try extending further — in for four, out for seven or eight, whatever feels natural without straining.

Each longer exhale sends a message to your nervous system: it's safe to slow the heart rate, safe to release muscle tension, safe to rest.

Continue this pattern for a few more rounds, letting each exhale be a little wave of release. In... and a longer, slower out. There's nothing else to do right now but breathe this way, patiently, for as long as you need.`
  },

  // ───────────────────────────── LOVING-KINDNESS ─────────────────────────────
  {
    id: "loving-01", title: "Loving-Kindness for Yourself", category: "Loving-Kindness", duration: 9, level: "Beginner",
    description: "A foundational metta practice directing compassion toward yourself first.",
    script: `Sit comfortably, and bring a hand to your heart if that feels supportive. Take a few breaths to settle in.

We're going to offer yourself some simple, kind phrases. There's no need to force a feeling — just let the words plant a seed.

Silently repeat: "May I be safe."

"May I be healthy."

"May I be at ease."

"May I be happy."

Take a breath between each phrase, letting it settle before moving to the next.

If it feels difficult to direct kindness toward yourself, that's alright — notice that difficulty without judgment, and offer the phrases anyway, as an act of gentle practice rather than a test you must pass.

Let's repeat the phrases once more, a little slower: "May I be safe. May I be healthy. May I be at ease. May I be happy."

Rest for a moment in whatever warmth, however small, these words have created. You are worthy of this same kindness you so easily offer others.`
  },
  {
    id: "loving-02", title: "Kindness for a Loved One", category: "Loving-Kindness", duration: 8, level: "Beginner",
    description: "A metta practice extending compassion to someone you care about.",
    script: `Bring to mind someone you love easily — a friend, family member, or pet. Picture their face clearly, and notice the warmth that naturally arises.

Silently offer them these phrases: "May you be safe."

"May you be healthy."

"May you be at ease."

"May you be happy."

Take a breath after each phrase, letting the wish settle, like sunlight resting on them.

Notice how naturally kindness flows toward this person. There's no effort needed here — just an open heart, offering good will freely.

Let's repeat once more: "May you be safe. May you be healthy. May you be at ease. May you be happy."

Take a final breath, and silently thank this person for the ease they bring into your practice, and into your life. Let that warmth linger in your chest for a few more breaths before you continue with your day.`
  },
  {
    id: "loving-03", title: "Kindness for a Difficult Person", category: "Loving-Kindness", duration: 10, level: "Advanced",
    description: "An advanced metta practice extending compassion toward someone challenging.",
    script: `This practice can be challenging, so approach it gently, without forcing anything.

Bring to mind someone you find difficult — not the most difficult person in your life, just someone who creates mild friction. Picture them clearly.

Try offering, even tentatively: "May you be safe."

Notice any resistance that arises. That's completely normal — simply acknowledge it, and continue if you're able.

"May you be healthy."

"May you be at ease."

"May you be happy."

Remember: wishing someone well doesn't excuse their behavior, and it doesn't mean you must remain close to them. It simply frees you from carrying the weight of resentment.

If the phrases feel too hard to say sincerely, you can instead try: "May you find whatever you need to suffer less." This can feel more honest while still opening the heart slightly.

Take a breath, and let this practice be enough for today. Even a small crack of openness toward someone difficult is a meaningful step. Return your attention to your own breath, and rest here for a moment.`
  },
  {
    id: "loving-04", title: "Kindness for All Beings", category: "Loving-Kindness", duration: 11, level: "Intermediate",
    description: "An expansive metta practice extending compassion outward to all beings everywhere.",
    script: `Let's widen our circle of kindness as far as it can go.

Begin with yourself: "May I be safe, healthy, at ease, and happy." Take a breath.

Now bring to mind someone you love: "May you be safe, healthy, at ease, and happy." Take a breath.

Now bring to mind someone neutral — a stranger you passed today, someone whose name you may not even know: "May you be safe, healthy, at ease, and happy."

Now, if you're able, bring to mind someone difficult: "May you be safe, healthy, at ease, and happy."

Now widen further — picture your neighborhood, your city, offering the same wish to everyone within it.

Widen further still — your country, then the whole world, every person waking and sleeping right now, in joy or in struggle: "May all beings be safe. May all beings be healthy. May all beings be at ease. May all beings be happy."

Rest for a moment in this vast, warm field of good will, knowing you are one small, connected part of it, sending and receiving kindness in equal measure.`
  },

  // ───────────────────────────── GRATITUDE ─────────────────────────────
  {
    id: "gratitude-01", title: "Three Good Things", category: "Gratitude", duration: 6, level: "Beginner",
    description: "A simple practice of recalling three good things to cultivate gratitude.",
    script: `Settle in, and take a slow breath. We're going to bring to mind three good things — they don't need to be extraordinary, just true.

Think of the first: it could be a warm cup of coffee, a kind word from a stranger, sunlight through a window. Picture it clearly, and notice how it feels in your body to recall it.

Take a breath, and let a second good thing arise. Maybe a moment of laughter, a text from a friend, a task completed. Let yourself really feel the small pleasure of it again.

Take another breath, and let a third good thing come to mind. It could be as simple as this very moment, a few minutes set aside just for you.

Notice: the day may have had difficulties too, and that's alright — both can be true. But right now, let these three good things fill a little more space in your mind.

Carry this fuller, warmer feeling with you as you continue your day.`
  },
  {
    id: "gratitude-02", title: "Gratitude for the Body", category: "Gratitude", duration: 8, level: "Beginner",
    description: "A body-focused gratitude meditation honoring what your body does for you daily.",
    script: `We often notice our bodies only when something hurts. Let's take a few minutes to notice all the ways your body quietly supports you.

Bring attention to your lungs, breathing right now without your conscious effort, keeping you alive every second of your life. Silently offer thanks.

Bring attention to your heart, beating steadily, tirelessly, since before you were born. Offer thanks.

Notice your legs, which have carried you to every place you've ever been. Your hands, which have held everything you've ever touched, created, or comforted.

Notice your eyes, which have shown you sunsets, faces of people you love, the words on this very meditation. Your ears, which have let you hear music, laughter, rain.

Even the parts that feel imperfect, or that ache, have worked hard for you, often without thanks.

Take a full breath in, and silently say: "Thank you, body, for carrying me through everything so far." Let that gratitude settle, quiet and sincere, for a few more breaths.`
  },
  {
    id: "gratitude-03", title: "Gratitude for People", category: "Gratitude", duration: 7, level: "Beginner",
    description: "A meditation honoring the people who have shaped and supported your life.",
    script: `Bring to mind someone who helped shape who you are — a teacher, a family member, a friend. Picture their face, and let a feeling of warmth arise.

Silently thank them, even if they'll never hear it: "Thank you for what you gave me."

Bring to mind someone who supported you recently — even in a small way, a kind word, a favor, a moment of patience. Let gratitude arise for them too.

Bring to mind a stranger who once did something kind — held a door, offered a smile at the right moment. Notice how even brief kindness from strangers can stay with us.

Consider, too, the countless people you'll never meet whose work supports your daily life — those who grew your food, built your home, wrote the music you love.

Take a breath, and let a broad, quiet appreciation settle over you for the web of people, known and unknown, who have made your life what it is. You are not alone. You never really have been.`
  },

  // ───────────────────────────── FOCUS & PRODUCTIVITY ─────────────────────────────
  {
    id: "focus-01", title: "Clearing Mental Clutter", category: "Focus & Productivity", duration: 7, level: "Beginner",
    description: "A meditation to quiet distracting thoughts before focused work.",
    script: `Before you dive into your work, let's clear away some of the mental clutter first.

Take a slow breath in, and as you exhale, imagine your mind as a desk covered in loose papers — every worry, every reminder, every unfinished thought.

One by one, imagine gathering those papers into a single stack. You don't need to read them right now, just set them neatly to one side, ready to return to later if needed.

Take another breath, and notice the clear space that's left. This is the space you'll work from.

Bring to mind the one task you want to focus on next. Picture it clearly, simply, without the surrounding noise.

Take one more breath, and silently say: "For the next stretch of time, this is the only thing that matters."

When you're ready, open your eyes, and move directly into that task, carrying this cleared, focused space with you.`
  },
  {
    id: "focus-02", title: "Single-Pointed Focus", category: "Focus & Productivity", duration: 8, level: "Intermediate",
    description: "A concentration practice using the breath to train sustained attention.",
    script: `This practice trains the same mental muscle you use for deep focus — the ability to return, again and again, to one thing.

Choose your breath as your anchor. Simply feel the sensation of air entering your nose, and leaving again. Nothing more complicated than that.

Count your breaths silently: one on the inhale, two on the exhale, three on the next inhale, and so on, up to ten. Then start again at one.

When you notice your mind has wandered — and it will — don't judge yourself. Simply notice where it went, and gently return to counting, starting back at one.

This wandering and returning is not a failure of the practice — it is the practice. Each time you notice and return, you strengthen your ability to redirect attention on command.

Continue for a few more rounds, counting patiently: one, two, three... noticing, returning, again and again.

When you finish, notice the quality of your attention now — a little steadier, a little more available for whatever focused task comes next.`
  },
  {
    id: "focus-03", title: "The Two-Minute Reset", category: "Focus & Productivity", duration: 2, level: "Beginner",
    description: "A very short reset to use between tasks or meetings to refresh focus.",
    script: `Take one full breath in, and let it out slowly.

Notice your posture. Sit up a little taller, letting your spine lengthen.

Take another breath, and as you exhale, let go of whatever just happened — the last email, the last conversation, the last task. It's finished now.

Take a third breath, and silently ask: "What matters most in the next stretch of time?" Let one clear answer arise.

Roll your shoulders back once, releasing any tension gathered from sitting.

Take one final breath, and open your eyes if they were closed, ready to move directly and cleanly into what's next, carrying nothing extra with you.`
  },
  {
    id: "focus-04", title: "Deep Work Preparation", category: "Focus & Productivity", duration: 6, level: "Intermediate",
    description: "A pre-work ritual meditation to prime your mind for sustained deep focus.",
    script: `Before beginning a stretch of demanding work, let's prepare your mind the way an athlete would prepare their body.

Take three slow, deep breaths, letting each one fully fill your lungs and fully empty.

Bring to mind exactly what you're about to work on. Picture the first small step clearly — not the whole project, just the very next action.

Silently set an intention: "For this session, I will give this task my full attention, and let everything else wait."

Notice any resistance or distraction already trying to pull at you — a notification, a wandering thought, an urge to check something else. Acknowledge it, and let it wait outside this space, just for now.

Take one more breath, and feel a sense of readiness gather in your chest, like a runner settling into the blocks before a race.

When you're ready, begin — not by thinking about starting, but by simply taking that first small action, carrying this clear, prepared focus with you.`
  },
  {
    id: "focus-05", title: "Releasing Perfectionism", category: "Focus & Productivity", duration: 8, level: "Intermediate",
    description: "A meditation for easing the grip of perfectionism that blocks focused progress.",
    script: `Sometimes what blocks our focus isn't distraction, but the fear of doing something imperfectly. Let's loosen that grip for a moment.

Take a breath, and bring to mind the task you've been avoiding or struggling with. Notice any tightness that arises simply from thinking about it.

Silently acknowledge: "I want this to be good, and that desire is also making it harder to start."

Breathe out, and imagine setting down the need for it to be perfect, just for this next work session. Imagine instead aiming only for "started" or "a little further along than before."

Picture a rough draft, a messy first attempt, and notice that it's not a failure — it's simply the necessary first shape a thing takes before it improves.

Take another breath, and silently permit yourself: "It's allowed to be imperfect right now. I can improve it later."

Feel a little more room to move, a little less pressure holding you still. When you're ready, begin — imperfectly, and that will be enough.`
  },

  // ───────────────────────────── WALKING MEDITATION ─────────────────────────────
  {
    id: "walking-01", title: "Mindful Walking", category: "Walking Meditation", duration: 10, level: "Beginner",
    description: "A basic walking meditation bringing full attention to each step.",
    script: `Find a space where you can walk slowly, back and forth, or in a small loop. Stand still for a moment first, feeling your feet on the ground.

Begin walking slower than feels natural. Notice the lifting of your foot, the moving of it through the air, the placing of it down again. Lift, move, place.

Notice the shift of weight from one leg to the other. Notice your balance adjusting with each small step.

There's no destination here. The walking itself is the whole point, not a way to get somewhere else.

If your mind wanders to your to-do list or a conversation from earlier, simply notice, and bring your attention back to the sensation of lifting, moving, placing.

Notice the air on your skin, the sounds around you, without needing to name or judge any of it.

Continue at this slow, attentive pace for the remaining time, treating each step as its own small, complete moment, worthy of your full attention.`
  },
  {
    id: "walking-02", title: "Walking with Gratitude", category: "Walking Meditation", duration: 8, level: "Beginner",
    description: "A walking meditation combining movement with gratitude for the body and surroundings.",
    script: `As you begin walking at a natural, comfortable pace, bring your attention first to your feet, thanking them silently for carrying you.

With each step, notice one small thing in your surroundings — a patch of light, a sound, a plant, a texture — and silently offer a small note of appreciation for it.

Notice your breath moving naturally as you walk, filling your lungs without any effort from you.

Continue walking, and let each footstep be paired with a small, quiet "thank you" — for the ground that holds you, for the legs that move you, for the eyes that let you see this place.

If you pass another person, silently wish them well, without needing to interact.

Continue this rhythm of stepping and appreciating for the remainder of your walk, letting gratitude accumulate quietly with every step, until the whole walk feels like a small, moving offering of thanks.`
  },
  {
    id: "walking-03", title: "Walking Off Stress", category: "Walking Meditation", duration: 12, level: "Intermediate",
    description: "A walking meditation designed to physically discharge accumulated stress.",
    script: `Begin walking at a slightly brisker pace than usual — enough to feel your body working, your breath deepening.

With each step, imagine you are walking away from something — a stressful thought, a tense conversation, the residue of a hard day. Let each footfall feel like a small release.

Notice your arms swinging naturally. Let your shoulders loosen with the rhythm of your stride.

As you walk, silently think: "With this step, I let go of tension." Repeat this with several steps in a row, feeling your body loosen further with each repetition.

Notice your breath syncing naturally with your pace — perhaps two steps per inhale, two per exhale. Let this rhythm carry you.

If a stressful thought arises, imagine placing it down on the path behind you with your next step, rather than carrying it forward.

Continue walking this way, releasing a little more with each stride, until you notice a real, physical difference in how your body feels — looser, warmer, lighter than when you began.`
  },

  // ───────────────────────────── GRIEF & DIFFICULT EMOTIONS ─────────────────────────────
  {
    id: "grief-01", title: "Sitting with Grief", category: "Grief & Difficult Emotions", duration: 10, level: "Intermediate",
    description: "A gentle meditation for allowing space for grief without rushing past it.",
    script: `This meditation doesn't ask you to feel better. It only asks you to be gently present with what is here.

Find a comfortable position, and place a hand on your chest if that feels supportive. Take a slow breath in, and let it out without needing to change anything yet.

Grief doesn't move on a schedule. If it's here right now, let it be here, without pushing it away and without needing to make it bigger than it already is.

Notice where you feel it in your body — perhaps a heaviness in the chest, a tightness in the throat. You don't need to fix this sensation. Just breathe near it, the way you'd sit quietly next to someone who's hurting.

If tears come, let them come. If they don't, that's alright too. Grief looks different in every person, every day.

Silently, you might say: "This loss mattered. This grief is a form of love with nowhere left to go." Let that be true, without needing to resolve it.

Take a few more breaths here, simply keeping this person, or this loss, gentle company for a little longer.`
  },
  {
    id: "grief-02", title: "Holding Difficult Emotions", category: "Grief & Difficult Emotions", duration: 9, level: "Intermediate",
    description: "A meditation for making space for any difficult emotion without being overwhelmed.",
    script: `Whatever you're feeling right now, let's make a little room for it, rather than pushing it away.

Take a breath, and notice the emotion present, without needing to name it perfectly. Notice where it lives in your body.

Imagine your awareness as a large, spacious room, and this emotion as a guest who has entered. You don't need to serve it, agree with it, or ask it to leave immediately. You can simply notice: "This is here right now."

Breathe with it. Let your breath be a little larger than the emotion itself, giving it room without letting it fill your entire awareness.

If it feels like too much, gently narrow your focus to just your breath, in and out, until it feels manageable again, then widen your attention again when you're ready.

Remind yourself silently: "Emotions are visitors. Even the hardest ones eventually move through and leave." You don't have to rush this one out the door. You only have to keep breathing, staying present, for as long as it takes.`
  },
  {
    id: "grief-03", title: "A Letter to What You've Lost", category: "Grief & Difficult Emotions", duration: 11, level: "Advanced",
    description: "A reflective meditation for processing loss through imagined words.",
    script: `Settle into a quiet, private space for this practice. Take a few slow breaths to arrive here fully.

Bring to mind whatever you have lost — a person, a relationship, a chapter of your life, a version of yourself. Let their presence, or its presence, arise clearly in your mind.

Imagine you could speak to it directly, just for these few minutes. What would you want it to know? Perhaps: "I miss you." Perhaps: "I'm still learning to live without you." Perhaps: "Thank you for what you gave me." Let whatever is true arise, without editing it.

Take a breath, and imagine, if it feels right, what this loss might say back to you — perhaps something simple, like: "You are allowed to keep living fully. That doesn't erase what we had."

You don't need to resolve everything in this one sitting. Grief is not a problem to be solved, but a relationship that continues to change shape over time.

Take a final breath, and gently release this conversation for now, carrying its warmth, or its ache, with you as you return to the room around you.`
  },

  // ───────────────────────────── CONFIDENCE & SELF-ESTEEM ─────────────────────────────
  {
    id: "confidence-01", title: "Building Inner Confidence", category: "Confidence & Self-Esteem", duration: 8, level: "Beginner",
    description: "A meditation to reconnect with your own inner strength and capability.",
    script: `Sit tall, and take a slow breath in, feeling your chest open and lift slightly.

Bring to mind a moment from your life when you handled something difficult well — big or small, it doesn't matter. Picture it clearly: where you were, how you felt, what you did.

Notice the qualities you used in that moment — perhaps patience, courage, creativity, persistence. These qualities are still part of you right now, not left behind in the past.

Silently say: "I have handled hard things before. I have what it takes to handle what's ahead."

Take a breath, and imagine that same quiet strength sitting in your chest right now, steady and available, whenever you need to draw on it.

You don't need to feel fearless to be confident — you only need to trust that you can move forward even while feeling uncertain, just as you have before.

Take one more breath, sitting a little taller, carrying this quiet, earned confidence with you.`
  },
  {
    id: "confidence-02", title: "Quieting the Inner Critic", category: "Confidence & Self-Esteem", duration: 9, level: "Intermediate",
    description: "A meditation for softening harsh self-criticism and building self-compassion.",
    script: `Notice, for a moment, the voice inside that criticizes you — the one that points out flaws, mistakes, and shortcomings. We're not going to fight this voice, just get to know it a little.

Ask yourself gently: whose voice does this sound like? Sometimes it echoes someone from our past. Notice this without judgment.

Now imagine speaking to this critical voice the way you might speak to a frightened friend: "I hear you. You're trying to protect me from failure or embarrassment. But this harshness isn't helping me grow — it's just hurting me."

Take a breath, and imagine offering yourself the same kindness you'd offer someone you love who made a mistake. What would you say to them? Try saying it to yourself now: "You're doing your best. You're allowed to be imperfect and still be worthy."

Place a hand on your heart, and take one more breath. Notice: you don't need the critic gone entirely, just quieter, and balanced by a stronger, kinder voice — one that believes in your effort, not just your outcomes.`
  },
  {
    id: "confidence-03", title: "Standing in Your Strength", category: "Confidence & Self-Esteem", duration: 7, level: "Beginner",
    description: "A short embodied practice for accessing physical and mental confidence.",
    script: `If you're able, sit or stand with your spine tall, shoulders back, chest slightly open — the posture of someone who feels capable.

Take a deep breath in, filling this open posture fully. Notice how the body itself can influence the mind — an open chest can create a feeling of openness within.

Silently recall three things you've accomplished, no matter how small. Let each one land fully: "I did that."

Take another breath, and feel your feet firmly grounded, whether sitting or standing. This is your foundation — steady, unshaken, entirely yours.

Silently say: "I don't need to be perfect to be capable. I don't need to feel fearless to act with courage."

Take one final breath, holding this open, grounded posture a moment longer, letting the feeling settle into your body, ready to carry with you into whatever comes next.`
  },

  // ───────────────────────────── QUICK RESET (1-3 MIN) ─────────────────────────────
  {
    id: "quick-01", title: "One-Minute Reset", category: "Quick Reset", duration: 1, level: "Beginner",
    description: "A one-minute breathing reset for busy moments.",
    script: `Take a deep breath in through your nose.

Hold it for a moment.

Let it out slowly through your mouth.

Again — breathe in deeply... hold... and release slowly.

One more time — in... hold... out, slow and complete.

Notice how your body feels just slightly different than sixty seconds ago. Carry that small shift forward.`
  },
  {
    id: "quick-02", title: "Three Deep Breaths", category: "Quick Reset", duration: 1, level: "Beginner",
    description: "The simplest possible reset — three intentional breaths.",
    script: `Wherever you are, just pause for three full breaths.

First breath: in slowly through your nose, out slowly through your mouth.

Second breath: in a little deeper, out a little slower.

Third breath: in fully, filling your whole chest, and out completely, releasing everything with it.

That's it. Three breaths, fully felt. Continue on, just a little steadier than before.`
  },
  {
    id: "quick-03", title: "Shoulder Drop", category: "Quick Reset", duration: 2, level: "Beginner",
    description: "A quick physical release for tension held in the shoulders and neck.",
    script: `Take a breath in, and lift your shoulders up toward your ears, holding the tension there for a moment.

Now exhale sharply, and let your shoulders drop completely, like dead weight.

Do that again — inhale, shoulders up and tight... exhale, drop them down.

One more time — inhale, squeeze everything tight... exhale, release it all at once.

Roll your shoulders back a few times, feeling the space that's opened up.

Take one more easy breath, noticing how much lighter your shoulders feel now, and carry that ease forward.`
  },
  {
    id: "quick-04", title: "Reset Between Meetings", category: "Quick Reset", duration: 2, level: "Beginner",
    description: "A brief reset designed for the gap between back-to-back meetings or calls.",
    script: `Close your eyes for just a moment, or soften your gaze.

Take a breath in, and silently let go of the conversation that just ended — it's finished now.

Take a breath out, and let your body unclench from however you were sitting.

Roll your neck gently side to side, releasing any stiffness.

Take one more breath, and bring to mind, briefly, what you want to bring into the next conversation — attention, patience, clarity, whatever fits.

Open your eyes, and step into what's next, having genuinely closed the door on what came before.`
  },
  {
    id: "quick-05", title: "Grounding in Ten Seconds", category: "Quick Reset", duration: 1, level: "Beginner",
    description: "An extremely brief grounding technique for sudden overwhelm.",
    script: `Feel your feet, right now, on the floor.

Feel the surface beneath you supporting your full weight.

Take one breath, noticing the air moving in and out.

Look around and notice one object near you.

That's it — you are here, now, supported, breathing. Continue on.`
  },
  {
    id: "quick-06", title: "The Reset Sigh", category: "Quick Reset", duration: 1, level: "Beginner",
    description: "A physiological sigh technique for rapid nervous system calming.",
    script: `Take a normal breath in through your nose.

Now, without exhaling, take a second, smaller sip of air on top of it, filling your lungs a bit further.

Now let it all out in one long, slow sigh through your mouth.

Let's do that again — inhale, a second small sip on top, then a long, slow exhale.

One more — inhale, top it off, and release it all with a long sigh.

Notice your heart rate settling slightly. This simple pattern is one of the fastest ways to calm your body. Use it anytime.`
  },

  // ───────────────────────────── BEGINNER'S MIND ─────────────────────────────
  {
    id: "beginner-01", title: "Your First Meditation", category: "Beginner's Mind", duration: 5, level: "Beginner",
    description: "A gentle introduction to meditation for complete beginners.",
    script: `Welcome. There's no special skill required for this — just a willingness to sit quietly for a few minutes.

Find a comfortable position, seated or lying down. You can close your eyes, or simply let your gaze rest softly on the floor in front of you.

Take a breath in, and notice it. Take a breath out, and notice that too. That's really all meditation is — noticing what's already happening.

Your mind will wander. This is completely normal, and it happens to everyone, including people who have meditated for decades. When you notice your mind has wandered, simply and kindly bring your attention back to your breath. That gentle returning is the entire practice.

There's no need to clear your mind completely or feel a certain way. Just breathe, notice, and return, as many times as needed.

Let's continue for a few more breaths together, quietly. In... and out. In... and out.

Whenever you're ready, gently open your eyes. You just meditated. That's the whole practice, and you can return to it anytime.`
  },
  {
    id: "beginner-02", title: "Learning to Notice", category: "Beginner's Mind", duration: 6, level: "Beginner",
    description: "A basic mindfulness practice teaching the skill of simple noticing.",
    script: `This practice is about building one simple skill: noticing.

Sit comfortably, and take a breath. Notice the sound of your own breath, or the silence around it.

Notice a physical sensation right now — perhaps your hands resting on your lap, or your back against the chair. You don't need to change anything, just notice it's there.

Notice if there's a thought passing through your mind right now. You don't need to follow it or push it away — just notice: "There's a thought."

Notice an emotion, if one is present. Calm, restless, curious, bored — whatever it is, simply notice it without needing it to be different.

This is the entire skill of mindfulness: noticing what's true right now, again and again, gently, without judgment.

Let's practice this noticing for a few more breaths — sensation, thought, emotion, breath — simply observing, like a curious visitor in your own experience.

When you're ready, open your eyes, carrying this noticing with you into the rest of your day.`
  },
  {
    id: "beginner-03", title: "It's Okay to Be New at This", category: "Beginner's Mind", duration: 5, level: "Beginner",
    description: "A reassuring meditation addressing common beginner worries about meditating 'wrong'.",
    script: `If you're worried you're doing this wrong, take comfort: there is no wrong way to begin.

Sit or lie down comfortably. Close your eyes if that feels right, or keep them softly open.

Take a breath in, and out. If your mind immediately starts making a to-do list, that's fine — that's what minds do. Just notice it, and come back to your breath.

You don't need to sit perfectly still. Small movements are okay. You don't need to feel instantly peaceful — some days will feel calmer than others, and that's normal too.

There's no score to keep, no level to reach today. The only goal is to spend a few minutes being present with yourself, exactly as you are right now, thoughts and all.

Take a few more breaths, simply allowing this experience to be whatever it is — restless, calm, boring, interesting. All of it counts as meditation.

When you're ready, open your eyes. You showed up, and that is genuinely the hardest and most important part.`
  },

  // ───────────────────────────── MINDFUL EATING ─────────────────────────────
  {
    id: "eating-01", title: "Mindful Eating Basics", category: "Mindful Eating", duration: 7, level: "Beginner",
    description: "A foundational mindful eating practice using a single piece of food.",
    script: `Choose a small piece of food in front of you — anything will work. Before eating, simply look at it as if you've never seen food like this before.

Notice its color, its shape, the way light falls on its surface.

Bring it closer, and notice its smell. Let yourself really register it before continuing.

Place it in your mouth, but don't chew yet. Notice the texture against your tongue, any immediate taste that arises.

Slowly begin to chew, noticing how the flavor changes and develops. Notice the texture shifting as you chew.

Continue chewing slowly, far longer than usual, staying curious about each small change.

When you're ready to swallow, notice the sensation of it moving down, and the quiet that follows.

Take a breath, and notice how different this felt from your usual, quicker way of eating. Carry this quality of attention into your next meal, even if just for the first few bites.`
  },
  {
    id: "eating-02", title: "Gratitude Before Meals", category: "Mindful Eating", duration: 4, level: "Beginner",
    description: "A brief gratitude practice to do before any meal.",
    script: `Before you begin eating, pause for just a moment.

Take a breath, and look at the food in front of you. Consider, briefly, everything that brought it here — the sun and soil that grew it, the hands that harvested and prepared it, the journey it took to reach your plate.

Take another breath, and feel appreciation for having food available to you today, something not everyone can count on.

Notice your body's readiness to receive this nourishment — perhaps hunger, perhaps simply routine, either is fine.

Silently offer a small thought: "Thank you for this food, and for the many hands and processes that brought it here."

Take one more breath, and begin eating, carrying a touch of this awareness with you through the first few bites, even as the rest of your day continues around you.`
  },

  // ───────────────────────────── NATURE VISUALIZATION ─────────────────────────────
  {
    id: "nature-01", title: "Forest Sanctuary", category: "Nature Visualization", duration: 10, level: "All Levels",
    description: "A visualization journey through a peaceful, protective forest.",
    script: `Close your eyes, and imagine yourself standing at the edge of a quiet forest. Tall trees rise around you, their leaves rustling softly in a gentle breeze.

Step onto a soft dirt path beneath the canopy. Notice the dappled light filtering through the leaves above, moving gently as the branches sway.

Breathe in, and notice the smell of the forest — earth, leaves, a faint sweetness of growing things.

Continue walking slowly along the path. Notice the sound of birds somewhere above, the occasional rustle of small creatures in the underbrush, all of it peaceful, none of it threatening.

You come to a small clearing, sunlight pooling in the center. Step into the warmth, and feel it on your skin.

Sit down on a soft patch of moss or grass. Feel the forest around you like a protective circle, ancient and steady, having stood long before you arrived and will stand long after.

Rest here for a few more breaths, held safely by this quiet, green sanctuary, absorbing its calm, unhurried patience into your own body.`
  },
  {
    id: "nature-02", title: "Mountain Stillness", category: "Nature Visualization", duration: 9, level: "Intermediate",
    description: "A visualization using the unmoving strength of a mountain to build inner steadiness.",
    script: `Imagine yourself seated at the base of a great mountain, ancient and unmoving. Feel its presence beside you, solid and calm.

Notice how the mountain doesn't react to the weather around it — rain, wind, sun, snow all pass across its surface, and still it remains exactly as it is, deeply rooted, unshaken.

Imagine your own spine growing straight and strong like the mountain's peak, your hips and legs as wide and grounded as its base.

Whatever is happening in your life right now — the equivalent of weather passing across the mountain's face — notice that underneath it, there is a steadier part of you that doesn't need to be shaken by every passing storm.

Breathe in the mountain's patience. Breathe out any urgency to react to every difficulty immediately.

Sit here for a few more breaths, borrowing the mountain's stillness, its willingness to simply exist, solid and unmoved, regardless of what moves around it.

Carry this steady, mountain-like quality with you as you slowly bring your awareness back to the room.`
  },
  {
    id: "nature-03", title: "Rain Meditation", category: "Nature Visualization", duration: 8, level: "All Levels",
    description: "A calming visualization using the sound and rhythm of rainfall.",
    script: `Imagine yourself somewhere warm and dry, listening to rain falling gently outside — on a roof, against a window, onto leaves.

Notice the layered sound of it: the steady patter, occasional heavier drops, a soft, constant hush beneath it all.

Let your breath slow to match this unhurried rhythm. There's nowhere to rush to while the rain falls.

Imagine each raindrop as a small, separate moment, falling and landing, complete in itself, needing nothing else to justify its existence.

Let your thoughts be like the rain too — arising, falling, and passing, without needing you to catch or hold onto any single one.

Feel a sense of coziness settle over you, the kind that only comes from being safely sheltered while something larger moves outside.

Continue listening, breathing slowly, letting the rain wash a little more tension away with each falling drop, until your whole body feels as unhurried and settled as the quiet, steady rain itself.`
  },
  {
    id: "nature-04", title: "Meadow of Ease", category: "Nature Visualization", duration: 7, level: "Beginner",
    description: "A gentle visualization of resting in an open, sunlit meadow.",
    script: `Picture yourself lying in a wide, open meadow, tall grass swaying gently around you, a soft blue sky stretching overhead.

Feel the warmth of the sun on your skin, and a light breeze moving across the grass, carrying the scent of wildflowers.

Notice how much space there is here — no walls, no ceiling, just open sky in every direction. Let your mind feel just as open and unconfined.

Watch a few clouds drift slowly overhead. Notice how effortlessly they move, not forcing their shape or direction, simply drifting wherever the wind carries them.

Let your thoughts drift like those clouds too — appearing, changing shape, moving on, without needing your effort or control.

Feel the ground beneath you, solid and supportive, holding you completely so you don't need to hold yourself.

Rest here for a few more breaths, in this wide, warm, unhurried meadow, letting its spaciousness fill your whole body and mind.`
  },

  // ───────────────────────────── CHAKRA & ENERGY ─────────────────────────────
  {
    id: "chakra-01", title: "Grounding Root Energy", category: "Chakra & Energy", duration: 8, level: "Intermediate",
    description: "An energy-focused meditation centered on grounding and stability.",
    script: `Sit comfortably with your feet flat on the floor, or cross-legged if seated on the ground. Bring your attention to the base of your spine.

Imagine a warm, deep red light glowing softly at this point — your root, your foundation, your connection to stability and safety.

Breathe into this space, imagining the red light growing steadier and brighter with each inhale.

Imagine roots extending downward from this point, through the floor, deep into the earth below, anchoring you completely.

With each exhale, feel any anxious or scattered energy draining down through these roots, absorbed safely into the ground.

Silently repeat: "I am safe. I am grounded. I am supported by the earth beneath me."

Continue breathing into this steady red light for a few more rounds, feeling more anchored, more present, more solidly here with each breath.

When you're ready, keep this grounded feeling as you slowly bring your awareness back to the room around you.`
  },
  {
    id: "chakra-02", title: "Opening the Heart Center", category: "Chakra & Energy", duration: 9, level: "Intermediate",
    description: "A heart-centered energy meditation for cultivating openness and compassion.",
    script: `Sit comfortably, and bring your attention to the center of your chest. Imagine a soft green light glowing gently there, your heart center.

Breathe into this space, imagining the green light expanding slightly with each inhale, like a flower slowly opening.

Notice any tightness or protection you may be holding around your heart — this is natural, and doesn't need to be forced open.

With each breath, simply invite a little more openness, a little more softness, without pushing.

Bring to mind someone you love, and imagine sending a beam of this green light from your heart toward them, warm and unconditional.

Now imagine receiving that same warm light back into your own heart — you deserve this circulation of care, both given and received.

Breathe here for a few more rounds, feeling your chest soften, your heart center glowing steadily, open enough to give and receive warmth freely.

Carry this open, gentle quality with you as you complete this practice.`
  },
  {
    id: "chakra-03", title: "Third Eye Clarity", category: "Chakra & Energy", duration: 7, level: "Advanced",
    description: "A focus-oriented energy meditation centered on mental clarity and intuition.",
    script: `Sit tall and comfortable, and bring your attention to the space between your eyebrows, sometimes called the third eye.

Imagine a soft indigo light glowing gently at this point, associated with clarity, insight, and intuition.

Breathe into this space, imagining the light steady and clear, like a calm lamp in a quiet room.

Let go of any need to think your way to an answer right now. Instead, simply rest your attention here, open and receptive.

If a question has been weighing on you, silently hold it in this space, without grasping for a solution — sometimes clarity arrives more easily when we stop forcing it.

Breathe here for several more rounds, imagining this indigo light growing calm and bright, illuminating your thoughts gently rather than harshly.

When you're ready, release the visualization, and simply notice the quality of clarity, however subtle, that remains, carrying it with you as you continue your day.`
  },

  // ───────────────────────────── PAIN & ILLNESS RELIEF ─────────────────────────────
  {
    id: "pain-01", title: "Working with Physical Pain", category: "Pain & Illness Relief", duration: 10, level: "Intermediate",
    description: "A meditation for softening the relationship with chronic or acute physical pain.",
    script: `This practice won't make pain disappear, but it may change your relationship to it, which can ease suffering even when discomfort remains.

Find the most comfortable position available to you right now. Take a slow breath in, and out.

Notice the area of pain, if you're willing, with as much curiosity as you can manage. Rather than the single word "pain," notice its actual qualities — is it sharp, dull, throbbing, tight? Does it stay the same, or does it shift moment to moment?

Notice that surrounding this area, other parts of your body are not in pain right now. Your hands, perhaps, or your face. Let your awareness rest there for a moment too, giving yourself a fuller picture than pain alone.

Breathe into the area of discomfort, not to force it away, but simply to bring a gentle, steady presence to it, the way you might sit quietly with someone who's hurting.

Remind yourself: "This is hard right now, and I am doing my best to meet it with care rather than resistance." Resistance often amplifies suffering; gentle attention, even toward pain, can soften it slightly.

Continue breathing this way for as long as feels supportive, meeting your body exactly as it is right now.`
  },
  {
    id: "pain-02", title: "Comfort During Illness", category: "Pain & Illness Relief", duration: 8, level: "Beginner",
    description: "A soothing meditation for moments of sickness or physical discomfort.",
    script: `Being unwell can feel isolating and frustrating. Let's take a few minutes to offer your body some gentleness right now.

Settle into the most comfortable position you can find. There's no need to fight your current state — just let yourself rest here, fully.

Take a slow breath, and silently acknowledge: "My body is working hard right now to heal itself. It deserves patience, not frustration."

Notice any urge to compare this moment to when you felt well, or to rush the recovery. Gently let that comparison go, just for these few minutes, and meet yourself exactly as you are today.

Imagine your body's natural healing processes at work quietly beneath the surface — cells repairing, your immune system responding, all of it happening without needing your effort or worry.

Breathe in a sense of permission to rest completely, without guilt, for as long as your body needs.

Take a few more slow breaths, offering yourself the same tenderness you'd offer a loved one who was unwell, resting here together with your body as it does the important work of healing.`
  },
  {
    id: "pain-03", title: "Breathing Through Discomfort", category: "Pain & Illness Relief", duration: 6, level: "Beginner",
    description: "A brief breath-focused practice for moments of acute physical discomfort.",
    script: `Right now, in this moment of discomfort, let's use your breath as a steady companion.

Take a slow breath in, and notice that even amid discomfort, your breath is still available to you, still working.

As you exhale, imagine breathing out just a small percentage of tension surrounding the discomfort — not the sensation itself, just the tightness that often builds around it.

Breathe in again, and silently say: "I am breathing, and that means I am still here, still capable of getting through this moment."

Breathe out, releasing your grip, even slightly, on wishing this moment were different.

Continue this pattern — breathing in steadiness, breathing out resistance — for several more rounds, meeting the discomfort not with a fight, but with a patient, continuous breath.

Trust that this moment, like all moments, will shift and change, and that your breath will remain a reliable companion through whatever comes next.`
  },
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = MEDITATIONS;
}
