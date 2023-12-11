import { MdCall } from "react-icons/md";
import { useEffect, useState } from "react";
import RedSvg from "../assets/RedSvg";
import BedroomsSvg from "../assets/BedroomsSvg";
import BathroomsSvg from "../assets/BathroomsSvg";
import CarportSvg from "../assets/CarportSvg";
import FloorsSvg from "../assets/FloorsSvg";

export default function Sell() {
  const [mainImage, setMainImage] = useState("/images/sell1.png");
  const [thumbnails, setThumbnails] = useState([
    "/images/sell2.jpg",
    "/images/sell3.jpg",
    "/images/sell4.jpg",
  ]);

  const swapImage = (index) => {
    const previousMainImage = mainImage;
    setMainImage(thumbnails[index]);
    let newThumbnails = [...thumbnails];
    if (thumbnails[index] !== previousMainImage) {
      newThumbnails.splice(index, 1);
      newThumbnails.push(previousMainImage);
    }
    setThumbnails(newThumbnails);
  };

  const details = [
    {
      icon: <BedroomsSvg />,
      text: "4 Bedrooms",
    },
    {
      icon: <BathroomsSvg />,
      text: "2 Bathrooms",
    },
    {
      icon: <CarportSvg />,
      text: "1 Carport",
    },
    {
      icon: <FloorsSvg />,
      text: "2 Floors",
    },
  ];

  const thumbnailsJSX = document.querySelectorAll(".thumbnails");

  useEffect(() => {
    thumbnailsJSX.forEach((thumbnail) => {
      thumbnail.classList.remove("opacity-0");
      thumbnail.classList.remove("scale-50");
      thumbnail.classList.add("opacity-100", "scale-100");
    });
  }, [thumbnails]);

  return (
    <section className={"relative"}>
      <RedSvg />
      <div className={"w-10/12 mx-auto p-10 py-44"}>
        <h1 className={"flex items-center gap-2 text-[#F59E0B]"}>
          <hr className={"w-8 h-[1px] border-0 bg-[#F59E0B]"} />
          Ready to Sell!
        </h1>
        <div className={"flex items-center justify-between mt-3"}>
          <div>
            <h1
              className={
                "text-[#1B1C57] text-[32px] capitalize font-semibold mb-4"
              }
            >
              Let’s tour and see our house!
            </h1>
            <p className={"text-[#626687] mb-4 w-[413px] leading-7 opacity-75"}>
              Houses recommended by our partners that have been curated to
              become the home of your dreams!
            </p>
            <h1 className={"text-[#1B1C57] font-semibold pb-4 opacity-75"}>
              House Detail
            </h1>
            <div
              className={
                "grid grid-cols-2 gap-3 w-[440px] border-b-2 border-[#F0F3FD] pb-10"
              }
            >
              {details.map((detail, i) => (
                <div
                  key={i}
                  className={"flex items-center gap-4 text-[#3C4563] w-fit"}
                >
                  {detail.icon}
                  {detail.text}
                </div>
              ))}
            </div>

            <div className={"flex items-center justify-between mt-10"}>
              <div className={"flex items-center gap-4"}>
                <img
                  src={"/images/Ellipse6.svg"}
                  alt={"Ellipse6"}
                  loading={"lazy"}
                  width={40}
                  height={40}
                />

                <div className={""}>
                  <h1 className={"text-[#0E1735] font-medium"}>
                    Dianne Russell
                  </h1>
                  <p className={"text-[#888B97] whitespace-nowrap"}>
                    Manchester, Kentucky
                  </p>
                </div>
              </div>

              <button
                className={
                  "flex items-center gap-4 bg-[#10B981] text-white py-3 px-4 rounded-[32px]"
                }
              >
                <MdCall className={"text-2xl"} />
                Contact Now
              </button>
            </div>
          </div>

          <div className="relative transition duration-500 ease-in-out">
            <img
              className="absolute z-40 top-1/2 right-1/2 translate-x-1/2 object-cover"
              src="/images/bi_play-circle-fill.svg"
              alt=""
              loading={"lazy"}
            />
            <img
              className="transition-all duration-500 ease-in-out opacity-0 scale-50 rounded w-[488px] h-[416px] object-cover"
              width={488}
              height={416}
              src={mainImage}
              key={Math.random()}
              alt="Main Display"
              loading={"lazy"}
              onLoad={(e) => {
                e.currentTarget.classList.remove("opacity-0");
                e.currentTarget.classList.remove("scale-50");
                e.currentTarget.classList.add("opacity-100", "scale-100");
              }}
            />

            {thumbnails.map((src, i) => (
              <img
                key={src}
                className={`thumbnails transition-all duration-500 ease-in-out scale-50 opacity-0 rounded absolute object-cover ${
                  i === 0 ? "right-[232px] -bottom-11 w-[296px] h-[180px]" : ""
                } ${
                  i === 1 ? "right-[126px] -bottom-11 w-[96px] h-[80px]" : ""
                } ${i === 2 ? "right-5 -bottom-11 w-[96px] h-[80px]" : ""}`}
                src={src}
                alt={`Thumbnail ${i}`}
                loading={"lazy"}
                onClick={() => swapImage(i)}
                onLoad={(e) => {
                  e.currentTarget.classList.remove("opacity-0");
                  e.currentTarget.classList.remove("scale-50");
                  e.currentTarget.classList.add("opacity-100", "scale-100");
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
