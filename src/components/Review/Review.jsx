import React from "react";
import Slider from "react-slick";
import { james, semiColon, stars } from "../../assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
  const testimonials = [
    {
      id: 1,
      name: "James Toriff",
      role: "Developer",
      image: james,
      quote: "Cribonix has been a game-changer for me! I can easily connect with brands that match my style, and the transparency with my metrics has built trust with every collaboration. It is so easy to use.",
      rating: 5
    },
    {
      id: 2,
      name: "Jane Doe",
      role: "Designer",
      image: james,
      quote: "Using Cribonix has made finding and collaborating with brands so easy. The instant access to brand opportunities and the ability to showcase my accurate performance data have boosted my partnerships significantly.",
      rating: 4 
    },
    // {
    //   id: 3,
    //   name: "John Smith",
    //   role: "Manager",
    //   image: james,
    //   quote: "When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    //   rating: 5
    // }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="flex flex-col items-center md:w-screen md:ml-[-7rem] w-full bg-[#F8F9FB] testimonial-bg md:py-28 py-12">
      <div className="text-center">
        <button className="px-8 py-4 bg-[#00ACFF1A] text-[#00ACFF] rounded-full font-bold mb-6">
          Testimonial
        </button>
        <h1 className="text-xl md:text-4xl font-bold">Trusted by millions of creators.</h1>
      </div>
      <div className="md:px-60 w-full">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col items-center">
              <div className="my-8">
                <img className="w-8 mx-auto" src={semiColon} alt="" />
                <p className="italic text-base md:text-xl text-center">{testimonial.quote}</p>
              </div>
              <div className="flex flex-col items-center md:gap-6 gap-1">
                <img className="rounded-full w-20" src={testimonial.image} alt={testimonial.name} />
                <p className="text-lg md:text-2xl font-bold">{testimonial.name}</p>
                <p className="text-sm md:text-base font-semibold">{testimonial.role}</p>
                <div className="flex gap-2">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <img className="w-5" key={index} src={stars} alt={`star-${index}`} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
