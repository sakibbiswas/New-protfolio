// import React from 'react';
// import logo1 from '../../assets/ts.jpg';
// import logo2 from '../../assets/firebase.500e6fabd0115e7fba87.png';
// import logo3 from '../../assets/tailwind.b0accb5db70ddc723318.png';
// import logo4 from '../../assets/Bootstrap.7d7074503a72c9f0e4e5.png';
// import logo5 from '../../assets/css3.18e16ce310e25a5e1334.png';
// import logo6 from '../../assets/express.786d8f42f67a4f094925.png';
// import logo7 from '../../assets/download.png';
// import logo8 from '../../assets/html5.ac0a1f6d141827e6fd06.png';
// import logo9 from '../../assets/mongodb.b734ca899c237b3e83c9.png';
// import logo10 from '../../assets/Vscode.645fb69aa5ad0e365e92.png';
// import logo11 from '../../assets/ReactQuery.b05d2ddcbd80cf625361.png';
// import logo12 from '../../assets/next.webp'
// import logo13 from '../../assets/psql.jpg'
// import logo14 from '../../assets/netlify-logo.jpg'
// import logo15 from '../../assets/shadcn.png'

// const Skils: React.FC = () => {
//   return (
//     <div
//       className="bg-gray-700 px-8 py-5"
//       data-aos="flip-right"
//       data-aos-easing="ease-out-cubic"
//       data-aos-duration="2000"
//     >
//       <h2 className="text-center mb-5 text-4xl font-bold text-white">Skills</h2>
//       <h2 className="text-xl text-white text-center">
//         HTML, CSS, Bootstrap, Tailwind CSS, JavaScript (ES6+), React, Next.js, TypeScript, Redux , Firebase, Express.js, Node.js, MongoDB, PostgreSQL, JWT, Git, Netlify, Vercel, Google API, Figma, shadcn/ui, TanStack Query.
//       </h2>
//       <div className="md:flex justify-center items-center gap-10 mb-10 mt-8">
//         <img className="w-[90px] h-[50px]" src={logo1} alt="JavaScript Logo" />
//         <img className="w-[90px] h-[50px]" src={logo2} alt="Firebase Logo" />
//         <img className="w-[90px] h-[50px]" src={logo3} alt="Tailwind Logo" />
//         <img className="w-[90px] h-[50px]" src={logo4} alt="Bootstrap Logo" />
//         <img className="w-[90px] h-[50px]" src={logo5} alt="CSS3 Logo" />
//         <img className="w-[90px] h-[50px]" src={logo6} alt="Express Logo" />
//         <img className="w-[90px] h-[50px]" src={logo7} alt="Node Logo" />
//         <img className="w-[90px] h-[50px]" src={logo8} alt="HTML5 Logo" />
//         <img className="w-[90px] h-[50px]" src={logo9} alt="MongoDB Logo" />
//         <img className="w-[90px] h-[50px]" src={logo10} alt="VSCode Logo" />
//         <img className="w-[90px] h-[50px]" src={logo11} alt="React Query Logo" />
//         <img className="w-[90px] h-[50px]" src={logo12} alt="React Query Logo" />
//         <img className="w-[90px] h-[50px]" src={logo13} alt="React Query Logo" />
//         <img className="w-[90px] h-[50px]" src={logo14} alt="React Query Logo" />
//         <img className="w-[90px] h-[50px]" src={logo15} alt="React Query Logo" />

        
         
//       </div>
//     </div>
//   );
// };

// export default Skils;








import React from 'react';
import logo1 from '../../assets/ts.jpg';
import logo2 from '../../assets/firebase.500e6fabd0115e7fba87.png';
import logo3 from '../../assets/tailwind.b0accb5db70ddc723318.png';
import logo4 from '../../assets/Bootstrap.7d7074503a72c9f0e4e5.png';
import logo5 from '../../assets/css3.18e16ce310e25a5e1334.png';
import logo6 from '../../assets/express.786d8f42f67a4f094925.png';
import logo7 from '../../assets/download.png';
import logo8 from '../../assets/html5.ac0a1f6d141827e6fd06.png';
import logo9 from '../../assets/mongodb.b734ca899c237b3e83c9.png';
import logo10 from '../../assets/Vscode.645fb69aa5ad0e365e92.png';
import logo11 from '../../assets/ReactQuery.b05d2ddcbd80cf625361.png';
import logo12 from '../../assets/next.webp';
import logo13 from '../../assets/psql.jpg';
import logo14 from '../../assets/netlify-logo.jpg';
import logo15 from '../../assets/shadcn.png';

const skills = [
  { src: logo1, name: 'TypeScript' },
  { src: logo2, name: 'Firebase' },
  { src: logo3, name: 'Tailwind CSS' },
  { src: logo4, name: 'Bootstrap' },
  { src: logo5, name: 'CSS3' },
  { src: logo6, name: 'Express.js' },
  { src: logo7, name: 'Node.js' },
  { src: logo8, name: 'HTML5' },
  { src: logo9, name: 'MongoDB' },
  { src: logo10, name: 'VSCode' },
  { src: logo11, name: 'TanStack Query' },
  { src: logo12, name: 'Next.js' },
  { src: logo13, name: 'PostgreSQL' },
  { src: logo14, name: 'Netlify' },
  { src: logo15, name: 'shadcn/ui' },
];

const Skills: React.FC = () => {
  return (
    <section
      id="expertise"
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      {/* Heading */}
      <h2 className="text-center mb-8 text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 tracking-wide">
        My Skills
      </h2>

      {/* Description */}
      <p className="text-center text-gray-300 max-w-4xl mx-auto mb-12 px-3 text-lg md:text-xl leading-relaxed">
        I have hands-on experience with a wide range of technologies to build modern, scalable,
        and user-friendly applications. My expertise includes{" "}
        <span className="font-semibold text-white">
          HTML, CSS, Bootstrap, Tailwind CSS, JavaScript (ES6+), React, Next.js, TypeScript, Redux, Firebase, Express.js, Node.js, MongoDB, PostgreSQL, JWT, Git, Netlify, Vercel, Google API, Figma, shadcn/ui, and TanStack Query
        </span>.
        I continuously learn and adapt new technologies to deliver high-quality and efficient solutions.
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white/5 backdrop-blur-sm p-5 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer group"
          >
            <div className="relative w-24 h-24 flex items-center justify-center mb-3">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500 to-red-600 opacity-20 blur-xl group-hover:opacity-40 transition duration-500"></div>
              <img
                src={skill.src}
                alt={`${skill.name} Logo`}
                className="w-20 h-20 object-contain relative z-10"
              />
            </div>
            <span className="text-gray-100 font-semibold text-sm md:text-base text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

