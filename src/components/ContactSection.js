import React from "react";
import Image from "next/image";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Section - Contact Information */}
          <div className="space-y-8 mt-24">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                <span className="text-gray-800">Let's </span>
                <span className="text-red-500">connect</span>
                <span className="text-gray-800"> and </span>
                <span className="text-red-500">bring your ideas to life.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ready to bring your vision to life? Get in touch and let's transform your ideas into reality.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-800 font-semibold mb-2">Our Location</h3>
                  <p className="text-gray-500">Level 40, 140 William Street Melbourne VIC 3000, Australia</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-800 font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-500">connect@artivo.com.au</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-800 font-semibold mb-2">Business Hours</h3>
                  <p className="text-gray-500">Monday - Friday 9:00 AM - 6:00 PM (AEST)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            {/* Form Header */}
            <div className="relative h-40 bg-gray-800 overflow-hidden">
              <Image
                src="/why-artivo/Rectangle 6.png"
                alt="Form Header Background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="relative z-10 h-full flex flex-col justify-center px-8">
                <h3 className="text-white text-3xl font-bold mb-3">Let's connect</h3>
                <p className="text-gray-200 text-base">
                  Our team is ready to answer your questions and discuss your project needs
                </p>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-8">
              <form className="space-y-6">
                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Your Name */}
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      style={{ borderColor: 'rgba(217, 217, 217, 1)' }}
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Specialisation */}
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Specialisation</label>
                    <select className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" style={{ borderColor: 'rgba(217, 217, 217, 1)' }}>
                      <option>Select...</option>
                      <option>Engineering</option>
                      <option>Design</option>
                      <option>Manufacturing</option>
                      <option>R&D</option>
                    </select>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Phone Number</label>
                    <div className="flex space-x-2">
                      <select className="px-3 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent" style={{ borderColor: 'rgba(217, 217, 217, 1)' }}>
                        <option>+91</option>
                        <option>+1</option>
                        <option>+61</option>
                        <option>+44</option>
                      </select>
                      <input
                        type="tel"
                        className="flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        style={{ borderColor: 'rgba(217, 217, 217, 1)' }}
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      style={{ borderColor: 'rgba(217, 217, 217, 1)' }}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Send us a message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    style={{ borderColor: 'rgba(217, 217, 217, 1)' }}
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                {/* Subscription */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Stay ahead with Artivo updates on design, R&D, and manufacturing trends that help your business innovate smarter. Subscribe to our blogs.
                  </p>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded border-gray-300 text-red-600 focus:ring-red-500" />
                    <span className="text-gray-700 text-sm">Yes, subscribe me to your design blogs for more updates.</span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-4 px-6 rounded-lg transition-colors duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
