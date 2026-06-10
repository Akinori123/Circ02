export default function Header() {
  return (
    <div className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-bold text-2xl tracking-tighter text-gray-900 flex items-center">
          <span className="text-blue-600 mr-1">Vita</span>Review
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-semibold text-gray-600">
           <a href="#reviews" className="hover:text-blue-600 cursor-pointer transition">Reviews</a>
           <a href="#what-is" className="hover:text-blue-600 cursor-pointer transition">Supplement Guides</a>
           <a href="#benefits" className="hover:text-blue-600 cursor-pointer transition">Healthy Aging</a>
        </nav>
      </div>
    </div>
  );
}
