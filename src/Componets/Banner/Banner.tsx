
import React from 'react';
import pic from '../../assets/pic (1).jpg';
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import resume from '../../assets/Sazzadur Rhaman Resume.pdf';
import { TypeAnimation } from 'react-type-animation';

const Banner: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto md:flex justify-between items-center gap-10 px-6 py-16 md:py-24">
        
        {/* Left Content */}
        <div className="space-y-6 md:w-1/2">
          {/* Small Heading */}
          <h2 className="text-lg font-semibold tracking-wide">
            <span className="text-pink-500">----</span> Hello
          </h2>

          {/* Typing Animation */}
          <TypeAnimation
            sequence={[
              'I am',
              800,
              'Sazzadur Rahman',
              1200,
              'Sazzadur Rahman Sakib',
              1500,
              'Full Stack Developer',
              1500,
              'UI/UX Designer',
              1500,
              '',
              500,
            ]}
            speed={40}
            repeat={Infinity}
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent"
          />

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl text-justify [text-wrap:balance]">
            This is <span className="font-bold text-white">Sazzadur Rahman Sakib</span>, a passionate{" "}
            <span className="font-bold text-white">Full Stack Developer (MERN)</span> and{" "}
            <span className="font-bold text-white">UI/UX Designer</span> from Bangladesh.  
            I specialize in building scalable, user-friendly, and modern web applications by blending{" "}
            <span className="text-pink-400 font-semibold">clean code</span> with{" "}
            <span className="text-red-400 font-semibold">intuitive design</span>.  
            Always eager to learn and collaborate with dynamic teams, I focus on delivering innovative and impactful solutions.
          </p>

          {/* Download Resume Button */}
          <a href={resume} download="Sazzadur Rhaman Resume.pdf">
            <button className="mt-6 flex items-center gap-3 px-7 py-3 rounded-lg text-lg font-semibold 
              bg-gradient-to-r from-pink-500 to-red-500 hover:from-red-600 hover:to-pink-600 
              shadow-lg hover:shadow-pink-500/40 transition-all duration-300">
              <FaDownload className="w-5 h-5" />
              <span>Download Resume</span>
            </button>
          </a>

          {/* Social Links */}
          <div className="flex gap-6 mt-6">
            <a
              href="https://github.com/sakibbiswas"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 hover:text-pink-400 transition-colors duration-300 shadow-md"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100089945906008"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 hover:text-blue-500 transition-colors duration-300 shadow-md"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sazzadur-rahman-sakib-3ab995280/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 hover:text-blue-400 transition-colors duration-300 shadow-md"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center" data-aos="fade-up" data-aos-duration="2000">
          <img
            className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full border-4 border-pink-500 shadow-lg shadow-pink-500/40 object-cover"
            src={pic}
            alt="Sazzadur Rahman Sakib"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
