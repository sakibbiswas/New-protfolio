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
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1280, // large screens
        settings: { slidesToShow: 2, centerMode: false }
      },
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 2, centerMode: false }
      },
      {
        breakpoint: 768, // mobile
        settings: { slidesToShow: 1, centerMode: false }
      },
      {
        breakpoint: 480, // smaller mobile
        settings: { slidesToShow: 1, centerMode: false }
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
            <div key={idx} className="px-2 sm:px-3">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 min-h-[300px] sm:min-h-[320px]">
                <div className="mb-6">
                  <div className="text-pink-500 text-2xl sm:text-3xl mb-3 sm:mb-4">
                    <FaQuoteLeft />
                  </div>
                  <p className="text-gray-200 text-sm sm:text-base">{client.review}</p>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
                  <img
                    src={client.img}
                    alt={client.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-pink-500"
                  />
                  <div className="text-left">
                    <h3 className="text-sm sm:text-lg font-semibold text-white">{client.name}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">{client.country}</p>
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
