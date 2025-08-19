import React from 'react';
import { MessageCircle, MapPin, Calculator, Brain, ExternalLink, Zap, Image, TestTube, Users, Wifi, Eye, Keyboard, BookOpen } from 'lucide-react';

interface Product {
  icon: React.ReactNode;
  name: string;
  description: string;
  url?: string;
}

const products: Product[] = [
  {
    icon: <MessageCircle className="h-8 w-8" />,
    name: "Deepertalk.app",
    description: "Learn languages through daily interactive reading",
    url: "https://deepertalk.app"
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    name: "Thingstodo.id",
    description: "Hyperlocal tourism guide for Indonesia",
    url: "https://thingstodo.id"
  },
  {
    icon: <Calculator className="h-8 w-8" />,
    name: "MentalMathPractice.com",
    description: "Web-based mental math trainer",
    url: "https://mentalmathpractice.com"
  },
  {
    icon: <Image className="h-8 w-8" />,
    name: "Pasfoto.id",
    description: "Professional passport photo editing service",
    url: "https://pasfoto.id"
  },
  {
    icon: <Brain className="h-8 w-8" />,
    name: "TesIQ.id",
    description: "Comprehensive IQ testing platform",
    url: "https://tesiq.id"
  },
  {
    icon: <Users className="h-8 w-8" />,
    name: "TesMBTI.id",
    description: "MBTI personality assessment tool",
    url: "https://tesmbti.id"
  },
  {
    icon: <TestTube className="h-8 w-8" />,
    name: "TesMental.id",
    description: "Mental health assessment platform",
    url: "https://tesmental.id"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    name: "TesKoran.id",
    description: "Newspaper reading comprehension test",
    url: "https://teskoran.id"
  },
  {
    icon: <Wifi className="h-8 w-8" />,
    name: "TesKecepatanInternet.id",
    description: "Internet speed testing service",
    url: "https://teskecepataninternet.id"
  },
  {
    icon: <Eye className="h-8 w-8" />,
    name: "TesButaWarna.id",
    description: "Color blindness testing platform",
    url: "https://tesbutawarna.id"
  },
  {
    icon: <Keyboard className="h-8 w-8" />,
    name: "TesMengetik.id",
    description: "Typing speed and accuracy test",
    url: "https://tesmengetik.id"
  },
  {
    icon: <Keyboard className="h-8 w-8" />,
    name: "TesKeyboard.id",
    description: "Keyboard layout and typing practice",
    url: "https://teskeyboard.id"
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    name: "BelajarBahasaJepang.id",
    description: "Interactive Japanese language learning platform",
    url: "https://belajarbahasajepang.id"
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    name: "BelajarBahasaKorea.id",
    description: "Interactive Korean language learning platform",
    url: "https://belajarbahasakorea.id"
  }
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our suite of internal SaaS products that showcase our expertise and serve thousands of users worldwide.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border hover:border-blue-200"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {product.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {product.description}
              </p>
              <a 
                href={product.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 font-medium flex items-center text-sm group-hover:text-blue-700 transition-colors"
              >
                Visit site
                <ExternalLink className="ml-1 h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-block bg-white px-6 py-3 rounded-lg shadow-md">
            <span className="text-gray-600">And more products coming soon...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;