import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-blue-50 pt-16 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-lg">
              <Zap className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">prdev.io</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Building reliable software.
            <span className="block text-blue-600">Powering digital ideas.</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            We craft and maintain scalable web tools, automation systems, and mobile apps—both for ourselves and for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center group shadow-lg hover:shadow-xl"
              onClick={() => window.location.href = '#products'}>
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 border-2 border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl"
              onClick={() => window.location.href = '#services'}>
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;