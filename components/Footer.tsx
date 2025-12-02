import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-serif font-bold text-white tracking-wider mb-4">ORXYO</h2>
            <p className="max-w-md text-sm leading-relaxed">
              ORXYO Consulting Group is an independent operations and financial advisory firm serving organizations across the U.S.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Operational Strategy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Workflow Optimization</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Financial Advisory</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Digital Transformation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
            <div className="space-y-4 text-sm">
              <a href="mailto:information@orxyo.co" className="block hover:text-blue-500 transition-colors">
                information@orxyo.co
              </a>
              <div className="space-y-1">
                <p className="text-slate-300">Headquarters: Los Angeles, CA</p>
                <p className="text-slate-500">Remote operations nationwide</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} ORXYO Consulting Group. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;