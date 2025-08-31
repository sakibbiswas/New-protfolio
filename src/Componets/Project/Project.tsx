// import React from 'react';
// import img1 from '../../assets/scroll-2.png';
// import img2 from '../../assets/scoll-1.png';
// import img3 from '../../assets/Screenshot_15.png';
// import img4 from '../../assets/Screenshot_25.png';
// import img5 from '../../assets/Screenshot_26.png';
// import img6 from '../../assets/Screenshot_27.png';
// import img7 from '../../assets/Screenshot_21.png';
// import img8 from '../../assets/Screenshot_22.png';
// import img9 from '../../assets/Screenshot_23.png';
// import img10 from '../../assets/Screenshot_24.png';
// import img11 from '../../assets/Screenshot_28.png';
// import CustomScroll from './CustomScroll';


// interface ProjectProps {
//   title: string;
//   description: string[];
//   images: string[];
//   liveLink: string;
//   clientLink: string;
//   serverLink: string;
// }

// const ProjectCard: React.FC<ProjectProps> = ({ title, description, images, liveLink, clientLink, serverLink }) => (
//   <div className="card h-[530px] card-compact w-96 bg-base-100 shadow-xl">
//     <CustomScroll height="250px" className="p-2">
//       {images.map((img, index) => (
//         <img key={index} className="w-[400px] h-[250px]" src={img} alt={`${title} ${index + 1}`} />
//       ))}
//     </CustomScroll>
//     <div className="card-body">
//       <h2 className="card-title">{title}</h2>
//       {description.map((desc, idx) => (
//         <p key={idx}>{desc}</p>
//       ))}
//       <div className="md:flex justify-start items-center p-5 gap-4 text-blue-700 text-xl font-bold mt-3">
//         <a href={liveLink} target="_blank" rel="noopener noreferrer">
//           <button className="btn btn-accent">Live link</button>
//         </a>
//         <a href={clientLink} target="_blank" rel="noopener noreferrer">
//           <button className="btn btn-primary">Client</button>
//         </a>
//         <a href={serverLink} target="_blank" rel="noopener noreferrer">
//           <button className="btn btn-secondary">Server</button>
//         </a>
//       </div>
//     </div>
//   </div>
// );

// const Project: React.FC = () => {
//   const projects: ProjectProps[] = [
//     {
//       title: "Food Hunter",
//       description: [
//         "It is a single page application. There you will find chefs and their famous recipe worldwide.",
//         "Users can search their favorite chef by country name and see their recipes.",
//         "Secure API and awesome UI UX that makes a unique user interface"
//       ],
//       images: [img2, img1, img3],
//       liveLink: "https://chef-recipe-client-8ef77.web.app/country/0",
//       clientLink: "https://github.com/sakibbiswas/chef-recipe-client",
//       serverLink: "https://github.com/sakibbiswas/chef-recipe-server"
//     },
//     {
//       title: "Toy Shop",
//       description: [
//         "It is a MERN based E-commerce website. That provides some e-commerce services.",
//         "User can add their toys and manage their activities.",
//         "Admin have the access to remove product or user in the website. Secured and authentic."
//       ],
//       images: [img4, img5, img6, img11],
//       liveLink: "https://toy-marketplace-client-d8225.web.app/",
//       clientLink: "https://github.com/sakibbiswas/toy-market-client",
//       serverLink: "https://github.com/sakibbiswas/toy-market-server"
//     },
//     {
//       title: "Mozart Academy",
//       description: [
//         "User can enroll courses and pay for each course",
//         "Instructors can add courses.",
//         "Admin can manage all users and instructors by using the admin dashboard."
//       ],
//       images: [img7, img8, img9, img10],
//       liveLink: "https://summer-camp-client-db0ed.web.app/",
//       clientLink: "https://github.com/sakibbiswas/summer-camp-client",
//       serverLink: "https://github.com/sakibbiswas/summer-camp-server"
//     }
//   ];

//   return (
//     <div className="bg-pink-100 space-y-5">
//       <h2 className="text-center text-4xl text-slate-800 font-bold pt-8">Recent Projects</h2>
//       <p className="text-xl text-center text-slate-800">
//         I have my recent project with React also by using other technologies. You can check by clicking live preview.
//       </p>

//       <div className="md:flex justify-center items-center gap-10">
//         {projects.map((project, index) => (
//           <ProjectCard key={index} {...project} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Project;







import React from 'react';
import img1 from '../../assets/scroll-2.png';
import img2 from '../../assets/scoll-1.png';
import img3 from '../../assets/Screenshot_15.png';
import img4 from '../../assets/Screenshot_25.png';
import img5 from '../../assets/Screenshot_26.png';
import img6 from '../../assets/Screenshot_27.png';
import img7 from '../../assets/Screenshot_21.png';
import img8 from '../../assets/Screenshot_22.png';
import img9 from '../../assets/Screenshot_23.png';
import img10 from '../../assets/Screenshot_24.png';
import img11 from '../../assets/Screenshot_28.png';
import CustomScroll from './CustomScroll'; // keep the old scroll component

interface ProjectProps {
  title: string;
  description: string[];
  images: string[];
  liveLink: string;
  clientLink: string;
  serverLink: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, images, liveLink, clientLink, serverLink }) => (
  <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300 w-96 flex-shrink-0 flex flex-col">
    
    {/* ✅ Scrolling restored like the old code */}
    <CustomScroll height="250px" className="p-2">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${title} ${idx + 1}`}
          className="w-[400px] h-[250px] object-cover rounded-xl shadow-md"
        />
      ))}
    </CustomScroll>

    {/* Card Content */}
    <div className="p-5 flex flex-col justify-between flex-1 mt-4">
      <div>
        <h3 className="text-2xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-red-500">
          {title}
        </h3>
        <ul className="list-disc list-inside mb-4 text-gray-200 space-y-1 text-sm md:text-base">
          {description.map((desc, idx) => (
            <li key={idx}>{desc}</li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mt-4">
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex-1">
          <button className="btn w-full bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600 text-sm md:text-base">
            Live Preview
          </button>
        </a>
        <a href={clientLink} target="_blank" rel="noopener noreferrer" className="flex-1">
          <button className="btn w-full bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base">
            Client
          </button>
        </a>
        <a href={serverLink} target="_blank" rel="noopener noreferrer" className="flex-1">
          <button className="btn w-full bg-gray-600 hover:bg-gray-700 text-white text-sm md:text-base">
            Server
          </button>
        </a>
      </div>
    </div>
  </div>
);

const Project: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      title: "Food Hunter",
      description: [
        "Single page application showcasing chefs and their popular recipes worldwide.",
        "Search your favorite chef by country and see their recipes.",
        "Secure API integration with polished UI/UX.",
      ],
      images: [img2, img1, img3],
      liveLink: "https://chef-recipe-client-8ef77.web.app/country/0",
      clientLink: "https://github.com/sakibbiswas/chef-recipe-client",
      serverLink: "https://github.com/sakibbiswas/chef-recipe-server"
    },
    {
      title: "Toy Shop",
      description: [
        "MERN-based e-commerce platform for managing products and toys.",
        "Users can add, edit, and manage their products easily.",
        "Admin can manage users and products securely via dashboard.",
      ],
      images: [img4, img5, img6, img11],
      liveLink: "https://toy-marketplace-client-d8225.web.app/",
      clientLink: "https://github.com/sakibbiswas/toy-market-client",
      serverLink: "https://github.com/sakibbiswas/toy-market-server"
    },
    {
      title: "Mozart Academy",
      description: [
        "Enroll in courses and pay directly online.",
        "Instructors can create and manage courses.",
        "Admin dashboard manages all users and instructors efficiently.",
      ],
      images: [img7, img8, img9, img10],
      liveLink: "https://summer-camp-client-db0ed.web.app/",
      clientLink: "https://github.com/sakibbiswas/summer-camp-client",
      serverLink: "https://github.com/sakibbiswas/summer-camp-server"
    }
  ];

  return (
    <section id="projects" className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-red-500 mb-3">
          Recent Projects
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          Explore some of my recent projects built using modern technologies. Click on live preview to check them.
        </p>
      </div>

      {/* Projects Horizontal Scroll */}
      <div className="flex justify-center overflow-x-auto gap-6 px-2 py-2 scrollbar-hide">
        <div className="flex gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;

