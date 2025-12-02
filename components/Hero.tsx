import React from 'react';
import { ArrowRightIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-slate-900 text-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-900 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-indigo-900 blur-[80px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="lg:w-2/3">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 animate-fade-in-up">
            Precision in <br />
            <span className="text-blue-500">Strategy</span> & Execution.
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed">
            ORXYO is an independent consulting group specializing in operational strategy and financial optimization for modern enterprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30"
            >
              Start Optimization
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 text-base font-medium rounded-full text-slate-300 hover:bg-slate-800 hover:text-white transition-all"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
        <svg className="w-6 h-6 text-slate-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;