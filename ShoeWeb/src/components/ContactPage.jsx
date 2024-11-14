import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

 function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <Mail className="w-6 h-6 text-blue-500 mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Email</h2>
              <p className="text-gray-600">contact@shoeweb.com</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <Phone className="w-6 h-6 text-blue-500 mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Phone</h2>
              <p className="text-gray-600">+254 (722) 610-567</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <MapPin className="w-6 h-6 text-blue-500 mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Address</h2>
              <p className="text-gray-600">125 Moi Avenue Street<br />City, Nairobi 00100</p>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}


export default ContactPage;