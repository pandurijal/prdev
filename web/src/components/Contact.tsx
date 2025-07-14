import React, { useState } from 'react';
import { Mail, Calendar, Github, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [details, setDetails] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || name.trim().length === 0) {
      setMessage('Please enter your name');
      setIsSuccess(false);
      return;
    }
    
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address');
      setIsSuccess(false);
      return;
    }

    if (!subject || subject.trim().length === 0) {
      setMessage('Please enter a subject');
      setIsSuccess(false);
      return;
    }

    if (!details || details.trim().length === 0) {
      setMessage('Please enter details about your project');
      setIsSuccess(false);
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('http://localhost:8787/api/form-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, details }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Thanks! We\'ll be in touch soon.');
        setIsSuccess(true);
        setName('');
        setEmail('');
        setSubject('');
        setDetails('');
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's build something together.
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to turn your idea into reality? Get in touch and let's discuss your project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-blue-100">hello@prdev.io</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 p-3 rounded-lg">
                <Calendar className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Schedule a call</h3>
                <p className="text-blue-100">Book a free consultation</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/pandurijal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://twitter.com/pandurijal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-white/70 text-white"
                  placeholder="Your full name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-white/70 text-white"
                  placeholder="your.email@example.com"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-white/70 text-white"
                  placeholder="What can we help you with?"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="details" className="block text-sm font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  id="details"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-white/70 text-white resize-none"
                  placeholder="Tell us about your project requirements..."
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              {message && (
                <div className={`p-3 rounded-lg text-sm ${
                  isSuccess 
                    ? 'bg-green-500/20 border border-green-500/30 text-green-100' 
                    : 'bg-red-500/20 border border-red-500/30 text-red-100'
                }`}>
                  {message}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;