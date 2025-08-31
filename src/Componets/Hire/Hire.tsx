
import React from 'react';

const Hire: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-20 px-4">
      {/* Optional subtle background overlay */}
      <div className="absolute inset-0 bg-pink-500/10 blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h3 className="text-lg md:text-xl font-medium text-pink-400">
          Have an exciting project in mind?
        </h3>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-snug">
          Let's Bring Your Ideas to Life!
        </h1>
        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
          I'm always open to collaboration. Whether it's a small project or a large-scale solution,
          let's work together to make it a success. Reach out and let's create something amazing.
        </p>
        <div className="mt-6">
          <a href="#contact">
            <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
              Hire Me
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hire;

