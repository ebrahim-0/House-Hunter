import { AiFillHome } from "react-icons/ai";
import { MdOutlineApartment, MdVilla } from "react-icons/md";
import { SiFireship } from "react-icons/si";
import { IoWallet } from "react-icons/io5";
import { useState } from "react";
import { SlideLogic } from "./SlideLogic";
import NextSvg from "../assets/NextSvg";
import PrevSvg from "../assets/PrevSvg";

const boxes = [
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
    type: "house",
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
    type: "villa",
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
    type: "apartment",
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
    type: "house",
  },
];

const Recommendation = ({
  items,
  currentIndex,
  nextSlide,
  prevSlide,
  setCurrentIndex,
}) => {
  const filters = [
    {
      icon: <AiFillHome />,
      text: "House",
    },
    {
      icon: <MdVilla />,
      text: "Villa",
    },
    {
      icon: <MdOutlineApartment />,
      text: "Apartment",
    },
  ];

  const [filter, setFilter] = useState("all");

  const applyFilter = (newFilter) => {
    setFilter(newFilter.toLowerCase());
    setCurrentIndex(0);
  };
  const filteredBoxes =
    filter === "all" ? items : items.filter((box) => box.type === filter);

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
          {filters.map((filters, index) => (
            <li
              key={index}
              onClick={() => applyFilter(filters.text)}
              className={`${
                filter === filters.text.toLowerCase()
                  ? " text-[#10B981] bg-[#D1FAE5]"
                  : "text-[#888B97]"
              } flex items-center gap-2 py-3 px-6 rounded-[32px] border border-[#E0E3EB] cursor-pointer`}
            >
              {filters.icon}
              {filters.text}
            </li>
          ))}
        </ul>
        <div className="flex gap-1">
          <span
            onClick={prevSlide}
            className="bg-[#E0E3EB] text-white rounded-[32px] py-3 px-4 w-[60px] h-[52px] flex justify-center items-center cursor-pointer"
          >
            <PrevSvg />
          </span>
          <span
            onClick={nextSlide}
            className="bg-[#10B981] text-white rounded-[32px] py-3 px-4 w-[60px] h-[52px] flex justify-center items-center cursor-pointer"
          >
            <NextSvg />
          </span>
        </div>
      </div>

      <div className="flex items-center gap-5 overflow-hidden mt-10 transition-transform ease-in-out duration-300">
        {filteredBoxes.slice(0, 4).map((_, index) => (
          <RecommendationBox
            key={index}
            box={filteredBoxes[(currentIndex + index) % filteredBoxes.length]}
            isHalf={index === 3}
          />
        ))}
      </div>
    </section>
  );
};
const RecommendationBox = ({ box, isHalf }) => (
  <div
    style={{
      width: isHalf ? "220px" : "360px",
    }}
  >
    <img
      key={box.img}
      src={box.img}
      className={`${
        isHalf ? "rounded-l-3xl" : "rounded-3xl"
      } w-full h-[382px] object-cover opacity-0  scale-90 duration-300 ease-in-out transition-all`}
      alt=""
      loading={"lazy"}
      onLoad={(e) => {
        e.target.classList.add("opacity-100", "scale-100");
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
    <h1>{box.type}</h1>
    <h1 className="text-[#3C4563] text-xl font-medium my-6">{box.price}</h1>
    <div className="flex items-center gap-4">
      <img
        src={box.iconImg}
        className="w-10 rounded-[40px]"
        alt="Ellipse6"
        loading={"lazy"}
      />
      <div className="">
        <h1 className="text-[#0E1735] font-medium">{box.name}</h1>
        <p className="text-[#888B97] whitespace-nowrap">{box.location}</p>
      </div>
    </div>
  </div>
);

export default SlideLogic(boxes, Recommendation);
