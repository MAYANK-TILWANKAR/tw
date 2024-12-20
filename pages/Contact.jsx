import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Example API call - replace with your actual endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          budget: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="h-screen flex flex-col ">
      <Navbar />
      <div className=" bg-[#171717]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 mt-20">
          {/* Header Section */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-3 sm:mb-4">
              Tell Us About Your Project
            </h1>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              This is your gateway to connect with us directly. Whether you have
              inquiries, feedback, or simply want to say hello.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Contact Information */}
            <div className="bg-neutral-800/80 backdrop-blur p-8 rounded-2xl shadow-lg">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-[#171717] p-4 rounded-xl shadow-inner">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-2">
                      Address
                    </h3>
                    <p className="text-base text-gray-300 leading-relaxed">
                      Office no. 506 (6th floor), Onam Plaza Industry House, AB
                      Road, Indore M.P. India
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="bg-[#171717] p-4 rounded-xl shadow-inner">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100">
                      Contact
                    </h3>
                    <p className="text-base text-gray-300">+91-6268839263</p>
                    <p className="text-sm text-gray-400 mt-1">
                      <span className="font-semibold text-red-400">
                        (Note:{" "}
                      </span>
                      Please don&apos;t call on this number for career
                      inquiries)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="bg-[#171717] p-4 rounded-xl shadow-inner">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100">
                      Email
                    </h3>
                    <p className="text-base text-gray-300">
                      info@triggrsweb.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="bg-[#171717] p-4 rounded-xl shadow-inner">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100">
                      Opening Hours
                    </h3>
                    <p className="text-base text-gray-300">
                      10:00 AM - 07:00 PM (Monday - Saturday)
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-neutral-700">
                  <ul className="flex justify-center gap-6">
                    <li>
                      <a
                        href="https://facebook.com/triggrsweb"
                        rel="noreferrer"
                        target="_blank"
                        className="text-white hover:text-blue-500 transition-colors duration-300">
                        <span className="sr-only">Facebook</span>
                        <svg
                          className="w-7 h-7"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://instagram.com/triggrsweb"
                        rel="noreferrer"
                        target="_blank"
                        className="text-white hover:text-pink-500 transition-colors duration-300">
                        <span className="sr-only">Instagram</span>
                        <svg
                          className="w-7 h-7"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://twitter.com/triggrsweb"
                        rel="noreferrer"
                        target="_blank"
                        className="text-white hover:text-blue-400 transition-colors duration-300">
                        <span className="sr-only">Twitter</span>
                        <svg
                          className="w-7 h-7"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://linkedin.com/company/triggrsweb"
                        rel="noreferrer"
                        target="_blank"
                        className="text-white hover:text-blue-600 transition-colors duration-300">
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          className="w-7 h-7"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-neutral-800/80 backdrop-blur p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-neutral-700/50 border border-neutral-600 text-gray-100 rounded-xl focus:ring-2 focus:ring-[#0891B2] focus:border-transparent transition-all duration-300 placeholder-gray-400"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-neutral-700/50 border border-neutral-600 text-gray-100 rounded-xl focus:ring-2 focus:ring-[#0891B2] focus:border-transparent transition-all duration-300 placeholder-gray-400"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 bg-neutral-700/50 border border-neutral-600 text-gray-100 rounded-xl focus:ring-2 focus:ring-[#0891B2] focus:border-transparent transition-all duration-300 placeholder-gray-400"
                    placeholder="Your Phone Number"
                    required
                  />
                </div>

                <div>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full p-3 bg-neutral-700 border border-neutral-600 text-gray-100 rounded-xl focus:ring-2 focus:ring-[#0891B2] focus:border-transparent transition-all duration-300"
                    required>
                    <option value="">Select Budget Range</option>
                    <option value="less-than-2">&lt; 2 Lakh</option>
                    <option value="2-5">2 - 5 Lakh</option>
                    <option value="5-7">5 - 7 Lakh</option>
                    <option value="more-than-7">&gt; 7 Lakh</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 bg-neutral-700/50 border border-neutral-600 text-gray-100 rounded-xl focus:ring-2 focus:ring-[#0891B2] focus:border-transparent transition-all duration-300 placeholder-gray-400"
                    rows="4"
                    placeholder="Tell us about your project..."
                    required></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 px-6 rounded-xl font-medium 
                           hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:scale-[0.99]
                           focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-neutral-800">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
