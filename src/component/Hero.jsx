import { FaChevronRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import CornerOne from "../assets/CornerOne";
import CornerTwo from "../assets/CornerTwo";
import CornerThree from "../assets/CornerThree";

export default function Hero() {
  const img = [
    "traveloka_logo2.png",
    "traveloka_logo5.png",
    "traveloka_logo3.png",
    "traveloka_logo4.png",
  ];

  return (
    <>
      <div
        className={
          "absolute top-0 right-0 w-1/2 -z-10 h-[720px] bg-[url('../public/images/image.png')] bg-cover bg-no-repeat rounded-es-[80px]"
        }
      >
        <CornerOne />
        <CornerTwo />
        <CornerThree />
      </div>
      <div className={"w-full h-[720px] absolute"}>
        <div
          className={
            "absolute top-[430px] overflow-hidden right-0 flex gap-4 z-20"
          }
        >
          <div
            className={"bg-white w-[328px] flex items-center rounded-[32px]"}
          >
            <img
              src={"/images/Ellipse1.svg"}
              className={"-ml-2.5"}
              alt={"Ellipse1"}
              width={120}
              height={100}
            />
            <img
              src={"/images/Ellipse2.svg"}
              className={"-ml-[93px]"}
              alt={"Ellipse1"}
              width={120}
              height={100}
            />
            <img
              src={"/images/Ellipse3.svg"}
              className={"-ml-[91px]"}
              alt={"Ellipse1"}
              width={120}
              height={100}
            />

            <div className={"-ml-4 pr-6"}>
              <h1 className={"text-[#1B1C57] font-semibold"}>1K+ People</h1>
              <p
                className={
                  "whitespace-nowrap text-[12px] font-normal leading-5 text-[#68799F]"
                }
              >
                Successfully Getting Home
              </p>
            </div>
          </div>
          <div
            className={
              "bg-white w-[201px] flex gap-4 items-center rounded-[32px] p-6"
            }
          >
            <img
              src={"/images/Rectangle4.png"}
              className={"object-cover"}
              alt={"Ellipse1"}
              width={120}
              height={100}
            />

            <div className={""}>
              <h1 className={"whitespace-nowrap text-[#1B1C57] font-semibold"}>
                56 Houses
              </h1>
              <p
                className={
                  "whitespace-nowrap text-[12px] font-normal leading-5 text-[#68799F]"
                }
              >
                Sold Monthly
              </p>
            </div>
          </div>
          <div
            className={"bg-white w-[108px] flex items-center rounded-l-[32px]"}
          >
            <img
              src={"/images/Ellipse5.png"}
              className={""}
              alt={"Ellipse1"}
              width={120}
              height={100}
            />

            <div className={"-ml-3"}>
              <h1 className={"text-[#1B1C57] font-semibold"}>4K+</h1>
              <p className={"whitespace-nowrap"}>
                People Looking for New Homes
              </p>
            </div>
          </div>
        </div>
      </div>
      <section
        className={"w-[1440px] mx-auto h-[720px] p-10 pb-0 overflow-hidden"}
      >
        <div
          className={
            "text-[#1B1C57] w-[490px] text-[40px] capitalize font-bold"
          }
        >
          <h1>find the place to </h1>
          <h1>
            <span>live </span>
            <span
              style={{
                fontFamily: "'Roboto', sans-serif",
                WebkitTextStroke: "1px #1B1C57",
                color: "white",
              }}
              className={"text-white font-bold"}
            >
              your dreams
            </span>
          </h1>
          <h1>easily here</h1>
        </div>
        <p
          className={
            "w-[490px] text-[#626687] text-base leading-7 font-normal opacity-75"
          }
        >
          Everything you need about finding your place to live will be here,
          where it will be easier for you
        </p>
        <div
          className={
            "w-[490px] border rounded-[32px] py-1 pr-1 pl-6 my-8 flex items-center justify-between"
          }
        >
          <FaLocationDot className={"w-6 h-6 text-[#F59E0B]"} />

          <input
            className={"bg-[#fff] w-full px-4 py-2 outline-0"}
            type={"search"}
            placeholder={"Search for the location you want!\n"}
          />
          <button
            className={
              "bg-[#10B981] flex items-center gap-2 rounded-[32px] px-6 py-3 text-white"
            }
          >
            <span>Search</span>
            <FaChevronRight />
          </button>
        </div>

        <h1
          className={
            "text-[#626687] text-base leading-7 font-normal opacity-75"
          }
        >
          Our Partnership
        </h1>
        <div className={"flex gap-8"}>
          {img.map((item, i) => (
            <img
              key={i}
              src={`/images/${item}`}
              alt={"our-partner"}
              width={82}
              height={64}
            />
          ))}
        </div>
      </section>
    </>
  );
}
