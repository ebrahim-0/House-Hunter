export default function Tips() {
  const tips = [
    {
      image: "/images/tips_1.jpg",
      iconImg: "/images/Ellipse6.svg",
      name: "Dianne Russell",
      text: "The things we need to check when we want to buy a house",
      time: "4 min read | 25 Apr 2021",
    },
    {
      image: "/images/tips_2.jpg",
      iconImg: "/images/tips2.jpg",
      name: "Courtney Henry",
      text: "7 Ways to distinguish the quality of the house we want to buy",
      time: "6 min read | 24 Apr 2021",
    },
    {
      image: "/images/tips_3.jpg",
      iconImg: "/images/tips3.jpg",
      name: "Darlene Robertson",
      text: "The best way to know the quality of the house we want to buy",
      time: "2 min read | 24 Apr 2021",
    },
  ];

  return (
    <>
      <div className={"relative"}>
        <svg
          className={"absolute -z-10 -top-48"}
          xmlns="http://www.w3.org/2000/svg"
          width="444"
          height="678"
          viewBox="0 0 444 678"
          fill="none"
        >
          <g opacity="0.3" filter="url(#filter0_f_4_12)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M301.209 352.001C290.173 386.669 264.914 413.19 242.037 441.462C222.326 465.821 201.32 487.535 176.292 506.373C148.414 527.356 122.122 556.558 87.2732 557.946C52.3115 559.339 22.9507 533.407 -5.93251 513.634C-33.0888 495.044 -52.4251 469.427 -75.8344 446.286C-107.874 414.612 -163.167 396.642 -169.434 352.001C-175.493 308.845 -131.511 275.35 -104.647 241.061C-80.8375 210.671 -54.2616 183.755 -21.5624 163.262C12.0146 142.219 48.0816 115.019 87.2732 120.785C126.401 126.54 143.038 176.499 179.088 192.779C221.116 211.758 283.755 185.58 311.836 222.192C338.703 257.222 314.604 309.919 301.209 352.001Z"
              fill="#82FFE8"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_4_12"
              x="-290"
              y="0"
              width="734"
              height="678"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="60"
                result="effect1_foregroundBlur_4_12"
              />
            </filter>
          </defs>
        </svg>

        <svg
          className={"absolute -z-10 top-28"}
          xmlns="http://www.w3.org/2000/svg"
          width="472"
          height="678"
          viewBox="0 0 472 678"
          fill="none"
        >
          <g opacity="0.3" filter="url(#filter0_f_4_14)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M329.209 352.001C318.173 386.669 292.914 413.19 270.037 441.462C250.326 465.821 229.32 487.535 204.292 506.373C176.414 527.356 150.122 556.558 115.273 557.946C80.3115 559.339 50.9507 533.407 22.0675 513.634C-5.08885 495.044 -24.4251 469.427 -47.8344 446.286C-79.8736 414.612 -135.167 396.642 -141.434 352.001C-147.493 308.845 -103.511 275.35 -76.6469 241.061C-52.8376 210.671 -26.2616 183.755 6.43753 163.262C40.0146 142.219 76.0816 115.019 115.273 120.785C154.401 126.54 171.038 176.499 207.088 192.779C249.116 211.758 311.755 185.58 339.836 222.192C366.703 257.222 342.604 309.919 329.209 352.001Z"
              fill="#C8FF82"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_4_14"
              x="-262"
              y="0"
              width="734"
              height="678"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="60"
                result="effect1_foregroundBlur_4_14"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <section className={"w-10/12 mx-auto"}>
        <div className={"flex flex-col items-center gap-2 "}>
          <hr className={"w-8 h-[1px] border-0 bg-[#F59E0B]"} />

          <h1 className={"text-[#F59E0B]"}>
            See tips and trick from our partnership
          </h1>
          <p
            className={
              "text-[#1B1C57] capitalize text-[32px] font-semibold text-center w-[430px] py-4"
            }
          >
            Find out more about selling and buying homes
          </p>
          <button
            className={
              "text-white text-sm font-semibold bg-[#10B981] rounded-[32px] py-3 px-4 mb-5"
            }
          >
            More Artikel
          </button>
        </div>

        <div className={"flex justify-between my-9"}>
          <div className={"flex flex-col gap-9"}>
            {tips.map((tip, i) => (
              <div key={i} className={"flex items-center gap-8"}>
                <img
                  src={tip.image}
                  alt={""}
                  className={"w-[220px] rounded-2xl object-cover"}
                />
                <div>
                  <div className={"flex items-center gap-4"}>
                    <img
                      src={tip.iconImg}
                      className={"w-10 rounded-[40px]  object-cover"}
                      alt={""}
                    />
                    <span
                      className={
                        "text-[#3C4563] font-normal text-sm leading-[22px]"
                      }
                    >
                      {tip.name}
                    </span>
                  </div>
                  <p
                    className={
                      "w-[340px] text-[#1B1C57] text-[18px] font-medium leading-8 capitalize mt-3 mb-4"
                    }
                  >
                    {tip.text}
                  </p>

                  <div className={"flex gap-3"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM16 16C15.9075 16.0927 15.7976 16.1663 15.6766 16.2164C15.5557 16.2666 15.426 16.2924 15.295 16.2924C15.164 16.2924 15.0343 16.2666 14.9134 16.2164C14.7924 16.1663 14.6825 16.0927 14.59 16L11.3 12.71C11.2055 12.6174 11.1303 12.5069 11.0788 12.3851C11.0273 12.2632 11.0005 12.1323 11 12V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V11.59L16 14.59C16.39 14.98 16.39 15.61 16 16Z"
                        fill="#888B97"
                      />
                    </svg>

                    <span
                      className={"text-[#888B97] text-sm font-normal leading-6"}
                    >
                      {tip.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={"flex flex-col gap-5"}>
            <img
              src="/images/tip4.jpg"
              alt={""}
              className={"w-[560px] h-[280px] rounded-2xl object-cover"}
            />
            <div className={"flex items-center gap-4"}>
              <img
                src="/images/tip_4.jpg"
                className={"w-10 rounded-[40px] object-cover"}
                alt={""}
              />
              <span
                className={"text-[#3C4563] font-normal text-sm leading-[22px]"}
              >
                Cameron Williamson
              </span>
            </div>
            <p
              className={
                "text-[#1B1C57] text-[18px] font-medium leading-8 capitalize"
              }
            >
              12 Things to know before buying a house
            </p>
            <p
              className={
                "w-[560px] opacity-75 text-[#626687] text-sm font-normal leading-6"
              }
            >
              Want to buy a house but are unsure about what we should know, here
              I will try to explain what we should know and check when we want
              to buy a house
            </p>

            <div className={"flex gap-3"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM16 16C15.9075 16.0927 15.7976 16.1663 15.6766 16.2164C15.5557 16.2666 15.426 16.2924 15.295 16.2924C15.164 16.2924 15.0343 16.2666 14.9134 16.2164C14.7924 16.1663 14.6825 16.0927 14.59 16L11.3 12.71C11.2055 12.6174 11.1303 12.5069 11.0788 12.3851C11.0273 12.2632 11.0005 12.1323 11 12V8C11 7.45 11.45 7 12 7C12.55 7 13 7.45 13 8V11.59L16 14.59C16.39 14.98 16.39 15.61 16 16Z"
                  fill="#888B97"
                />
              </svg>

              <span className={"text-[#888B97] text-sm font-normal leading-6"}>
                8 min read | 25 Apr 2021
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
