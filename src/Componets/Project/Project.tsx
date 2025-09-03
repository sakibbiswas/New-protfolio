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





import React, { useState } from "react";
import img1 from "../../assets/ride-2.png";
import img2 from "../../assets/ride-1.png";
import img3 from "../../assets/ride-3.png";
import img12 from "../../assets/ride-4.png";
import img4 from "../../assets/Screenshot_25.png";
import img5 from "../../assets/Screenshot_26.png";
import img6 from "../../assets/Screenshot_27.png";
import img7 from "../../assets/Screenshot_21.png";
import img8 from "../../assets/Screenshot_22.png";
import img9 from "../../assets/Screenshot_23.png";
import img10 from "../../assets/Screenshot_24.png";
import img11 from "../../assets/Screenshot_28.png";
import CustomScroll from "./CustomScroll";

// ----------------- Interfaces -----------------
interface ProjectProps {
  title: string;
  description: string[];
  images: string[];
  liveLink: string;
  clientLink: string;
  serverLink: string;
  techStack: string[];
  features: string[];
}

interface ProjectCardProps extends ProjectProps {
  onViewDetails: (project: ProjectProps) => void;
}

// ----------------- Project Card -----------------
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  images,
  liveLink,
  clientLink,
  serverLink,
  onViewDetails,
  techStack,
  features,
}) => (
  <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300 w-full sm:w-[320px] md:w-[380px] flex-shrink-0 flex flex-col mb-6 min-h-[600px] max-h-[600px]">
    {/* Image Scroll */}
    <CustomScroll height="250px" className="p-2">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${title} ${idx + 1}`}
          className="w-full h-[250px] object-cover rounded-xl mb-3"
        />
      ))}
    </CustomScroll>

    {/* Card Content */}
    <div className="p-4 flex flex-col justify-between flex-1">
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-red-500">
          {title}
        </h3>
        <ul className="list-disc list-inside mb-3 text-gray-200 space-y-1 text-xs sm:text-sm md:text-base line-clamp-4">
          {description.map((desc, idx) => (
            <li key={idx}>{desc}</li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-2 mt-3">
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex-1">
          <button className="btn w-full bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600 text-sm sm:text-base">
            Live Preview
          </button>
        </a>
        <a href={clientLink} target="_blank" rel="noopener noreferrer" className="flex-1">
          <button className="btn w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base">
            Client
          </button>
        </a>
        <a href={serverLink} target="_blank" rel="noopener noreferrer" className="flex-1">
          <button className="btn w-full bg-gray-600 hover:bg-gray-700 text-white text-sm sm:text-base">
            Server
          </button>
        </a>
        <button
          onClick={() =>
            onViewDetails({
              title,
              description,
              images,
              liveLink,
              clientLink,
              serverLink,
              techStack,
              features,
            })
          }
          className="btn w-full bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base"
        >
          View Details
        </button>
      </div>
    </div>
  </div>
);

// ----------------- Modal -----------------
const ProjectModal: React.FC<{
  project: ProjectProps | null;
  onClose: () => void;
}> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-2xl shadow-lg w-[90%] max-w-3xl p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white bg-red-600 hover:bg-red-700 rounded-full px-3 py-1"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-red-500 mb-4">
          {project.title}
        </h2>

        {/* Tech Stack */}
        <h3 className="text-lg font-semibold text-pink-400 mb-2">Tech Stack</h3>
        <ul className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, idx) => (
            <li
              key={idx}
              className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </li>
          ))}
        </ul>

        {/* Features */}
        <h3 className="text-lg font-semibold text-pink-400 mb-2">Features</h3>
        <ul className="list-disc list-inside text-gray-200 mb-4 space-y-1">
          {project.features.map((f, idx) => (
            <li key={idx}>{f}</li>
          ))}
        </ul>

        {/* Images */}
        <h3 className="text-lg font-semibold text-pink-400 mb-2">Screenshots</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {project.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${project.title} screenshot ${idx + 1}`}
              className="rounded-xl border border-gray-700"
            />
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1">
            <button className="btn w-full bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600">
              Live Preview
            </button>
          </a>
          <a href={project.clientLink} target="_blank" rel="noopener noreferrer" className="flex-1">
            <button className="btn w-full bg-blue-600 hover:bg-blue-700 text-white">
              Client
            </button>
          </a>
          <a href={project.serverLink} target="_blank" rel="noopener noreferrer" className="flex-1">
            <button className="btn w-full bg-gray-600 hover:bg-gray-700 text-white">
              Server
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

// ----------------- Main Component -----------------
const Project: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(
    null
  );

  const projects: ProjectProps[] = [
    {
      title: "RideX",
      description: [
        "JWT login with Rider, Driver & Admin roles.",
        "Driver approval system by Admin.",
        "Ride booking, fare estimate, accept/decline flow.",
      ],
      images: [img2, img1, img3, img12],
      liveLink: "https://ride-frontend-one.vercel.app/",
      clientLink: "https://github.com/sakibbiswas/Ride-booking-frontend",
      serverLink: "https://github.com/sakibbiswas/Ride-booking",
      techStack: ["React", "TypeScript", "TailwindCSS", "Node.js", "Express", "MongoDB", "JWT"],
      features: [
        "Role-based Authentication (Rider, Driver, Admin)[Gmail:admin@gmail.com and pass:admin123] Until Admin approved driver gmail driver can't loging",
        "Real-time Ride Updates",
        "Admin Dashboard for Monitoring",
        "Booking History & Ride Management",
      ],
    },
    {
      title: "Toy Shop",
      description: [
        "MERN E-commerce app to manage toys.",
        "CRUD operations for products.",
        "Admin dashboard for user & product management.",
      ],
      images: [img4, img5, img6, img11],
      liveLink: "https://toy-marketplace-client-d8225.web.app/",
      clientLink: "https://github.com/sakibbiswas/toy-market-client",
      serverLink: "https://github.com/sakibbiswas/toy-market-server",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Firebase", "TailwindCSS"],
      features: [
        "Add, Edit, Delete Products",
        "Secure Authentication",
        "User & Admin Dashboards",
        "Responsive UI",
      ],
    },
    {
      title: "Mozart Academy",
      description: [
        "Enroll in courses and pay online.",
        "Instructors create/manage courses.",
        "Admin manages all users & instructors.",
      ],
      images: [img7, img8, img9, img10],
      liveLink: "https://summer-camp-client-db0ed.web.app/",
      clientLink: "https://github.com/sakibbiswas/summer-camp-client",
      serverLink: "https://github.com/sakibbiswas/summer-camp-server",
      techStack: ["React", "Firebase", "TailwindCSS", "Node.js", "Express", "MongoDB"],
      features: [
        "Student Course Enrollment",
        "Instructor Course Management",
        "Admin Dashboard",
        "Stripe Payment Integration",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16 px-4"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-red-500 mb-3">
          Recent Projects
        </h2>
        <p className="text-gray-300 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto">
          Explore some of my recent projects built using modern technologies.
          Click on live preview or view details for more info.
        </p>
      </div>

      {/* Projects Layout */}
      <div className="flex flex-col md:flex-row md:overflow-x-auto gap-6 justify-center items-start">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            {...project}
            onViewDetails={(proj) => setSelectedProject(proj)}
          />
        ))}
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Project;
