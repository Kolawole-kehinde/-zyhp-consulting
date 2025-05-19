import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="bg-gradient-to-br from-purple-200 via-white to-white py-10 px-4 lg:px-0 font-roboto">
      <div className="wrapper text-gray-800 mt-24 space-y-16">

        {/* Top section: Image + Contact Info */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Image */}
          <div className="w-full h-full">
            <img
              src="/images/contact.jpg"
              alt="Contact Us Illustration"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Right - Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-purple-500">CONTACT</span> US
            </h2>
            <p className="mb-6 text-gray-600 leading-relaxed">
              We’re here to help you! Whether you have a question, feedback, or a custom request — feel free to reach out.
            </p>

            <div className="mb-10 space-y-4">
              <h3 className="text-2xl font-semibold mb-2">Company Info</h3>
              <p><strong>Address:</strong> 1234 Main Street, City, Country</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Email:</strong> support@company.com</p>

              {/* Social Media */}
              <div className="flex space-x-6 mt-4">
                <a href="https://www.facebook.com/share/1BwwsrKrx2/" className="text-gray-600 hover:text-blue-600 transition"><FaFacebookF size={24} /></a>
                <a href="#" className="text-gray-600 hover:text-sky-400 transition"><FaTwitter size={24} /></a>
                <a href="#" className="text-gray-600 hover:text-blue-700 transition"><FaLinkedinIn size={24} /></a>
                <a href="#" className="text-gray-600 hover:text-pink-600 transition"><FaInstagram size={24} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section: Contact Form */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-center">Send Us a Message</h3>
          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-sm font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Type your message here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
