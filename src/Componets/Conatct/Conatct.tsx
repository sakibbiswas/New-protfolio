import React, { useEffect } from "react";
import type { FormEvent } from "react"; 
import { Mail, Phone, MapPin } from "lucide-react";
import img from "../../assets/contact.6dcc16dbbb8757292805.png";
import "aos/dist/aos.css";
import AOS from "aos";

const Contact: React.FC = () => {
  useEffect(() => {
    AOS.init({
      once: false, // allow re-animation on scroll
      duration: 1200, // smoother, slower animations
      easing: "ease-in-out-sine", // softer easing
      offset: 100, // start animating earlier
    });
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  const inputFields = [
    { label: "Your Name", type: "text", required: true },
    { label: "Email", type: "email", required: true },
    { label: "Budget (optional)", type: "number" },
  ];

  const contactInfos = [
    { Icon: Phone, title: "Phone / WhatsApp", text: "+8801631479509" },
    { Icon: Mail, title: "Email", text: "sakibsakib99880@gmail.com" },
    { Icon: MapPin, title: "Location", text: "Netrakona, Dhaka" },
  ];

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-24 px-6"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-pink-500/10 blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 mb-3">
            Let’s Work Together
          </h2>
          <p
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Drop a line and I’ll get back to you as soon as possible. Let’s
            create something amazing together.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Illustration */}
          <div
            data-aos="zoom-in"
            data-aos-delay="150"
            className="relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <img
              src={img}
              alt="Contact Illustration"
              className="w-full max-h-[450px] object-contain rounded-2xl shadow-xl transform transition-transform duration-700 hover:scale-105 hover:rotate-1"
            />
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-10 space-y-6 border border-white/20"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            {inputFields.map((field, idx) => (
              <div key={idx} className="relative" data-aos="fade-up" data-aos-delay={400 + idx * 150}>
                <input
                  type={field.type}
                  required={field.required}
                  placeholder=" "
                  className="peer w-full bg-white/20 text-white placeholder-transparent rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-1 focus:ring-offset-gray-900 transition duration-300"
                />
                <label className="absolute left-4 top-3 text-gray-300 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-white peer-focus:text-sm">
                  {field.label}
                </label>
              </div>
            ))}

            <div className="relative" data-aos="fade-up" data-aos-delay="700">
              <textarea
                placeholder=" "
                className="peer w-full h-32 bg-white/20 text-white placeholder-transparent rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-1 focus:ring-offset-gray-900 transition duration-300"
              ></textarea>
              <label className="absolute left-4 top-3 text-gray-300 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-3 peer-focus:text-white peer-focus:text-sm">
                Project Description
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-xl shadow-lg py-3 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              data-aos="zoom-in"
              data-aos-delay="900"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="mt-20 grid sm:grid-cols-3 gap-6 text-center">
          {contactInfos.map((info, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 transform transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={idx * 250}
            >
              <info.Icon className="w-8 h-8 text-pink-500 mb-3" />
              <h3 className="font-semibold text-white">{info.title}</h3>
              <p className="text-gray-300">{info.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
