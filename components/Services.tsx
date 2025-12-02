import React from 'react';
import { ChartBarIcon, LayersIcon, ShieldCheckIcon, CreditCardIcon } from './Icons';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: 'strategy',
    title: 'Operational Strategy',
    description: 'We diagnose inefficiencies and architect scalable operational models that align with your long-term growth objectives.',
    icon: <ChartBarIcon className="h-8 w-8 text-blue-500" />,
  },
  {
    id: 'workflow',
    title: 'Workflow Optimization',
    description: 'Streamline your business processes through intelligent automation, bottleneck removal, and resource reallocation.',
    icon: <LayersIcon className="h-8 w-8 text-blue-500" />,
  },
  {
    id: 'finance',
    title: 'Financial Consulting',
    description: 'Expert guidance on risk management, capital allocation, and integrating modern fintech solutions into legacy systems.',
    icon: <ShieldCheckIcon className="h-8 w-8 text-blue-500" />,
  },
  {
    id: 'lending',
    title: 'Small Business Lending & Credit Operations',
    description: 'Modernize credit policy, underwriting models, risk segmentation, and portfolio health. We support lenders, fintechs, and CDFIs in building scalable, compliant credit operations.',
    icon: <CreditCardIcon className="h-8 w-8 text-blue-500" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
            Engineered for Excellence
          </h3>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            We don't just advise; we implement frameworks that drive measurable efficiency and profitability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service) => (
            <div key={service.id} className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
              <div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <div className="group-hover:text-white">
                  {service.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;