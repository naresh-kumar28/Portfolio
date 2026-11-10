import React, { useState } from 'react';
import { personalData } from '../../data/personalData';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
    website: '' // honeypot
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.website) {
      // Honeypot triggered
      return;
    }
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in your name, email, and message!");
      return;
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', contact: '', message: '', website: '' });
    }, 5000);
  };

  const sendWhatsAppDirect = () => {
    if (!formData.name || !formData.message) {
      alert("Please fill in your name and message first!");
      return;
    }

    const text = `Hello 👋%0AName: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0AMobile: ${encodeURIComponent(formData.contact)}%0AMessage: ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/${personalData.contact.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200/60 dark:border-gray-800/60 rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Info Column */}
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Let’s <span className="text-[#bd69f5]">Talk</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Got a project, an idea, or just want to say hi? Drop a message — I'll get back to you quickly.
          </p>

          {/* Contact Image Frame */}
          <div className="relative w-full h-80 sm:h-96 overflow-hidden rounded-3xl shadow-2xl ring-4 ring-[#bd69f5]/30 group">
            <img
              src="/images/contact.png"
              alt="Contact Naresh Dev"
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
              <div className="text-white space-y-1.5">
                <p className="font-bold text-base sm:text-lg flex items-center gap-2">
                  <i className="fa-solid fa-location-dot text-[#bd69f5]"></i> {personalData.contact.location}
                </p>
                <p className="text-xs sm:text-sm text-gray-300 flex items-center gap-2">
                  <i className="fa-solid fa-envelope text-[#bd69f5]"></i> {personalData.contact.email}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Column */}
        <div className="bg-gradient-to-br from-[#bd69f5] to-pink-600 dark:from-gray-800 dark:to-gray-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/20 dark:border-gray-700/50">
          
          {submitted ? (
            <div className="bg-white/95 dark:bg-gray-900/95 rounded-2xl p-8 text-center space-y-4 shadow-xl animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-3xl mx-auto">
                <i className="fa-solid fa-check"></i>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">Thank You!</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Your message has been sent successfully. I will get back to you shortly!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot field */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
              />

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white dark:text-gray-200 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/90 dark:bg-gray-900/90 border border-white/30 dark:border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white dark:text-gray-200 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/90 dark:bg-gray-900/90 border border-white/30 dark:border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white dark:text-gray-200 mb-2">
                  Mobile Number
                </label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full bg-white/90 dark:bg-gray-900/90 border border-white/30 dark:border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-white dark:text-gray-200 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/90 dark:bg-gray-900/90 border border-white/30 dark:border-gray-700 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition resize-none"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-900 dark:bg-[#bd69f5] text-white py-3.5 px-6 rounded-xl font-bold hover:bg-black dark:hover:bg-[#a855d8] hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <i className="fa-solid fa-paper-plane"></i>
                  <span>Send Message</span>
                </button>

                <button
                  type="button"
                  onClick={sendWhatsAppDirect}
                  className="flex items-center justify-center gap-2 bg-emerald-600 text-white py-3.5 px-5 rounded-xl font-bold hover:bg-emerald-700 hover:scale-[1.02] transition-all cursor-pointer"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  <span>WhatsApp</span>
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};
