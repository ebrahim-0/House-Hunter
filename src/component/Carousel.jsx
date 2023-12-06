import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const Carousel = () => {
  const reviews = [
    {
      image: "/images/review.jpg",
      title: "My house sold out fast!",
      content:
        "I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!",

      iconImg: "/images/tips2.jpg",
      author: "Courtney Henry",
      location: "CEO Andarafish",
      rating: 4.3,
    },
    {
      image: "/images/review2.jpg",
      title: "Best! I got the house I wanted through Hounter",
      content:
        "Through this website I can get a house with the type and specifications I want very easily, without a complicated process  to be able to find information on the house we want.",
      iconImg: "/images/Ellipse6.svg",
      author: "Dianne Russell",
      location: "Manchester, Kentucky",
      rating: 4.6,
    },
    {
      image: "/images/review3.jpg",
      title: "Through the Hounter, I can get a house for myself",
      content:
        "By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!",
      iconImg: "/images/review4.jpg",
      author: "Esther Howard",
      location: "Head of Marketing",
      rating: 4.6,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <>
      <div className="relative flex justify-evenly gap-14 overflow-hidden">
        {/* Left Image (Previous) */}
        <div className="relative w-[360px] pb-36 mx-auto">
          <img
            src={
              reviews[(currentSlide - 1 + reviews.length) % reviews.length]
                .image
            }
            alt=""
            className="w-full h-[400px] rounded-lg object-cover opacity-70"
          />
          <div className="absolute bottom-4 -left-[100%] bg-white rounded-2xl w-[612px] p-8">
            <h1 className="text-[#1B1C57] font-semibold text-xl mb-4">
              {
                reviews[(currentSlide - 1 + reviews.length) % reviews.length]
                  .title
              }
            </h1>
            <p className="text-[#626687] leading-6 font-normal text-sm opacity-75 mb-6">
              {
                reviews[(currentSlide - 1 + reviews.length) % reviews.length]
                  .content
              }
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={
                    reviews[
                      (currentSlide - 1 + reviews.length) % reviews.length
                    ].iconImg
                  }
                  className={"w-10 rounded-[40px]"}
                  alt="Ellipse6"
                />
                <div>
                  <h1 className="text-[#0E1735] font-medium">
                    {
                      reviews[
                        (currentSlide - 1 + reviews.length) % reviews.length
                      ].author
                    }
                  </h1>
                  <p className="text-[#888B97] whitespace-nowrap">
                    {
                      reviews[
                        (currentSlide - 1 + reviews.length) % reviews.length
                      ].location
                    }
                  </p>
                </div>
              </div>
              <span className="flex items-center gap-4">
                <FaStar className="text-[#F59E0B]" />
                {
                  reviews[(currentSlide - 1 + reviews.length) % reviews.length]
                    .rating
                }
              </span>
            </div>
          </div>
        </div>

        {/* Center Image (Current) */}
        <div className="relative w-[740px] pb-36 mx-auto">
          <img
            src={reviews[currentSlide].image}
            alt=""
            className="w-full h-[400px] rounded-lg object-cover opacity-70"
          />
          <div className="absolute z-40 bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl w-[612px] p-8">
            <h1 className="text-[#1B1C57] font-semibold text-xl mb-4">
              {reviews[currentSlide].title}
            </h1>
            <p className="text-[#626687] leading-6 font-normal text-sm opacity-75 mb-6">
              {reviews[currentSlide].content}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={reviews[currentSlide].iconImg}
                  className={"w-10 rounded-[40px]"}
                  alt="Ellipse6"
                />
                <div>
                  <h1 className="text-[#0E1735] font-medium">
                    {reviews[currentSlide].author}
                  </h1>
                  <p className="text-[#888B97] whitespace-nowrap">
                    {reviews[currentSlide].location}
                  </p>
                </div>
              </div>
              <span className="flex items-center gap-4">
                <FaStar className="text-[#F59E0B]" />
                {reviews[currentSlide].rating}
              </span>
            </div>
          </div>
        </div>

        {/* Right Image (Next) */}
        <div className="relative w-[360px] pb-36 mx-auto">
          <img
            src={reviews[(currentSlide + 1) % reviews.length].image}
            alt=""
            className="w-full h-[400px] rounded-lg object-cover opacity-70"
          />
          <div className="absolute bottom-4 -right-[100%] bg-white rounded-2xl w-[612px] p-8">
            <h1 className="text-[#1B1C57] font-semibold text-xl mb-4">
              {reviews[(currentSlide + 1) % reviews.length].title}
            </h1>
            <p className="text-[#626687] leading-6 font-normal text-sm opacity-75 mb-6">
              {reviews[(currentSlide + 1) % reviews.length].content}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={
                    reviews[
                      (currentSlide + 1 + reviews.length) % reviews.length
                    ].iconImg
                  }
                  className={"w-10 rounded-[40px]"}
                  alt="Ellipse6"
                />
                <div>
                  <h1 className="text-[#0E1735] font-medium">
                    {reviews[(currentSlide + 1) % reviews.length].author}
                  </h1>
                  <p className="text-[#888B97] whitespace-nowrap">
                    {reviews[(currentSlide + 1) % reviews.length].location}
                  </p>
                </div>
              </div>
              <span className="flex items-center gap-4">
                <FaStar className="text-[#F59E0B]" />
                {reviews[(currentSlide + 1) % reviews.length].rating}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
          <button
            onClick={prevSlide}
            className="text-black text-3xl cursor-pointer focus:outline-none"
          >
            <FaChevronLeft />
          </button>
        </div>
        <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
          <button
            onClick={nextSlide}
            className="text-black text-3xl cursor-pointer focus:outline-none"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className={"flex gap-4 justify-center"}>
        {reviews.map((bullet, i) => (
          <span
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === i ? "bg-[#1B1C57]" : "bg-[#e0e3eb]"
            }`}
          ></span>
        ))}
      </div>
    </>
  );
};

export default Carousel;
