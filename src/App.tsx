/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import TableOfContents from './components/TableOfContents';
import Part1 from './components/Part1';
import Part2 from './components/Part2';
import Part3 from './components/Part3';
import Part4 from './components/Part4';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-blue-200">
      <Header />
      <main className="max-w-4xl mx-auto px-6 lg:px-0 pt-10 pb-20">
        <header className="mb-10 text-center">
          <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 mt-6">Health & Longevity Review</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            CircO2 Reviews 2026: Does This Nitric Oxide Supplement <span className="text-blue-600">Really Work?</span>
          </h1>
          <div className="flex items-center justify-center space-x-4 mt-6 text-gray-500 text-sm font-medium">
             <div className="flex items-center text-gray-700">
               <svg className="w-5 h-5 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
               <span>Expert Reviewed</span>
             </div>
             <span>|</span>
             <span>Updated: June {new Date().getFullYear()}</span>
          </div>
        </header>

        <a href="https://www.advancedbionutritionals.com/DS24/Nitric-Oxide-Supplements/Superhuman-At-70/HD.htm#aff=jhonatandigitalmkt9d20" target="_blank" rel="noopener noreferrer" className="block flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-5xl mx-auto mb-12 hover:opacity-95 transition-opacity">
          <img 
            src="/images/Produto-na-caixa.png" 
            alt="CircO2 Official Product" 
            className="w-full md:w-2/5 rounded-xl shadow-sm object-contain bg-gray-50 p-6"
          />
          <img 
            src="/images/capsula.png" 
            alt="CircO2 Capsule" 
            className="w-full md:w-3/5 rounded-xl shadow-sm object-contain bg-gray-50 p-2"
          />
        </a>

        <TableOfContents />
        
        <article className="prose prose-lg prose-blue max-w-none text-gray-800">
          <Part1 />
          <Part2 />
          <Part3 />
          <Part4 />
        </article>
      </main>
      <Footer />
    </div>
  );
}
