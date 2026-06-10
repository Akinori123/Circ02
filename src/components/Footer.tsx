export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6 mt-16 border-t-[8px] border-blue-600">
      <div className="max-w-4xl mx-auto space-y-6 text-sm text-center">
        <p className="max-w-3xl mx-auto border-b border-gray-800 pb-8">
          <strong className="text-gray-300">FDA Compliance:</strong> These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. The information provided on this site is for informational purposes only and is not intended as a substitute for advice from your physician or other health care professional. Always consult with a healthcare professional before starting any new diet, exercise, or supplementation program or if you have or suspect you might have a health problem.
        </p>
        <p>
          We may earn a commission if you purchase through our links. This helps support our review platform and allows us to continually provide high-quality wellness research.
        </p>
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-4 pt-6">
           <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
           <span className="hover:text-white cursor-pointer transition">Terms of Service</span>
           <span className="hover:text-white cursor-pointer transition">Scientific References</span>
           <span className="hover:text-white cursor-pointer transition">Disclosure</span>
        </div>
        <p className="pt-4 text-gray-600">
          &copy; {new Date().getFullYear()} VitaReview Supplement Portal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
