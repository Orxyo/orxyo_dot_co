import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <Services />

        {/* About Section */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">About ORXYO</h2>
            <p className="text-xl text-slate-600 leading-relaxed font-light">
              Founded by a collective of operators and strategy leaders, ORXYO helps organizations accelerate decision-making, streamline operations, and strengthen financial performance. Our consultants have experience across fintech, consumer lending, SaaS, and technology-enabled services.
            </p>
          </div>
        </section>
        
        {/* Philosophy Section */}
        <section id="philosophy" className="py-24 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
                  The ORXYO Methodology
                </h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Efficiency isn't just about speed; it's about clarity. Too often, organizations mistake movement for progress.
                  </p>
                  <p>
                    Our approach dissects your operational anatomy layer by layer. We identify the friction points that remain invisible to the daily observer but compound over time to stifle growth. By aligning financial incentives with operational workflows, we create self-sustaining systems of improvement.
                  </p>
                </div>
                <div className="mt-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-1 bg-blue-600"></div>
                    <span className="font-semibold text-slate-900">Data-Driven Diagnostics</span>
                  </div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-1 bg-blue-600"></div>
                    <span className="font-semibold text-slate-900">Human-Centric Implementation</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-1 bg-blue-600"></div>
                    <span className="font-semibold text-slate-900">Continuous Iteration</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-slate-300 rounded-2xl z-0"></div>
                <div className="relative z-10 bg-white p-2 rounded-2xl shadow-xl">
                  {/* Using a placeholder since external images are restricted to picsum, but styled for corporate look */}
                  <img 
                    src="https://picsum.photos/600/600" 
                    alt="Strategic Meeting" 
                    className="rounded-xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="py-24 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Ready to Optimize?</h2>
            <p className="text-xl text-slate-400 mb-10">
              Schedule a preliminary diagnostic session with one of our consulting leads. Let's discuss where you are and where you need to be.
            </p>
            <form className="max-w-md mx-auto space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="email" className="sr-only">Work Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Enter your work email" 
                  className="w-full px-5 py-4 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg shadow-blue-900/50">
                Request Consultation
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
      
      <ChatWidget />
    </div>
  );
};

export default App;