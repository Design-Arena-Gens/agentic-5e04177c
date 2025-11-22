export default function Home() {
  return (
    <div className="bg-rose-50 text-slate-900">
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-16 px-6 pb-20 pt-16 sm:px-10 lg:px-16">
        <header className="rounded-3xl border border-rose-100 bg-white p-10 shadow-sm">
          <p className="text-sm uppercase tracking-[0.35em] text-rose-400">
            Silent Relief
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Your Drug-Free Guide to Eliminating Menstrual Pain
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Crafted by a compassionate women&apos;s health coach and copywriter
            to help you reclaim your cycle with gentle, evidence-informed
            strategies. This guide meets you with empathy, honors every life
            stage, and delivers practical routines you can start today—no
            medications, no harsh interventions, only nurturing support.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#table-of-contents"
              className="inline-flex items-center justify-center rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-400 focus:outline-none focus-visible:ring focus-visible:ring-rose-500/60"
            >
              Jump to the guide
            </a>
            <a
              href="#implementation-calendar"
              className="inline-flex items-center justify-center rounded-full border border-rose-200 px-6 py-3 text-sm font-semibold text-rose-500 transition hover:border-rose-300 hover:bg-rose-100/50 focus:outline-none focus-visible:ring focus-visible:ring-rose-500/40"
            >
              30-day action plan
            </a>
          </div>
        </header>

        <aside
          id="table-of-contents"
          className="grid gap-6 rounded-3xl border border-rose-100 bg-white p-10 shadow-sm"
        >
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              How to use this guide
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Read it like a compassionate conversation. Move section by
              section, highlight what resonates, and translate the checklists
              into the rituals that suit your lifestyle. Each chapter is
              cross-linked so you can revisit the practices you need most—
              whether you&apos;re navigating your very first period or tending
              to your cycle through perimenopause.
            </p>
          </div>

          <div className="grid gap-2 text-sm font-medium text-slate-700 sm:grid-cols-2 sm:text-base">
            {[
              ["welcome-and-mindset", "Welcome & Mindset Reset"],
              ["compassionate-basics", "Compassionate Foundations"],
              ["understanding-pain", "Understanding Menstrual Pain"],
              ["life-stage-support", "Life Stage Support Plans"],
              ["nourishment", "Nourishment & Botanicals"],
              ["gentle-movement", "Gentle Movement Toolkit"],
              ["nervous-system", "Nervous System Care"],
              ["hands-on", "Hands-On & Environmental Relief"],
              ["daily-rhythms", "Daily Rhythms & Cycle Syncing"],
              ["relief-protocols", "Immediate Relief Protocols"],
              ["tracking", "Tracking & Progress"],
              ["implementation-calendar", "30-Day Implementation Calendar"],
              ["resource-library", "Resource Library & References"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={`#${href}`}
                className="rounded-full border border-rose-100 bg-rose-50 px-4 py-3 text-center text-sm font-semibold text-rose-600 transition hover:border-rose-200 hover:bg-rose-100 hover:text-rose-700"
              >
                {label}
              </a>
            ))}
          </div>

          <p className="text-xs text-slate-500">
            This material is educational and does not replace personalized
            medical care. Always collaborate with a trusted healthcare provider
            if you have underlying conditions, experience extreme pain, or note
            sudden changes in your cycle.
          </p>
        </aside>

        <article className="grid gap-12">
          <section
            id="welcome-and-mindset"
            className="rounded-3xl border border-rose-100 bg-white p-10 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              Welcome & Mindset Reset
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              <p>
                If menstrual pain has ever made you cancel plans, grit your teeth
                through school or work, or feel betrayed by your body, this guide
                is for you. You deserve relief that is gentle, affirming, and
                respects your desire to avoid medications or harsh interventions.
              </p>
              <p>
                I created this guide to place compassionate science in your
                hands. Every strategy is rooted in natural, chemical-free
                practices that support menstruating bodies without demanding
                high-impact workouts or perfection. Consider it your sanctuary
                for evidence-informed nurturing.
              </p>
              <div className="rounded-2xl bg-rose-50 p-5">
                <h3 className="text-lg font-semibold text-rose-600">
                  Mindset anchors
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
                  <li>
                    <strong className="text-slate-800">Healing is layered.</strong>{" "}
                    You don&apos;t need to adopt every practice at once. Consistent
                    small shifts compound into major relief.
                  </li>
                  <li>
                    <strong className="text-slate-800">Your pain is valid.</strong>{" "}
                    Pain intensity does not determine your strength or worth. It
                    is an invitation to listen.
                  </li>
                  <li>
                    <strong className="text-slate-800">Rest is productive.</strong>{" "}
                    Slowing down during your cycle is wise, not weak.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section
            id="compassionate-basics"
            className="rounded-3xl border border-rose-100 bg-white p-10 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              Compassionate Foundations
            </h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="space-y-4 text-base text-slate-600">
                <p>
                  These core habits soothe inflammation, balance hormones, and
                  calm the nervous system. Treat them as the soil that nourishes
                  every targeted technique that follows.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-slate-800">Hydration rhythm:</strong>{" "}
                    Sip warm or room-temperature water with lemon, cucumber, or
                    mint throughout the day to ease bloating and improve muscle
                    pliability.
                  </li>
                  <li>
                    <strong className="text-slate-800">Blood sugar steadiness:</strong>{" "}
                    Combine fiber, protein, and healthy fats in every meal to
                    avoid the hormone spikes that amplify cramps.
                  </li>
                  <li>
                    <strong className="text-slate-800">Sleep sanctuary:</strong>{" "}
                    Create a nightly wind-down ritual with dim lights, gentle
                    stretching, and no screens for 30 minutes pre-bed.
                  </li>
                  <li>
                    <strong className="text-slate-800">Cycle awareness:</strong>{" "}
                    Track your phases so you can anticipate energetic rises and
                    natural dips.
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl bg-rose-50 p-6 text-sm text-rose-700">
                <h3 className="text-lg font-semibold text-rose-600">
                  Quick-start checklist
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>Warm beverage within 30 minutes of waking.</li>
                  <li>Midday movement snack: 5-minute stretch or walk.</li>
                  <li>Protein-rich afternoon snack to prevent evening cravings.</li>
                  <li>Bedtime journal note: “How did my body feel today?”</li>
                </ul>
              </div>
            </div>
          </section>

          <section
            id="understanding-pain"
            className="rounded-3xl border border-rose-100 bg-white p-10 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              Understanding Menstrual Pain (In Plain Language)
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                Menstrual cramps emerge when the uterus contracts to shed its
                lining. Prostaglandins—hormone-like compounds—govern these
                contractions. Elevated prostaglandins can create intense cramping
                and inflammation. Supporting liver detoxification, gut health,
                and stress hormones keeps prostaglandins in balance.
              </p>
              <div className="rounded-2xl bg-rose-50/80 p-6">
                <h3 className="text-lg font-semibold text-rose-600">
                  Pain pathways to nurture
                </h3>
                <ul className="mt-4 list-disc space-y-3 pl-5">
                  <li>
                    <strong className="text-slate-800">Inflammation:</strong>{" "}
                    Gentle anti-inflammatory foods and adequate hydration reduce
                    swelling in the pelvic region.
                  </li>
                  <li>
                    <strong className="text-slate-800">Muscle tension:</strong>{" "}
                    Heat, magnesium-rich foods, and soft stretching calm overworked
                    uterine and lower-back muscles.
                  </li>
                  <li>
                    <strong className="text-slate-800">Nervous system overload:</strong>{" "}
                    Stress amplifies pain perception. Breathwork, guided imagery,
                    and supportive boundaries soften the stress response.
                  </li>
                  <li>
                    <strong className="text-slate-800">Digestion:</strong> Bloating
                    and constipation increase pressure on the uterus. Fiber,
                    movement, and abdominal massage create space.
                  </li>
                </ul>
              </div>
              <p>
                Severe or rapidly worsening pain can signal conditions such as
                endometriosis, adenomyosis, or fibroids. While this guide offers
                soothing strategies, work alongside a healthcare provider for full
                assessment if pain disrupts daily life despite consistent
                self-care.
              </p>
            </div>
          </section>

          <section
            id="life-stage-support"
            className="rounded-3xl border border-rose-100 bg-white p-10 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              Life Stage Support Plans
            </h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-rose-100 bg-rose-50 p-6">
                <h3 className="text-xl font-semibold text-rose-600">
                  Teens & Early Cycles
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-rose-700">
                  <li>Morning breathing: 4 counts inhale, 6 counts exhale.</li>
                  <li>Lunchbox focus: whole grain wrap, leafy greens, avocado.</li>
                  <li>After-school ritual: heat pack + journal prompt.</li>
                  <li>Cycle education: learn the four phases with a trusted adult.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-rose-100 bg-rose-50 p-6">
                <h3 className="text-xl font-semibold text-rose-600">
                  Busy Adulthood & Caregiving Seasons
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-rose-700">
                  <li>Batch-cook anti-inflammatory soups on high-energy days.</li>
                  <li>Schedule non-negotiable “Cycle Support” calendar blocks.</li>
                  <li>Delegate one household task during menstruation.</li>
                  <li>Use restorative yoga before tackling evening responsibilities.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-rose-100 bg-rose-50 p-6">
                <h3 className="text-xl font-semibold text-rose-600">
                  Perimenopause & Menopause Transition
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-rose-700">
                  <li>Grounding walk at sunrise or sunset to balance circadian cues.</li>
                  <li>Add flaxseed, sesame, or pumpkin seeds to meals for gentle hormone harmony.</li>
                  <li>Practice legs-up-the-wall nightly to ease pelvic congestion.</li>
                  <li>Track hot flashes or sleep changes alongside cycle notes.</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-base text-slate-600">
              Each life stage deserves personalized compassion. Adapt these ideas
              to your cultural traditions, body size, neurodiversity, and energy
              availability. Sustainability matters more than perfection.
            </p>
          </section>

          <section
            id="nourishment"
            className="rounded-3xl border border-rose-100 bg-white p-10 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              Nourishment & Botanicals
            </h2>
            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              <div className="space-y-4 text-base text-slate-600">
                <p>
                  Food is information for your hormones. Favor warming, mineral-rich
                  meals that stabilize blood sugar and reduce inflammation.
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    Cycle-friendly staples
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5">
                    <li>Stewed berries with chia and cinnamon for breakfast.</li>
                    <li>Leafy greens sautéed in olive oil with garlic and lemon.</li>
                    <li>Slow-cooked lentil or chickpea stews with turmeric and ginger.</li>
                    <li>Roasted root vegetables drizzled with tahini or hemp seeds.</li>
                    <li>Broths infused with seaweed, miso, or medicinal mushrooms.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    Gentle botanical allies
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5">
                    <li>
                      <strong>Ginger tea:</strong> Sip 2-3 cups daily in the premenstrual
                      phase to curb inflammation.
                    </li>
                    <li>
                      <strong>Chamomile infusion:</strong> Calms the nervous system and
                      eases uterine spasms.
                    </li>
                    <li>
                      <strong>Raspberry leaf tea:</strong> Tonifies uterine muscles and
                      balances cycles; steep for at least 10 minutes.
                    </li>
                    <li>
                      <strong>Topical magnesium oil:</strong> Apply to calves or lower belly
                      for muscle relaxation if tolerated.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rounded-2xl bg-rose-50 p-6">
                <h3 className="text-lg font-semibold text-rose-600">
                  Kitchen implementation tips
                </h3>
                <ul className="mt-4 list-disc space-y-3 pl-5 text-sm text-rose-700">
                  <li>Keep a “menstrual relief basket” with teas, warming spices, and heat packs.</li>
                  <li>Batch prep mineral-rich broths and freeze in single portions.</li>
                  <li>Blend roasted beets, berries, and coconut water for a pelvic circulation smoothie.</li>
                  <li>Pair every sweet treat with protein/fat to avoid blood sugar rollercoasters.</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              Always listen to your body and consult a qualified practitioner if you
              are pregnant, breastfeeding, or managing a medical condition.
            </p>
          </section>

          <section
            id="gentle-movement"
            className="rounded-3xl border border-rose-100 bg-white p-10 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              Gentle Movement Toolkit
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Movement is medicine when matched to your energy. These low-impact,
              nurturing practices promote circulation without stressing the body.
            </p>
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-rose-100 p-6 text-sm text-slate-600">
                <h3 className="text-lg font-semibold text-rose-600">Daily Essentials</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Pelvic circles seated on an exercise ball (2 minutes).</li>
                  <li>Cat-cow spinal waves synchronized with breath (10 rounds).</li>
                  <li>Supported child’s pose focusing on back body expansion (3 minutes).</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-rose-100 p-6 text-sm text-slate-600">
                <h3 className="text-lg font-semibold text-rose-600">Flow Days</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>10-minute yin-inspired sequence: butterfly, supine twist, reclined bound angle.</li>
                  <li>Guided diaphragmatic breathing while knees rest on a bolster.</li>
                  <li>Gentle walking meditation indoors or in nature.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-rose-100 p-6 text-sm text-slate-600">
                <h3 className="text-lg font-semibold text-rose-600">Mid-Cycle Energy</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Pilates-inspired core activation focusing on pelvic floor lift and release.</li>
                  <li>Resistance-band glute bridges to support pelvic alignment.</li>
                  <li>Joyful dance break—choose uplifting music and sway for 5 minutes.</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 rounded-2xl bg-rose-50 p-6 text-sm text-rose-700">
              <strong>Reminder:</strong> If pain increases during any movement,
              pause, breathe, and return to rest. Your body leads, not the plan.
            </div>
          </section>

          <section
            id="nervous-system"
            className="rounded-3xl border border-rose-100 bg-white p-10 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              Nervous System Care
            </h2>
            <div className="mt-6 grid gap-8 lg:grid-cols-2">
              <div className="space-y-4 text-base text-slate-600">
                <p>
                  When stress hormones spike, pain perception intensifies. Soothe your
                  nervous system with intentional pause rituals woven through your day.
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">
                    Daily calm practices
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5">
                    <li>Three-cycle box breathing before meals.</li>
                    <li>Afternoon sensory reset: notice five things you can see, hear, and feel.</li>
                    <li>Guided body scan audio before sleep to release pelvic tension.</li>
                    <li>Gratitude journaling focusing on body appreciation.</li>
                  </ul>
                </div>
              </div>
              <div className="rounded-2xl bg-rose-50 p-6 text-sm text-rose-700">
                <h3 className="text-lg font-semibold text-rose-600">
                  Boundaries & emotional hygiene
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Communicate a “slow week” notice to family or colleagues ahead of menstruation.</li>
                  <li>Create a soothing playlist reserved for cycle care evenings.</li>
                  <li>Practice self-compassion phrases: “I am safe to rest.”</li>
                  <li>Limit doomscrolling; replace with herbal tea and supportive reading.</li>
                </ul>
              </div>
            </div>
          </section>

          <section
            id="hands-on"
            className="rounded-3xl border border-rose-100 bg-white p-10 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              Hands-On & Environmental Relief
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600">
              <p>
                Curate an environment that tells your body it is safe to soften. Combine
                tactile relief with supportive surroundings for potent comfort.
              </p>
              <div className="rounded-2xl bg-rose-50/80 p-6">
                <h3 className="text-lg font-semibold text-rose-600">
                  Hands-on techniques
                </h3>
                <ul className="mt-4 list-disc space-y-3 pl-5">
                  <li>
                    <strong>Castor oil packs:</strong> Apply a warm castor oil compress to
                    the lower abdomen for 20-30 minutes, 3 evenings per week outside of heavy
                    bleeding days.
                  </li>
                  <li>
                    <strong>Abdominal massage:</strong> Use gentle clockwise strokes around
                    the navel to support digestion and relieve cramping.
                  </li>
                  <li>
                    <strong>Foot reflexology:</strong> Press and hold the arch points below
                    the big toe to target uterine reflex zones.
                  </li>
                  <li>
                    <strong>Warm compress rotation:</strong> Alternate rice-filled heat packs
                    with a warm towel over the lower back every 10 minutes.
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl bg-rose-50/80 p-6">
                <h3 className="text-lg font-semibold text-rose-600">
                  Environmental support
                </h3>
                <ul className="mt-4 list-disc space-y-3 pl-5">
                  <li>Create a low-light sanctuary with candles or salt lamps.</li>
                  <li>Diffuse lavender or clary sage essential oils (if tolerated) to promote relaxation.</li>
                  <li>Keep cozy layers nearby to maintain steady warmth.</li>
                  <li>Use supportive pillows under knees while lying down to reduce pelvic pressure.</li>
                </ul>
              </div>
            </div>
          </section>

          <section
            id="daily-rhythms"
            className="rounded-3xl border border-rose-100 bg-white p-10 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              Daily Rhythms & Cycle Syncing
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Aligning your lifestyle with the four phases of your cycle creates
              harmony between hormones, energy, and emotional needs. Use these guides
              to tailor routines across the month.
            </p>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {[
                {
                  title: "Menstrual (Days 1-5)",
                  bullets: [
                    "Prioritize deep rest, naps, and slower mornings.",
                    "Meals: soups, stews, iron-rich leafy greens, stewed fruits.",
                    "Practices: heat therapy, journaling, yin stretches.",
                    "Boundary: Decline optional commitments; practice saying “not this week.”",
                  ],
                },
                {
                  title: "Follicular (Days 6-12)",
                  bullets: [
                    "Experiment with new recipes & gentle strength-building.",
                    "Meals: sprouted grains, fresh herbs, citrus, fermented foods.",
                    "Practices: creative planning, breath-led Pilates, brisk walks.",
                    "Boundary: Keep evenings tech-light to protect hormone reset.",
                  ],
                },
                {
                  title: "Ovulatory (Days 13-16)",
                  bullets: [
                    "Energy peaks—channel it into collaborative work.",
                    "Meals: colorful salads, seeds, lean protein, hydrating smoothies.",
                    "Practices: dance, uplifting social connections, vocal toning.",
                    "Boundary: Avoid overscheduling; reserve time for future-cycle prep.",
                  ],
                },
                {
                  title: "Luteal (Days 17-28)",
                  bullets: [
                    "Shift toward grounding routines and extra sleep.",
                    "Meals: roasted vegetables, cinnamon-spiced oats, herbal infusions.",
                    "Practices: restorative yoga, light decluttering, gratitude notes.",
                    "Boundary: Limit caffeine and dense evening meals to reduce bloating.",
                  ],
                },
              ].map((phase) => (
                <div
                  key={phase.title}
                  className="rounded-2xl border border-rose-100 bg-rose-50 p-6"
                >
                  <h3 className="text-lg font-semibold text-rose-600">
                    {phase.title}
                  </h3>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-rose-700">
                    {phase.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section
            id="relief-protocols"
            className="rounded-3xl border border-rose-100 bg-white p-10 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              Immediate Relief Protocols
            </h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-rose-100 bg-rose-50 p-6">
                <h3 className="text-lg font-semibold text-rose-600">
                  Cramp SOS (15 minutes)
                </h3>
                <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-rose-700">
                  <li>Prepare a warm ginger and lemon infusion.</li>
                  <li>Apply heat pack to lower abdomen while seated upright.</li>
                  <li>Practice 4-7-8 breathing for three minutes.</li>
                  <li>Perform seated forward fold with knees bent and supported.</li>
                  <li>Finish with clockwise abdominal massage using warm oil.</li>
                </ol>
              </div>
              <div className="rounded-2xl border border-rose-100 bg-rose-50 p-6">
                <h3 className="text-lg font-semibold text-rose-600">
                  Bloating Ease (10 minutes)
                </h3>
                <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-rose-700">
                  <li>Sip warm water with fennel seeds and a pinch of sea salt.</li>
                  <li>Kneel in child&apos;s pose, breathing into the back ribs.</li>
                  <li>Transition to seated spinal twists (5 breaths each side).</li>
                  <li>Lie on back, hug knees to chest, rock gently side to side.</li>
                  <li>Finish with legs-up-the-wall for three minutes.</li>
                </ol>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-rose-100 bg-white p-6 text-sm text-slate-600">
              <h3 className="text-lg font-semibold text-slate-800">
                Nighttime Relief Ritual
              </h3>
              <p className="mt-3">
                Dim lights one hour before bed. Take a warm bath with Epsom salts if
                tolerated, followed by hydration with chamomile tea. Journal one
                sentence of appreciation for your body. Set out tomorrow&apos;s cozy
                outfit to avoid morning stress. Use a weighted blanket or add an extra
                quilt for gentle pressure that calms the nervous system.
              </p>
            </div>
          </section>

          <section
            id="tracking"
            className="rounded-3xl border border-rose-100 bg-white p-10 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              Tracking & Celebrating Progress
            </h2>
            <div className="mt-6 space-y-4 text-base text-slate-600">
              <p>
                Tracking empowers you to spot patterns, celebrate wins, and adjust
                your support rituals. Use a digital app, bullet journal, or printable
                tracker.
              </p>
              <div className="rounded-2xl bg-rose-50 p-6">
                <h3 className="text-lg font-semibold text-rose-600">
                  Daily reflection prompts
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-rose-700">
                  <li>Where am I in my cycle today?</li>
                  <li>What level is my pain (0-10) and where do I feel it?</li>
                  <li>Which practices supported me? Which need adjustment?</li>
                  <li>What grace can I offer myself tomorrow?</li>
                </ul>
              </div>
              <p>
                Review your notes every two cycles. Notice triggers (sleep debt,
                dehydration, stressors) and the rituals that consistently deliver
                ease. Refine rather than overhaul—your body loves predictability.
              </p>
            </div>
          </section>

          <section
            id="implementation-calendar"
            className="rounded-3xl border border-rose-100 bg-white p-10 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              30-Day Implementation Calendar
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Follow this compassionate rollout. Circle your start date and keep the
              steps flexible—swap days as energy allows.
            </p>
            <div className="mt-6 grid gap-4 text-sm text-slate-600 md:grid-cols-2">
              {[
                [
                  "Week 1 • Awareness & Nourishment",
                  [
                    "Day 1: Establish hydration ritual + begin cycle tracking.",
                    "Day 2: Prep menstrual relief basket.",
                    "Day 3: Add anti-inflammatory breakfast (berries + chia).",
                    "Day 4: Practice 10-minute gentle stretch flow.",
                    "Day 5: Create bedtime wind-down routine.",
                    "Day 6: Batch-cook mineral-rich soup or broth.",
                    "Day 7: Reflect on wins; adjust for Week 2.",
                  ],
                ],
                [
                  "Week 2 • Movement & Nervous System",
                  [
                    "Day 8: Introduce daily pelvic circles.",
                    "Day 9: Schedule restorative movement breaks.",
                    "Day 10: Learn 4-7-8 breath; practice morning and night.",
                    "Day 11: Add afternoon sensory reset ritual.",
                    "Day 12: Communicate upcoming cycle boundaries to loved ones.",
                    "Day 13: Curate soothing playlist + reading list.",
                    "Day 14: Review emotional shifts; journal insights.",
                  ],
                ],
                [
                  "Week 3 • Hands-On Relief",
                  [
                    "Day 15: Prepare castor oil pack materials.",
                    "Day 16: Learn abdominal self-massage technique.",
                    "Day 17: Set up cycle sanctuary space (lighting, pillows, scents).",
                    "Day 18: Practice legs-up-the-wall before sleep.",
                    "Day 19: Try foot reflexology while watching a show or resting.",
                    "Day 20: Test Cramp SOS routine even if pain is low.",
                    "Day 21: Celebrate progress with a gentle self-care reward.",
                  ],
                ],
                [
                  "Week 4 • Integration & Reflection",
                  [
                    "Day 22: Review food/mood journal; note correlations.",
                    "Day 23: Refine daily rituals; remove anything overwhelming.",
                    "Day 24: Share your learnings with a supportive friend or group.",
                    "Day 25: Revisit goals for next menstrual phase.",
                    "Day 26: Prepare freezer-friendly meals for your upcoming period.",
                    "Day 27: Create a mantra or affirmation for menstruation days.",
                    "Day 28: Conduct full reflection; celebrate shifts and set intentions.",
                  ],
                ],
              ].map(([title, items]) => (
                <div
                  key={title as string}
                  className="rounded-2xl border border-rose-100 bg-rose-50 p-6"
                >
                  <h3 className="text-lg font-semibold text-rose-600">
                    {title}
                  </h3>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-rose-700">
                    {(items as string[]).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-500">
              Adapt pacing for irregular cycles or perimenopause by focusing on energy
              cues rather than calendar dates.
            </p>
          </section>

          <section
            id="resource-library"
            className="rounded-3xl border border-rose-100 bg-white p-10 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              Resource Library & References
            </h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="space-y-3 text-base text-slate-600">
                <h3 className="text-lg font-semibold text-slate-800">
                  Community & Education
                </h3>
                <ul className="list-disc space-y-2 pl-5 text-sm">
                  <li>
                    Pain tracking apps such as Clue or Stardust for cycle pattern
                    insights.
                  </li>
                  <li>
                    Pelvic floor physical therapist directories (check local
                    listings or national professional associations).
                  </li>
                  <li>
                    Virtual support circles focused on menstrual literacy and body
                    autonomy.
                  </li>
                </ul>
              </div>
              <div className="space-y-3 text-base text-slate-600">
                <h3 className="text-lg font-semibold text-slate-800">
                  Research-informed references
                </h3>
                <ul className="list-disc space-y-2 pl-5 text-sm">
                  <li>
                    Studies on ginger&apos;s efficacy for dysmenorrhea relief (randomized
                    controlled trials, Journal of Alternative and Complementary
                    Medicine).
                  </li>
                  <li>
                    Evidence for heat therapy reducing menstrual cramp intensity
                    comparable to analgesics in some cohorts.
                  </li>
                  <li>
                    Reviews highlighting mindfulness and breathwork for chronic pain
                    modulation.
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              Continue collaborating with healthcare professionals. This guide is a
              compassionate companion, not a substitute for personalized medical
              care.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
