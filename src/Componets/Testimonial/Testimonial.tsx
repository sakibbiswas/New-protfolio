
import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";

import man1 from "../../assets/young-bearded-man-with-striped-shirt_273609-5677.avif";
import man2 from "../../assets/images.jfif";
import man3 from "../../assets/images (1).jfif";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Client {
  img: string;
  name: string;
  country: string;
  review: string;
}

const clients: Client[] = [
  {
    img: man1,
    name: "Revga Wright",
    country: "United States",
    review:
      "Working with Sazzadur Rahman Sakib was an absolute pleasure. Professional, timely, and high-quality work."
  },
  {
    img: man2,
    name: "Chudyi Lozue",
    country: "United States",
    review:
      "Sakib’s communication and attention to detail are exceptional. Highly recommended for any project."
  },
  {
    img: man3,
    name: "Anna Smith",
    country: "United Kingdom",
    review:
      "Outstanding experience! Sakib delivered beyond expectations and maintained great collaboration throughout."
  }
];

const Testimonial: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2, // desktop view
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section id="testimonial" className="bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500 mb-4">
          Testimonials
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-12">
          Hear what my clients have to say about my work and professionalism
        </p>

        <Slider {...settings} className="relative">
          {clients.map((client, idx) => (
            <div key={idx} className="px-3">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[320px]">
                <div className="mb-6">
                  <div className="text-pink-500 text-3xl mb-4">
                    <FaQuoteLeft />
                  </div>
                  <p className="text-gray-200 text-sm md:text-base">{client.review}</p>
                </div>

                <div className="flex items-center gap-4 mt-6">
                  <img
                    src={client.img}
                    alt={client.name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-pink-500"
                  />
                  <div className="text-left">
                    <h3 className="text-lg md:text-xl font-semibold text-white">{client.name}</h3>
                    <p className="text-gray-400 text-sm md:text-base">{client.country}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;





