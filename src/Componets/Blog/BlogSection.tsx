import React, { useState } from "react";
import Modal from "./Modal";

type BlogPost = {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React + TypeScript",
    description:
      "Building modern, high-performance web applications requires a solid foundation in both structure and style. By setting up a React project with TypeScript, you gain the benefits of a strongly-typed language that helps catch errors early, enforces better coding practices, and makes your codebase more maintainable as your application scales. Integrating TailwindCSS into this setup allows you to rapidly design and implement visually appealing, fully responsive user interfaces without writing bulky custom CSS. Tailwind’s utility-first approach provides granular control over styling, encourages consistency across components, and greatly accelerates development workflows. In this guide, you will learn not only how to configure a React + TypeScript environment with TailwindCSS but also how to structure your project for scalability, manage reusable components effectively, and adopt best practices that ensure your front-end remains maintainable and adaptable as your application grows. Whether you are building a small prototype or a large-scale enterprise application, mastering this setup will empower you to develop modern, robust, and visually polished web applications efficiently.",
    date: "August 25, 2025",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Mastering TailwindCSS for Modern UI",
    description:
      "TailwindCSS has revolutionized the way developers design and build user interfaces by providing a utility-first approach to styling. Unlike traditional CSS frameworks, TailwindCSS allows you to apply precise styling directly within your markup using small, reusable utility classes. This approach dramatically speeds up the development process, reduces the need to write custom CSS, and ensures consistent design across your application. With TailwindCSS, you can rapidly create responsive, modern, and visually appealing layouts without sacrificing maintainability or scalability. Its extensive configuration options, theming capabilities, and built-in responsiveness make it an ideal choice for both small projects and large-scale applications. By mastering TailwindCSS, developers gain the ability to iterate quickly, experiment freely with design ideas, and build polished, professional-looking user interfaces efficiently. Whether you’re a beginner looking to create attractive web pages or an experienced developer aiming to streamline your workflow, TailwindCSS provides the tools and flexibility to bring your UI vision to life with minimal effort",
    date: "August 20, 2025",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 3,
    title: "Why TypeScript is a Game Changer",
    description:
      "TypeScript has quickly become an indispensable tool for modern web development, offering a powerful layer of type safety on top of JavaScript. By introducing static types, TypeScript helps developers catch errors at compile time rather than at runtime, reducing bugs and improving code reliability. This is particularly valuable in large-scale applications where managing complex data flows and interdependent components can become challenging. TypeScript’s strong typing enforces clearer contracts between functions, components, and modules, making the codebase easier to read, understand, and maintain over time. Moreover, it provides advanced features such as interfaces, enums, generics, and type inference, enabling developers to write more expressive and self-documenting code. Integrating TypeScript with frameworks like React not only enhances developer productivity but also ensures that your application scales gracefully as it grows in complexity. By understanding and adopting TypeScript, you gain the ability to build robust, maintainable, and future-proof applications, reducing technical debt and creating a foundation for long-term success in professional web development.",
    date: "August 15, 2025",
    image:
      "https://innwebtechs.com/wp-content/uploads/2024/08/AI-2.jpg", 
  },
];

const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-14 text-gray-800 dark:text-white">
          📚 Latest Blog Posts
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {post.date}
                </span>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-3 line-clamp-3">
                  {post.description}
                </p>
                <button
                  className="mt-5 px-5 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-xl font-medium hover:opacity-90 transition"
                  onClick={() => setSelectedPost(post)}
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      <Modal
        isOpen={selectedPost !== null}
        onClose={() => setSelectedPost(null)}
      >
        {selectedPost && (
          <>
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{selectedPost.title}</h3>
            <span className="text-sm text-gray-500 mb-4 block">
              {selectedPost.date}
            </span>
            <p className="text-gray-700 dark:text-gray-300">
              {selectedPost.description}
            </p>
          </>
        )}
      </Modal>
    </section>
  );
};

export default BlogSection;
