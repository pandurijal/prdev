import React from 'react';
import { Building2, Heart, Globe, Zap } from 'lucide-react';

interface Client {
  icon: React.ReactNode;
  name: string;
  country: string; // country flag emoji
  description: string;
  status?: 'active' | 'inactive';
}

const clients: Client[] = [
  {
    icon: <Building2 className="h-8 w-8" />, 
    name: "LifeStak",
    country: "🇸🇬",
    description: "Life management tools and productivity platform for individuals and teams.",
    status: 'active'
  },
  {
    icon: <Heart className="h-8 w-8" />,
    name: "RameshClinic",
    country: "🇮🇳",
    description: "Clinical doctor website and patient management portal for healthcare professionals.",
    status: 'active'
  },
  {
    icon: <Globe className="h-8 w-8" />,
    name: "Welz",
    country: "🇺🇸",
    description: "Healthcare management system for wellness providers and organizations.",
    status: 'active'
  },
  {
    icon: <Zap className="h-8 w-8" />,
    name: "Connexpay",
    country: "🇺🇸",
    description: "Financial services payment system for seamless and secure transactions.",
    status: 'active'
  },
  {
    icon: <Heart className="h-8 w-8" />,
    name: "Callista",
    country: "🇮🇩",
    description: "Beauty clinical offering aesthetic treatments and wellness services.",
    status: 'active'
  },
  {
    icon: <Zap className="h-8 w-8" />,
    name: "Moox",
    country: "🇮🇳",
    description: "Wedding management and event planning solutions for modern couples.",
    status: 'active'
  },
  {
    icon: <Globe className="h-8 w-8" />,
    name: "FendiPendi",
    country: "🇲🇾",
    description: "Child entertainment and edutainment platform for creative learning.",
    status: 'active'
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    name: "DyZi",
    country: "🇨🇿",
    description: "Services marketplace connecting professionals with customers across industries.",
    status: 'active'
  }
];

const Clients: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Forward-Thinking Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've partnered with innovative companies to build scalable solutions that drive real business results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-gray-50 hover:bg-white p-8 rounded-xl transition-all duration-300 group hover:shadow-lg border hover:border-blue-100 text-center"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {client.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center justify-center gap-2">
                <span>{client.country}</span>
                <span>{client.name}</span>
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {client.description}
              </p>
              
              <div className="flex justify-center">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  client.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {client.status === 'active' ? 'Active Project' : 'Completed'}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-block bg-blue-50 px-6 py-3 rounded-lg">
            <span className="text-blue-800 font-medium">Ready to join our client portfolio?</span>
            <a href="#contact" className="text-blue-600 font-semibold ml-2 hover:text-blue-700 transition-colors">
              Let's talk →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;