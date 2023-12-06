import { AiFillHome } from "react-icons/ai";
import { MdOutlineApartment, MdVilla } from "react-icons/md";
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

  const [filter, setFilter] = useState("all");

  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % boxs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + boxs.length) % boxs.length);
  };

  const applyFilter = (newFilter) => {
    setFilter(newFilter.toLowerCase());
    setCurrentIndex(0);
  };

  const getFilteredBoxs = () =>
    filter === "all" ? boxs : boxs.filter((box) => box.type === filter);

  const filteredBoxs = getFilteredBoxs();

  const slidesToShow =
    filteredBoxs.length < 4
      ? filteredBoxs
      : Array.from({ length: 4 }).map(
          (_, i) => filteredBoxs[(currentIndex + i) % filteredBoxs.length],
        );

  const addActiveClass = (active) => {
    return filter === active.toLowerCase() ? "active" : "";
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
          <li
            onClick={() => applyFilter("House")}
            className={`${
              addActiveClass("House")
                ? " text-[#10B981] bg-[#D1FAE5]"
                : "text-[#888B97]"
            } flex items-center gap-2 py-3 px-6 rounded-[32px] border border-[#E0E3EB] cursor-pointer`}
          >
            <AiFillHome />
            House
          </li>
          <li
            onClick={() => applyFilter("Villa")}
            className={`${
              addActiveClass("Villa")
                ? " text-[#10B981] bg-[#D1FAE5]"
                : "text-[#888B97]"
            } flex items-center gap-2 py-3 px-6 rounded-[32px] border border-[#E0E3EB] cursor-pointer`}
          >
            <MdVilla />
            Villa
          </li>
          <li
            onClick={() => applyFilter("Apartment")}
            className={`${
              addActiveClass("Apartment")
                ? " text-[#10B981] bg-[#D1FAE5]"
                : "text-[#888B97]"
            } flex items-center gap-2 py-3 px-6 rounded-[32px] border border-[#E0E3EB] cursor-pointer`}
          >
            <MdOutlineApartment />
            Apartment
          </li>
        </ul>
        <div className="flex gap-1">
          <span
            onClick={prevSlide}
            className="bg-[#E0E3EB] text-white rounded-[32px] py-3 px-4 w-[60px] h-[52px] flex justify-center items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M17.5078 22.1645C17.7781 22.165 18.04 22.0703 18.2482 21.8967C18.3653 21.799 18.4622 21.679 18.5331 21.5436C18.6041 21.4081 18.6478 21.2599 18.6618 21.1075C18.6758 20.955 18.6597 20.8012 18.6145 20.655C18.5694 20.5088 18.496 20.373 18.3986 20.2554L13.2158 14.0159L18.2135 7.76475C18.3096 7.64567 18.3813 7.50867 18.4246 7.3616C18.4679 7.21453 18.4819 7.0603 18.4658 6.90777C18.4497 6.75524 18.4038 6.60742 18.3307 6.47281C18.2576 6.3382 18.1588 6.21945 18.0399 6.12339C17.9202 6.01741 17.7801 5.93748 17.6282 5.8886C17.4764 5.83972 17.3161 5.82295 17.1575 5.83935C16.9989 5.85574 16.8454 5.90495 16.7066 5.98388C16.5678 6.0628 16.4467 6.16975 16.3509 6.298L10.7632 13.2825C10.593 13.4908 10.5 13.7521 10.5 14.0217C10.5 14.2913 10.593 14.5526 10.7632 14.7609L16.5476 21.7454C16.6636 21.8863 16.811 21.9976 16.9779 22.0705C17.1447 22.1433 17.3263 22.1755 17.5078 22.1645Z"
                fill="#3C4563"
              />
            </svg>{" "}
          </span>
          <span
            onClick={nextSlide}
            className="bg-[#10B981] text-white rounded-[32px] py-3 px-4 w-[60px] h-[52px] flex justify-center items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="18"
              viewBox="0 0 9 18"
              fill="none"
            >
              <path
                d="M1.65891 0.835518C1.3886 0.834986 1.12665 0.929714 0.918511 1.10326C0.801367 1.20098 0.704535 1.321 0.633558 1.45644C0.562582 1.59188 0.518856 1.74007 0.504886 1.89254C0.490916 2.04501 0.506975 2.19875 0.552145 2.34496C0.597315 2.49118 0.670706 2.62699 0.768117 2.74462L5.95092 8.98411L0.953218 15.2353C0.857121 15.3543 0.785358 15.4913 0.742054 15.6384C0.69875 15.7855 0.684759 15.9397 0.700885 16.0922C0.717011 16.2448 0.762935 16.3926 0.83602 16.5272C0.909104 16.6618 1.00791 16.7806 1.12675 16.8766C1.24645 16.9826 1.38662 17.0625 1.53847 17.1114C1.69033 17.1603 1.85058 17.177 2.00918 17.1607C2.16778 17.1443 2.3213 17.0951 2.46011 17.0161C2.59891 16.9372 2.72 16.8303 2.81579 16.702L8.40349 9.71749C8.57365 9.5092 8.66667 9.24793 8.66667 8.97829C8.66667 8.70866 8.57365 8.44739 8.40349 8.2391L2.61912 1.25459C2.50306 1.11371 2.35564 1.00235 2.18881 0.929541C2.02197 0.85673 1.84043 0.824516 1.65891 0.835518Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex items-center gap-5 overflow-hidden mt-10 transition-transform ease-in-out duration-300">
        {slidesToShow.map((box, index) => (
          <RecommendationBox key={index} box={box} isHalf={index === 3} />
        ))}
      </div>
    </section>
  );
}
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
    <h1>{box.type}</h1>
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
