"use client";

import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    // For now, we'll just log the data
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Contact</h2>
          <div className="w-20 h-1 bg-gray-300 mx-auto mb-4 rounded-full"></div>
          <p className="text-xl text-gray-600">
            Reach out — I'm always open to discussing new ideas and collaborations.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label 
                htmlFor="name" 
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Your Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label 
                htmlFor="email" 
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Your Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label 
                htmlFor="message" 
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Your Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors text-lg font-medium"
              >
                <FaPaperPlane className="w-4 h-4" />
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 