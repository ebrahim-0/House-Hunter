import { FaChevronRight } from "react-icons/fa";

export default function Hero() {
  const img = [
    "traveloka_logo2.png",
    "traveloka_logo5.png",
    "traveloka_logo3.png",
    "traveloka_logo4.png",
  ];

  return (
    <>
      <div className={"img"}>
        <svg
          className={"absolute top-[144px] left-[84px]"}
          xmlns="http://www.w3.org/2000/svg"
          width="71"
          height="96"
          viewBox="0 0 71 96"
          fill="none"
        >
          <path
            d="M2 94V8.5C2 5.18629 4.68629 2.5 8 2.5H68.5"
            stroke="#EF4444"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <svg
          className={"absolute top-[209px] right-[127px]"}
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="102"
          viewBox="0 0 44 102"
          fill="none"
        >
          <path
            d="M2 2.5H37.5C39.7091 2.5 41.5 4.29086 41.5 6.5V99.5"
            stroke="#F59E0B"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <svg
          className={"absolute top-[409px] right-[114.5px]"}
          xmlns="http://www.w3.org/2000/svg"
          width="47"
          height="79"
          viewBox="0 0 47 79"
          fill="none"
        >
          <path
            d="M2 2H38.5C41.8137 2 44.5 4.68629 44.5 8V77"
            stroke="#3B82F6"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
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
            />
            <img
              src={"/images/Ellipse2.svg"}
              className={"-ml-[90px]"}
              alt={"Ellipse1"}
            />
            <img
              src={"/images/Ellipse3.svg"}
              className={"-ml-[90px]"}
              alt={"Ellipse1"}
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
            <img src={"/images/Ellipse5.png"} className={""} alt={"Ellipse1"} />

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
            <span className={"text-white font-bold out"}>
              your dreams{"  "}
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 1C14.3869 1 16.6761 1.99337 18.364 3.76159C20.0518 5.5298 21 7.92801 21 10.4286C21 14.934 18.0975 19.081 12.402 22.8776C12.2818 22.9575 12.1424 23 12 23C11.8576 23 11.7182 22.9575 11.598 22.8776C5.9025 19.081 3 14.934 3 10.4286C3 7.92801 3.94821 5.5298 5.63604 3.76159C7.32387 1.99337 9.61305 1 12 1ZM12 7.28576C11.2044 7.28576 10.4413 7.61689 9.87868 8.20629C9.31607 8.7957 9 9.5951 9 10.4286C9 11.2622 9.31607 12.0616 9.87868 12.651C10.4413 13.2404 11.2044 13.5715 12 13.5715C12.7956 13.5715 13.5587 13.2404 14.1213 12.651C14.6839 12.0616 15 11.2622 15 10.4286C15 9.5951 14.6839 8.7957 14.1213 8.20629C13.5587 7.61689 12.7956 7.28576 12 7.28576Z"
              fill="#F59E0B"
            />
          </svg>
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
          {img.map((item) => (
            <img src={`/images/${item}`} alt={"our-partner"} />
          ))}
        </div>
      </section>
    </>
  );
}
