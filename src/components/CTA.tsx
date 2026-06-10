export default function CTA({ text = "Check Availability & Try CircO2 Risk-Free" }: { text?: string }) {
  return (
    <div className="my-10 text-center">
      <a
        href="https://www.advancedbionutritionals.com/DS24/Nitric-Oxide-Supplements/Superhuman-At-70/HD.htm#aff=jhonatandigitalmkt9d20"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:-translate-y-1 text-lg md:text-xl text-center"
      >
        {text}
      </a>
    </div>
  );
}
