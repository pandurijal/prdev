import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Bot, 
  Server, 
  Rocket, 
  Link, 
  // Search,
  ArrowRight 
} from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Web App Development",
    description: "Scalable, responsive web apps using modern stacks (React, Next.js, Tailwind, Supabase)"
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile App Development",
    description: "Cross-platform apps with Flutter or React Native"
  },
  {
    icon: <Bot className="h-8 w-8" />,
    title: "AI & Automation",
    description: "Workflow automation with AI agents, n8n, and cloud functions"
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: "API Development",
    description: "Fast and secure APIs using serverless and edge computing (Cloudflare Workers, Vercel, Render)"
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "MVP Prototyping",
    description: "Rapid MVP development to validate your ideas"
  },
  {
    icon: <Link className="h-8 w-8" />,
    title: "System Integration",
    description: "Connecting third-party APIs (Stripe, Airtable, Notion, Google, WhatsApp)"
  }
  // {
  //   icon: <Search className="h-8 w-8" />,
  //   title: "SEO Tools & Programmatic SEO",
  //   description: "Tools to generate long-tail content and drive traffic"
  // }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we provide comprehensive development services to bring your digital vision to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 hover:bg-white p-8 rounded-xl transition-all duration-300 group hover:shadow-lg border hover:border-blue-100"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <button className="text-blue-600 font-semibold flex items-center group-hover:text-blue-700 transition-colors">
                Learn more
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;