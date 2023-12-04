import { AiFillHome } from "react-icons/ai";
import { MdOutlineApartment, MdVilla } from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SiFireship } from "react-icons/si";
import { IoWallet } from "react-icons/io5";
import { useState } from "react";

export default function Recommendation() {
  const boxs = [
    {
      img: "/images/Featured-House1.jpg",
      title: "Roselands House",
      price: "$ 35.000.000",
      name: "Dianne Russell",
      location: "Manchester, Kentucky",
      head: "Popular",
      iconImg: "/images/Ellipse6.svg",
      icon: <SiFireship />,
      bg: "bg-[#FEE2E2]",
      color: "text-[#EF4444]",
    },
    {
      img: "/images/Featured-House2.jpg",
      title: "Woodlandside",
      price: "$ 20.000.000",
      name: "Robert Fox",
      location: "Dr. San Jose, South Dakota",
      head: "New House",
      iconImg: "/images/recomendation.jpg",
      icon: <AiFillHome />,
      bg: "bg-[#DBEAFE]",
      color: "text-[#1D4ED8]",
    },
    {
      img: "/images/Featured-House3.jpg",
      title: "The Old Lighthouse",
      price: "$ 44.000.000",
      name: "Ronald Richards",
      location: "Santa Ana, Illinois",
      head: "Best Deals",
      icon: <IoWallet />,
      iconImg: "/images/subscribe2.jpg",
      bg: "bg-[#D1FAE5]",
      color: "text-[#047857]",
    },
    {
      img: "/images/Featured-House4.jpg",
      title: "Cosmo's House",
      price: "$ 22.000.000",
      name: "Jenny Wilson",
      location: "Preston Rd. Inglewood, Maine 98380",
      head: "Popular",
      icon: <SiFireship />,
      iconImg: "/images/recomendation2.jpg",
      bg: "bg-[#FEE2E2]",
      color: "text-[#EF4444]",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % boxs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + boxs.length) % boxs.length);
  };

  return (
    <section className="w-11/12 ml-auto overflow-hidden pl-10">
      <h1 className="flex items-center gap-2 text-[#F59E0B]">
        <hr className="w-8 h-[1px] border-0 bg-[#F59E0B]" />
        Our Recommendation
      </h1>

      <div className="flex items-center justify-between mr-36 mt-3">
        <h1 className="text-3xl text-[#1B1C57] font-semibold">
          Featured House
        </h1>

        <ul className="flex items-center gap-8">
          <li className="flex items-center gap-2 py-3 px-6 text-[#10B981] rounded-[32px] bg-[#D1FAE5]">
            <AiFillHome />
            House
          </li>
          <li className="flex items-center gap-2 py-3 px-6 text-[#888B97] rounded-[32px] border border-[#E0E3EB]">
            <MdVilla />
            Villa
          </li>
          <li className="flex items-center gap-2 py-3 px-6 text-[#888B97] rounded-[32px] border border-[#E0E3EB]">
            <MdOutlineApartment />
            Apartment
          </li>
        </ul>
        <div className="flex gap-1">
          <span
            onClick={prevSlide}
            className="bg-[#E0E3EB] text-black rounded-[32px] py-3 px-4 cursor-pointer"
          >
            <FaChevronLeft />
          </span>
          <span
            onClick={nextSlide}
            className="bg-[#10B981] text-white rounded-[32px] py-3 px-4 cursor-pointer"
          >
            <FaChevronRight />
          </span>
        </div>
      </div>

      <div className="flex items-center gap-5 overflow-hidden justify-between mt-10 transition-transform ease-in-out duration-300">
        {[0, 1, 2, 3].map((offset) => (
          <RecommendationBox
            key={offset}
            box={boxs[(currentIndex + offset) % boxs.length]}
            isHalf={offset === 3}
          />
        ))}
      </div>
    </section>
  );
}
const RecommendationBox = ({ box, isHalf }) => (
  <div
    style={{
      width: isHalf ? "calc(33.33% - 10px)" : "calc(50% - 10px)",
      marginRight: isHalf ? "20px" : "0",
    }}
  >
    <img
      key={box.img}
      src={box.img}
      className={`${
        isHalf ? "rounded-l-3xl" : "rounded-3xl"
      } w-full h-[382px] object-cover image-transition`}
      alt=""
      onLoad={(e) => {
        e.target.classList.add("image-loaded");
      }}
    />
    <p
      className={`${box.bg} ${box.color} w-fit text-red-900 flex items-center gap-2.5 px-4 py-2 -translate-y-14 translate-x-4 rounded-[32px]`}
    >
      {box.icon}
      {box.head}
    </p>
    <h1 className="text-[#0E1735] text-2xl font-medium mt-6 whitespace-nowrap">
      {box.title}
    </h1>
    <h1 className="text-[#3C4563] text-xl font-medium my-6">{box.price}</h1>
    <div className="flex items-center gap-4">
      <img src={box.iconImg} className="w-10 rounded-[40px]" alt="Ellipse6" />
      <div className="">
        <h1 className="text-[#0E1735] font-medium">{box.name}</h1>
        <p className="text-[#888B97] whitespace-nowrap">{box.location}</p>
      </div>
    </div>
  </div>
);
