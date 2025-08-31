import React, { useEffect, useRef } from "react";
import type { FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import img from "../../assets/contact.6dcc16dbbb8757292805.png";
import "aos/dist/aos.css";
import AOS from "aos";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast"; // ✅ import toast

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out-cubic",
      offset: 50,
    });
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const sendingToast = toast.loading("Sending message..."); // show loading toast

    emailjs
      .sendForm(
        "service_ykqjfoy", // Your Service ID
        "template_hcrpgi7", // Your Template ID
        formRef.current,
        "h1NvnufJ-KM-DrLRN" // Your Public Key
      )
      .then(
        () => {
          toast.dismiss(sendingToast); // dismiss loading toast
          toast.success("Message sent successfully! ✅", { duration: 4000 });
          formRef.current?.reset();
        },
        (error) => {
          toast.dismiss(sendingToast); // dismiss loading toast
          console.error(error);
          toast.error("Failed to send message. ❌ Please try again.", {
            duration: 4000,
          });
        }
      );
  };

  const inputFields = [
    { name: "name", label: "Your Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
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
      <Toaster position="top-right" reverseOrder={false} /> {/* ✅ Toast container */}
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
            data-aos-delay="100"
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
            data-aos-delay="100"
            className="relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <img
              src={img}
              alt="Contact Illustration"
              className="w-full max-h-[450px] object-contain rounded-2xl shadow-xl transform transition-transform duration-500 hover:scale-105 hover:rotate-1"
            />
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-10 space-y-6 border border-white/20"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            {inputFields.map((field, idx) => (
              <div
                key={idx}
                className="flex flex-col space-y-2"
                data-aos="fade-up"
                data-aos-delay={300 + idx * 100}
              >
                <label className="text-gray-300 text-sm">{field.label}</label>
                <input
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  placeholder={field.label}
                  className="w-full bg-white/20 text-white rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-1 focus:ring-offset-gray-900 transition duration-300 placeholder-gray-400"
                />
              </div>
            ))}

            {/* Message */}
            <div
              className="flex flex-col space-y-2"
              data-aos="fade-up"
              data-aos-delay={500}
            >
              <label className="text-gray-300 text-sm">Project Description</label>
              <textarea
                name="message"
                placeholder="Write your project details..."
                className="w-full h-32 bg-white/20 text-white rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-1 focus:ring-offset-gray-900 transition duration-300 placeholder-gray-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-xl shadow-lg py-3 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              data-aos="zoom-in"
              data-aos-delay="600"
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
              data-aos-delay={200 + idx * 150}
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
