// import React from 'react';
// import picture from '../../assets/pic2.jpg';

// const About: React.FC = () => {
//   return (
//     <div id="about" className="bg-pink-100 p-8">
//       <div className="md:grid grid-cols-2 justify-center items-center gap-8">
//         <img
//           className="w-[500px] h-[500px] rounded-full"
//           src={picture}
//           alt="Sazzadur Rahman Sakib"
//           data-aos="zoom-in-down"
//           data-aos-easing="ease-out-cubic"
//           data-aos-duration="2000"
//         />

//         <div className="space-y-4">
//           <h2 className="text-4xl font-bold text-slate-800 mb-10">About Me</h2>
// <h3 className="text-slate-800 text-xl font-semibold mb-4 leading-relaxed  text-justify [text-wrap:balance]">
//   Hello, I am a Full Stack Web Developer with expertise in building modern, responsive, and scalable web applications. My technical skills include HTML, CSS, Bootstrap, Tailwind CSS, JavaScript (ES6+), React, Next.js, TypeScript,Redux , Firebase, Express.js, Node.js, MongoDB, PostgreSQL, JWT, Git, Netlify, Vercel, Google API, Figma, shadcn/ui, TanStack Query, and strong problem-solving abilities. I am passionate about creating efficient, user-friendly solutions and continuously learning new technologies to deliver high-quality applications.Thank you for taking the time to read this.I look forward to speaking with you if you have any opportunity for me. Feel free to ask me any questions. I am always here to respond. Thank you!
// </h3>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;



import React from "react";
import picture from "../../assets/pic2.jpg";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto md:grid grid-cols-2 items-center gap-16">
        
        {/* Profile Picture */}
        <div
          className="flex justify-center mb-12 md:mb-0 relative"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-red-600 blur-2xl opacity-40 group-hover:opacity-70 transition duration-500"></div>
            <img
              src={picture}
              alt="Sazzadur Rahman Sakib"
              className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full border-4 border-pink-500 shadow-lg shadow-pink-500/40 object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* About Content */}
        <div
          className="backdrop-blur-xl bg-white/5 p-10 rounded-3xl shadow-2xl border border-white/10 hover:border-pink-400/30 transition duration-500"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed text-justify [text-wrap:balance]">
            Hello, I am{" "}
            <span className="font-bold text-white">Sazzadur Rahman Sakib</span>, a{" "}
            <span className="font-bold text-pink-400">Full Stack Web Developer</span> with
            expertise in building{" "}
            <span className="text-red-400 font-semibold">modern, responsive, and scalable</span>{" "}
            web applications. <br /> <br />
            My technical skills include{" "}
            <span className="text-gray-200">
              HTML, CSS, Bootstrap, Tailwind CSS, JavaScript (ES6+), React, Next.js,
              TypeScript, Redux, Firebase, Express.js, Node.js, MongoDB, PostgreSQL, JWT,
              Git, Netlify, Vercel, Google API, Figma, shadcn/ui, TanStack Query
            </span>
            . <br /> <br />
            I am passionate about creating{" "}
            <span className="text-pink-400 font-semibold">efficient, user-friendly solutions</span>{" "}
            and continuously learning new technologies to deliver{" "}
            <span className="text-red-400 font-semibold">high-quality applications</span>.
            <br /> <br />
            Thank you for taking the time to read this. I look forward to connecting with
            you if you have any exciting opportunities. 
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-red-600 text-white font-semibold shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
            >
              📄 Download CV
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-pink-500 text-pink-400 font-semibold hover:bg-pink-500/10 hover:text-white transition duration-300"
            >
              ✉️ Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

