import CTA from './CTA';
import PricingGrid from './PricingGrid';

export default function Part4() {
  return (
    <>
      <div id="comparison" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6 pt-6 border-t border-gray-100">CircO2 vs Other Nitric Oxide Supplements</h2>
        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
          How does this specific product stand up when objectively compared to the highly saturated, chaotic landscape of blood flow supplements currently flooding the market? Let's take an entirely objective, analytical look at the core differentiators via this direct comparison breakdown:
        </p>
        <div className="overflow-x-auto mb-10 shadow-sm rounded-xl">
           <table className="min-w-full text-left bg-white border border-gray-200 rounded-xl overflow-hidden">
            <thead className="uppercase tracking-wider border-b-2 border-gray-200 bg-gray-100 text-gray-700 font-bold text-sm">
              <tr>
                <th scope="col" className="px-6 py-4">Key Feature</th>
                <th scope="col" className="px-6 py-4 text-blue-700 border-l border-gray-200">CircO2 Review Profile</th>
                <th scope="col" className="px-6 py-4 border-l border-gray-200 text-gray-600">Typical Pharmacy Brand</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 text-lg">
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
                <th scope="row" className="px-6 py-5 font-semibold text-gray-900 border-r border-gray-200">Delivery Method</th>
                <td className="px-6 py-5 font-medium border-r border-gray-200 text-blue-900">Quick-Dissolve Lozenge (Saliva activation)</td>
                <td className="px-6 py-5 text-gray-600">Hard capsule or messy, chalky powder mix</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
                <th scope="row" className="px-6 py-5 font-semibold text-gray-900 border-r border-gray-200">Main Focus</th>
                <td className="px-6 py-5 font-medium border-r border-gray-200 text-blue-900">Circulation Support for Older Adults</td>
                <td className="px-6 py-5 text-gray-600">Intense pre-workout strictly for bodybuilders</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
                <th scope="row" className="px-6 py-5 font-semibold text-gray-900 border-r border-gray-200">Amino Acid Blend</th>
                <td className="px-6 py-5 font-medium border-r border-gray-200 text-blue-900">L-Arginine + L-Citrulline Synergy</td>
                <td className="px-6 py-5 text-gray-600">Usually singular (cheap L-Arginine isolated only)</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
                <th scope="row" className="px-6 py-5 font-semibold text-gray-900 border-r border-gray-200">Botanical Inclusions</th>
                <td className="px-6 py-5 font-medium border-r border-gray-200 text-blue-900">Beetroot Extract & Hawthorn Berry</td>
                <td className="px-6 py-5 text-gray-600">Often laden with harsh synthetic chemical stimulants</td>
              </tr>
              <tr className="hover:bg-gray-50 transition">
                <th scope="row" className="px-6 py-5 font-semibold text-gray-900 border-r border-gray-200">Energy Profile</th>
                <td className="px-6 py-5 font-medium border-r border-gray-200 text-blue-900">Smooth, highly stable, jitter-free energy</td>
                <td className="px-6 py-5 text-gray-600">Caffeine-loaded, resulting in terrible afternoon crashes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="pros-cons" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">Pros and Cons</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white border-t-[6px] border-blue-500 shadow-md py-8 px-8 rounded-xl h-full border border-gray-200">
            <h3 className="font-bold text-3xl text-gray-900 mb-6 border-b border-gray-100 pb-4">Pros</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="text-gray-800 text-lg">Exceptional focus on healthy circulation and robust vasodilation.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="text-gray-800 text-lg">Delivers highly sustainable energy support without caffeine jitters.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="text-gray-800 text-lg">Incredibly easy daily routine featuring quick-dissolving tablets.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="text-gray-800 text-lg">Formulated cleanly and specifically for senior health demographics.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-blue-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span className="text-gray-800 text-lg">Fully transparent ingredients and a verified, real refund policy.</span>
              </li>
            </ul>
          </div>
          <div className="bg-white border-t-[6px] border-gray-400 shadow-md py-8 px-8 rounded-xl h-full border border-gray-200">
            <h3 className="font-bold text-3xl text-gray-900 mb-6 border-b border-gray-100 pb-4">Cons</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-gray-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="text-gray-800 text-lg">Results objectively vary per individual; not everyone notices instant bodily changes.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-gray-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="text-gray-800 text-lg">Potential for incredibly mild side effects like minor headaches initially upon starting.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-gray-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="text-gray-800 text-lg">Stands at a decisively premium price point compared to simple vitamin C from a pharmacy.</span>
              </li>
              <li className="flex items-start">
                 <svg className="w-6 h-6 text-gray-400 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="text-gray-800 text-lg">Logistical constraint: Only officially available directly through the secure manufacturer website.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <PricingGrid />

      <div id="who-should-buy" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">Who Should Buy & Who Should Avoid This Product</h2>
        <div className="flex flex-col lg:flex-row gap-8 mb-10">
          <div className="flex-1 bg-blue-50 p-8 rounded-xl border border-blue-100 shadow-sm">
            <h3 className="font-bold text-2xl text-blue-900 mb-4 border-b border-blue-200 pb-3">Who This Is Perfect For</h3>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">You are unequivocally an ideal candidate for CircO2 if you are an active older adult continually experiencing natural, age-related dips in overall stamina. If you are legitimately seeking to profoundly support broader healthy blood flow, deeply maintain ongoing cardiovascular wellness, and desire a non-stimulant, natural approach to everyday energy stability, this formula was manufactured directly with your demographic in mind.</p>
          </div>
          <div className="flex-1 bg-gray-100 p-8 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-2xl text-gray-900 mb-4 border-b border-gray-300 pb-3">Who Should Avoid It</h3>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">This product should actively be avoided by any individuals currently taking aggressive nitrate-based medications or heavy prescription blood pressure drugs, as the combined, interactive vasodilation may severely compound. Additionally, those explicitly seeking an extreme, caffeinated burst of jittery energy for aggressive, high-intensity gym workouts will find this specific formula entirely unsuited for those intense parameters.</p>
          </div>
        </div>
      </div>

      <div id="buying-guide" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">Savvy Purchasing: The CircO2 Buying Guide</h2>
        <p className="text-gray-700 leading-relaxed mb-6 text-lg">
          Before taking the exciting plunge and finally ordering any new dietary supplement, you should meticulously conduct an honest personal assessment. Here are five exceptionally crucial questions to ask yourself to ensure you are continually making a confident, well-informed health choice:
        </p>
        <ul className="list-decimal pl-6 space-y-5 text-gray-700 text-lg font-medium mb-10 bg-gray-50 border border-gray-200 p-8 rounded-xl">
          <li className="pl-2"><span className="font-bold text-gray-900">Do I have realistic expectations?</span> Understand firmly that dietary supplements gently support your biological body over time; they are absolutely not instantaneous, overnight magic wands.</li>
          <li className="pl-2"><span className="font-bold text-gray-900">Have I thoroughly reviewed the ingredients?</span> Constantly double-check the botanical names (like pure Hawthorn Berry) against any minor or major personal allergies you may possess.</li>
          <li className="pl-2"><span className="font-bold text-gray-900">Am I intentionally maintaining healthy habits?</span> Are you strictly intending to pair this botanical supplement with light daily walks and exceedingly adequate hydration for optimal efficiency?</li>
          <li className="pl-2"><span className="font-bold text-gray-900">Have I read genuine user reviews?</span> Ensuring you grasp the exceptionally common praises and complaints helps perfectly anchor your expectations accurately before arrival.</li>
          <li className="pl-2"><span className="font-bold text-gray-900">Am I cautiously using a trusted seller?</span> Have you committed entirely to buying only through the strictly verified, legitimate brand website to properly activate critical consumer refund protections?</li>
        </ul>
      </div>

      <div id="faq" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6 border-t border-gray-100 pt-6">Frequently Asked Questions About CircO2</h2>
        <div className="space-y-6 mb-10">
          <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            <h4 className="font-bold text-gray-900 text-xl mb-3">1. Does CircO2 actually work for most people?</h4>
            <p className="text-gray-700 text-lg">Yes, its refined formula is based heavily on continually clinically studied ingredients known universally to act as efficient precursors for deep nitric oxide synthesis, effectively promoting the healthy relaxation of tense blood vessels and gracefully supporting broader circulation.</p>
          </div>
          <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            <h4 className="font-bold text-gray-900 text-xl mb-3">2. Is it genuinely safe to take daily?</h4>
            <p className="text-gray-700 text-lg">For the vast, sweeping majority of healthy older adults, it is completely, undeniably safe. However, always thoughtfully consult your physician if you have severe pre-existing cardiovascular conditions or are currently reliant on heavy daily medications.</p>
          </div>
          <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            <h4 className="font-bold text-gray-900 text-xl mb-3">3. What precisely are the main ingredients?</h4>
            <p className="text-gray-700 text-lg">The core undeniably includes a masterfully powerful blend of raw L-Arginine, L-Citrulline, Beetroot extract, protective Hawthorn Berry, and cellular-sparking CoQ10.</p>
          </div>
          <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            <h4 className="font-bold text-gray-900 text-xl mb-3">4. Can nitric oxide really drastically improve circulation?</h4>
            <p className="text-gray-700 text-lg">Absolutely. Generated nitric oxide directly, physically signals the tight smooth muscles outlining your arteries to rapidly expand, effectively turning constricted pipelines into massively free-flowing vascular pathways.</p>
          </div>
          <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            <h4 className="font-bold text-gray-900 text-xl mb-3">5. How long precisely will it take to notice results?</h4>
            <p className="text-gray-700 text-lg">While quite a few sensitive individuals casually report significantly more energy within the first week, most experienced clinical wellness experts suggest heavily committing to a strict 30 to 60-day regimen to observe optimal, permanently sustained vascular changes.</p>
          </div>
          <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            <h4 className="font-bold text-gray-900 text-xl mb-3">6. Does it contain heavy, jittery caffeine or severe stimulants?</h4>
            <p className="text-gray-700 text-lg">No. It relies entirely and gracefully on pure amino acid synergy and vastly enhanced oxygen flow rather than pumping artificial nervous system stimulants into your body, completely preventing typical, dreadful afternoon energy crashes.</p>
          </div>
          <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            <h4 className="font-bold text-gray-900 text-xl mb-3">7. Do I essentially need a mandatory prescription to order?</h4>
            <p className="text-gray-700 text-lg">No. It is fully securely classified as a natural botanical dietary supplement and is readily available strictly over the counter straight directly through the manufacturer portal.</p>
          </div>
          <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            <h4 className="font-bold text-gray-900 text-xl mb-3">8. Can I buy it easily at my local corner pharmacy?</h4>
            <p className="text-gray-700 text-lg">No, Advanced Bionutritionals aggressively limits sales entirely and strictly to their incredibly secure official website to completely combat counterfeiting and effectively heavily manage their rigid internal quality control protocols.</p>
          </div>
          <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            <h4 className="font-bold text-gray-900 text-xl mb-3">9. What exactly does the dissolving lozenge taste like?</h4>
            <p className="text-gray-700 text-lg">Loyal users generally playfully describe it as a very mild, pleasantly tangy citrus-berry flavor that is extremely, undeniably palatable to dissolve completely, even immediately first thing upon waking in the morning.</p>
          </div>
          <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            <h4 className="font-bold text-gray-900 text-xl mb-3">10. What if it simply doesn't miraculously work for my system?</h4>
            <p className="text-gray-700 text-lg">Because human physiological responses naturally differ brilliantly from person to person, the manufacturer bravely provides a highly robust, incredibly generous 90-day refund window, entirely eliminating the massive financial gamble completely.</p>
          </div>
        </div>
      </div>

      <div id="verdict" className="scroll-mt-24">
        <h2 className="text-4xl font-extrabold text-gray-900 mt-20 mb-8 pb-6 border-b-4 border-blue-600">Final Verdict: Is CircO2 Worth Trying?</h2>
        <p className="text-gray-700 leading-relaxed mb-6 text-xl">
          After executing a tremendously meticulous, incredibly deep review of the pure formulation, the pristine safety profile, the esteemed brand legacy, and the sprawling community feedback, CircO2 resoundingly presents itself directly as one of the exceedingly premier nitric oxide supplements currently accessible heavily on the immense wellness market. The unequivocally best things about CircO2 are its completely unwavering commitment to transparent, scientifically backed potent ingredients—such as powerful L-Citrulline, organic Beetroot extract, and crucial CoQ10—all wrapped neatly within a brilliantly innovative, highly absorbable rapid-delivery method.
        </p>
        <p className="text-gray-700 leading-relaxed mb-10 text-xl">
          When rigorously weighing its tremendous, undeniable potential to immensely support comprehensive cardiovascular wellness, actively promote daily physical stamina, and strictly maintain vital blood flow directly against the incredibly minor, heavily scattered limitations (such as its understandably premium tier pricing), the final purchasing decision becomes remarkably quite clear. Because it is forcefully backed by an exceptionally strong money-back guarantee spanning an entire 90 days, there is functionally absolute zero financial risk involved for those adults seeking to gently, beautifully elevate their fading energy levels and sluggish physical endurance as they gracefully age. If you are thoroughly prepared to correctly support your ailing circulation efficiently and safely, CircO2 is resoundingly, undeniably well worth prioritizing today.
        </p>
        
        <CTA text="Secure Your Supply of CircO2 Today — Click Here For The Lowest Price" />
      </div>
    </>
  );
}
