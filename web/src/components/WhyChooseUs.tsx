import React from 'react';
import { Wrench, Zap, Shield, Target, Layers } from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "Lean, low-maintenance systems",
    description: "Built for efficiency and minimal operational overhead"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Rapid iteration & launch",
    description: "From idea to deployment in record time"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Full ownership of tech stack",
    description: "Complete control and transparency over your solution"
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Focus on practical use cases",
    description: "Real-world solutions that solve actual problems"
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Solo to enterprise-ready architecture",
    description: "Scalable from MVP to millions of users"
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with practical business understanding to deliver solutions that actually work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;