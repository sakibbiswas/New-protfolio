
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Education: React.FC = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000, easing: "ease-in-out" });
  }, []);

  const educationData = [
    {
      title: "Bachelor’s in CSE",
      institution: "Uttara University",
      department: "Computer Science & Engineering",
      duration: "2021 - Present",
    },
    {
      title: "HSC (Science)",
      institution: "Netrakona Govt College",
      year: "2018",
      gpa: "4.75",
    },
  ];

  return (
    <section
      id="education"
      className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-5xl font-extrabold mb-20 text-center bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
          Education
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Gradient Line */}
          <div className="absolute left-1/2 top-0 w-1 h-full -translate-x-1/2 bg-gradient-to-b from-pink-500 via-red-500 to-pink-500 opacity-20 rounded"></div>

          {/* Timeline Items */}
          {educationData.map((edu, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative mb-16 md:flex md:justify-between md:items-center ${
                  !isLeft ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Card Content */}
                <div
                  data-aos={isLeft ? "fade-right" : "fade-left"}
                  className={`backdrop-blur-xl bg-white/5 p-10 rounded-3xl shadow-2xl border border-white/10
                    transform transition-all duration-1000 ease-in-out hover:scale-105 hover:shadow-pink-500/50
                    opacity-0 translate-y-10
                    data-aos-init:data-aos-animate:opacity-100 data-aos-init:data-aos-animate:translate-y-0
                    md:w-1/2 ${!isLeft ? "md:text-left md:pl-8" : "md:text-right md:pr-8"}`}
                >
                  <h3 className="text-3xl font-bold text-pink-400 mb-4">{edu.title}</h3>
                  <p className="text-gray-300 mb-2">
                    <span className="font-semibold">Institution:</span> {edu.institution}
                  </p>
                  {edu.department && (
                    <p className="text-gray-300 mb-2">
                      <span className="font-semibold">Department:</span> {edu.department}
                    </p>
                  )}
                  {edu.duration && (
                    <p className="text-gray-300 mb-2">
                      <span className="font-semibold">Duration:</span> {edu.duration}
                    </p>
                  )}
                  {edu.year && (
                    <p className="text-gray-300 mb-2">
                      <span className="font-semibold">Year:</span> {edu.year}
                    </p>
                  )}
                  {edu.gpa && (
                    <p className="text-gray-300">
                      <span className="font-semibold">GPA:</span> {edu.gpa}
                    </p>
                  )}
                </div>

                {/* Timeline Dot */}
                <div className="flex justify-center items-center md:w-1/2 relative z-10">
                  <div className="w-6 h-6 rounded-full bg-pink-400 border-4 border-gray-900 shadow-lg animate-pulse"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
