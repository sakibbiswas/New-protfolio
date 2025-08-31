
import React from 'react';
import { motion } from 'framer-motion';
import logo1 from '../../assets/a1.png';
import logo2 from '../../assets/a2.png';
import logo3 from '../../assets/a3.png';

const expertiseData = [
  {
    logo: logo1,
    title: 'Web Development',
    description: 'I am a full stack web developer (MERN) with extensive experience in building modern, responsive, and scalable web applications. I love coding and turning ideas into reality.',
  },
  {
    logo: logo2,
    title: 'UI/UX Design',
    description: 'I have worked on UI/UX design, ensuring user-friendly interfaces. Share your idea, and I can help design an intuitive and engaging experience for your project.',
  },
  {
    logo: logo3,
    title: 'React Development',
    description: 'React is my specialty. I can build complex, dynamic, and high-performing websites and applications using React and related modern libraries.',
  },
];

const Expertise: React.FC = () => {
  return (
    <section
      id="expertise"
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-red-500 mb-3">
          Expertise Areas
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          Some of my main expertise areas where I can add value to your project.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 md:gap-8 lg:gap-12">
        {expertiseData.map((item, idx) => (
          <motion.div
            key={idx}
            className="flex-1 bg-white/5 backdrop-blur-md rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-32 h-32 mb-5 relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500 to-red-600 opacity-20 blur-xl group-hover:opacity-40 transition duration-500"></div>
              <img
                src={item.logo}
                alt={item.title}
                className="relative w-32 h-32 object-contain z-10 rounded-xl"
              />
            </div>
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-500 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
