import React, { useState, useEffect } from "react";
import { article1, article2, article3, user1, user2, user3 } from "../../assets";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const articles = [
    {
      img: article1,
      title: "Transparency in Influencer Marketing: Why Accurate Metrics Matter !!",
      content:
        "Influencer marketing has taken the digital world by storm, but amidst the glamour, there's a crucial element often overlooked: transparency in metrics.",
      userImg: user1,
      userName: "Andrew Miller",
      userRole: "CEO",
      date: "25 Apr",
    },
    {
      img: article2,
      title: "Organize your digital assets with a new methodology here.",
      content:
        "Keeping your eye while performing a deep dive on the start-up mentality to derive convergence collaboratively onvergence.",
      userImg: user2,
      userName: "David Munsan",
      userRole: "UX",
      date: "25 Apr",
    },
    {
      img: article3,
      title: "Organize your digital assets with a new methodology here.",
      content:
        "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C.",
      userImg: user3,
      userName: "Andrew Meller",
      userRole: "UI",
      date: "25 Apr",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === articles.length - 1 ? 0 : prevSlide + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [articles.length]);

  return (
    <div className="md:hidden"> {/* Hide carousel on screens larger than md */}
      <div className="flex overflow-hidden">
        {articles.map((article, index) => (
          <div key={index} className={`w-screen transition-transform duration-500 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0 -translate-x-full"}`}>
            <div className="bg-white rounded-3xl p-6">
              <img className="mb-4" src={article.img} alt="" />
              <div className="flex flex-col gap-4">
                <h1 className="font-bold text-xl">{article.title}</h1>
                <p className="text-[#5F6D7E] font-semibold text-xl">{article.content}</p>
              </div>
              <div className="flex justify-between mt-8 items-center">
                <div className="flex items-center">
                  <img className="w-10 h-10 mr-2" src={article.userImg} alt="" />
                  <div className="flex flex-col">
                    <p>{article.userName}</p>
                    <p className="text-[#5F6D7E]">{article.userRole}</p>
                  </div>
                </div>
                <p className="text-[#5F6D7E]">{article.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
