export default function PricingGrid() {
  const affLink = "https://www.advancedbionutritionals.com/DS24/Nitric-Oxide-Supplements/Superhuman-At-70/HD.htm#aff=jhonatandigitalmkt9d20";
  
  return (
    <div className="my-16" id="packages">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Choose Your CircO2 Package</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
        <a href={affLink} className="block transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer rounded-lg border border-gray-200 overflow-hidden" target="_blank" rel="noopener noreferrer">
          <img src="/images/oferta-1.png" alt="1 Box Offer" className="w-full h-auto object-cover" />
        </a>
        <a href={affLink} className="block transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer rounded-lg border border-gray-200 overflow-hidden" target="_blank" rel="noopener noreferrer">
          <img src="/images/oferta-2.png" alt="3 Boxes Offer" className="w-full h-auto object-cover" />
        </a>
        <a href={affLink} className="block transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer rounded-lg border border-gray-200 overflow-hidden" target="_blank" rel="noopener noreferrer">
          <img src="/images/oferta-3.png" alt="6 Boxes Offer" className="w-full h-auto object-cover" />
        </a>
      </div>
    </div>
  );
}
