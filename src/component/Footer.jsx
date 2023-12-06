import { Link } from "react-router-dom";

export default function Footer() {
  const texts = [
    {
      title: "Property",
      content: [
        {
          text: "House",
        },
        {
          text: "Apartment",
        },
        {
          text: "Villa",
        },
      ],
    },
    {
      title: "Article",
      content: [
        {
          text: "New Article",
        },
        {
          text: "Popular Article",
        },
        {
          text: "Most Read",
        },
        {
          text: "Tips & Tricks",
        },
      ],
    },
    {
      title: "Contact",
      content: [
        {
          text: "2464 Royal Ln. Mesa, New Jersey 45463",
        },
        {
          text: "(671) 555-0110",
        },
        {
          text: "info@hounter.com",
        },
      ],
    },
  ];

  return (
    <section className={""}>
      <div className={"relative -z-10"}>
        <svg
          className={"absolute right-0 -top-28"}
          xmlns="http://www.w3.org/2000/svg"
          width="660"
          height="442"
          viewBox="0 0 660 442"
          fill="none"
        >
          <g opacity="0.3" filter="url(#filter0_f_4_16)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M591.209 352.001C580.173 386.669 554.914 413.19 532.037 441.462C512.326 465.821 491.32 487.535 466.292 506.373C438.414 527.356 412.122 556.558 377.273 557.946C342.311 559.339 312.951 533.407 284.067 513.634C256.911 495.044 237.575 469.427 214.166 446.286C182.126 414.612 126.833 396.642 120.566 352.001C114.507 308.845 158.489 275.35 185.353 241.061C209.162 210.671 235.738 183.755 268.438 163.262C302.015 142.219 338.082 115.019 377.273 120.785C416.401 126.54 433.038 176.499 469.088 192.779C511.116 211.758 573.755 185.58 601.836 222.192C628.703 257.222 604.604 309.919 591.209 352.001Z"
              fill="#B9FF82"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_4_16"
              x="0"
              y="-1.14441e-05"
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
                result="effect1_foregroundBlur_4_16"
              />
            </filter>
          </defs>
        </svg>

        <svg
          className={"absolute right-0 -top-44"}
          xmlns="http://www.w3.org/2000/svg"
          width="414"
          height="507"
          viewBox="0 0 414 507"
          fill="none"
        >
          <g opacity="0.3" filter="url(#filter0_f_4_15)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M591.209 352.001C580.173 386.669 554.914 413.19 532.037 441.462C512.326 465.821 491.32 487.535 466.292 506.373C438.414 527.356 412.122 556.558 377.273 557.946C342.311 559.339 312.951 533.407 284.067 513.634C256.911 495.044 237.575 469.427 214.166 446.286C182.126 414.612 126.833 396.642 120.566 352.001C114.507 308.845 158.489 275.35 185.353 241.061C209.162 210.671 235.738 183.755 268.438 163.262C302.015 142.219 338.082 115.019 377.273 120.785C416.401 126.54 433.038 176.499 469.088 192.779C511.116 211.758 573.755 185.58 601.836 222.192C628.703 257.222 604.604 309.919 591.209 352.001Z"
              fill="#82BBFF"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_4_15"
              x="0"
              y="-1.14441e-05"
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
                result="effect1_foregroundBlur_4_15"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <footer className={"w-10/12 mx-auto flex justify-between"}>
        <div>
          <Link
            to={"/"}
            className={
              "text-[#1B1C57] flex items-center capitalize text-base font-bold z-10"
            }
          >
            <img src="/images/logo.svg" className={"mr-4"} alt="logo" />
            Hounter
          </Link>

          <p
            className={
              "text-[#626687] my-6 w-[330px] text-sm leading-6 font-normal opacity-75"
            }
          >
            We provide information about properties such as houses, villas and
            apartments to help people find their dream home
          </p>
          <div className={"flex gap-6"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M12.3186 26V16.6154H9V13.2365H12.3186V10.3505C12.3186 8.08264 14.2789 6 18.7959 6C20.6247 6 21.9771 6.1311 21.9771 6.1311L21.8705 9.28642C21.8705 9.28642 20.4913 9.27638 18.9863 9.27638C17.3574 9.27638 17.0965 9.83768 17.0965 10.7693V13.2365H22L21.7866 16.6154H17.0965V26H12.3186Z"
                fill="#3C4563"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M28 8.37575C27.1174 8.76628 26.157 9.04735 25.1676 9.15682C26.1948 8.53089 26.9639 7.54202 27.3308 6.37575C26.367 6.96388 25.3111 7.37629 24.2101 7.59469C23.7499 7.09003 23.1933 6.688 22.575 6.41364C21.9567 6.13929 21.2899 5.99849 20.6163 6.00001C17.8906 6.00001 15.6986 8.26628 15.6986 11.0473C15.6986 11.4379 15.7447 11.8284 15.8197 12.2042C11.7385 11.9852 8.09855 9.98522 5.67864 6.92309C5.23771 7.69562 5.00665 8.57524 5.00949 9.47042C5.00949 11.2219 5.87766 12.7663 7.20154 13.6746C6.42136 13.643 5.65944 13.4231 4.97777 13.0326V13.0947C4.97777 15.5473 6.66795 17.5799 8.92056 18.0473C8.49761 18.16 8.06251 18.2177 7.62553 18.2189C7.30537 18.2189 7.00252 18.1864 6.69679 18.142C7.31979 20.142 9.134 21.5947 11.2943 21.642C9.60413 23 7.48708 23.7988 5.18832 23.7988C4.77587 23.7988 4.39514 23.784 4 23.7367C6.18051 25.1716 8.7677 26 11.5539 26C20.599 26 25.5484 18.3136 25.5484 11.642C25.5484 11.4231 25.5484 11.2042 25.534 10.9852C26.4915 10.2663 27.3308 9.37575 28 8.37575Z"
                fill="#3C4563"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M15.9973 12.6652C14.1611 12.6652 12.6626 14.1638 12.6626 16C12.6626 17.8362 14.1611 19.3348 15.9973 19.3348C17.8335 19.3348 19.332 17.8362 19.332 16C19.332 14.1638 17.8335 12.6652 15.9973 12.6652ZM25.9989 16C25.9989 14.6191 26.0114 13.2506 25.9338 11.8722C25.8563 10.2711 25.4911 8.85017 24.3203 7.67938C23.147 6.50609 21.7286 6.14334 20.1275 6.06579C18.7466 5.98824 17.3782 6.00074 15.9998 6.00074C14.6189 6.00074 13.2505 5.98824 11.8721 6.06579C10.271 6.14334 8.85012 6.50859 7.67935 7.67938C6.50608 8.85267 6.14334 10.2711 6.06579 11.8722C5.98824 13.2531 6.00074 14.6216 6.00074 16C6.00074 17.3784 5.98824 18.7494 6.06579 20.1278C6.14334 21.7289 6.50858 23.1498 7.67935 24.3206C8.85262 25.4939 10.271 25.8567 11.8721 25.9342C13.253 26.0118 14.6214 25.9993 15.9998 25.9993C17.3807 25.9993 18.7491 26.0118 20.1275 25.9342C21.7286 25.8567 23.1495 25.4914 24.3203 24.3206C25.4936 23.1473 25.8563 21.7289 25.9338 20.1278C26.0139 18.7494 25.9989 17.3809 25.9989 16ZM15.9973 21.131C13.1579 21.131 10.8664 18.8394 10.8664 16C10.8664 13.1606 13.1579 10.869 15.9973 10.869C18.8367 10.869 21.1282 13.1606 21.1282 16C21.1282 18.8394 18.8367 21.131 15.9973 21.131ZM21.3383 11.8572C20.6754 11.8572 20.14 11.3218 20.14 10.6589C20.14 9.99594 20.6754 9.46058 21.3383 9.46058C22.0013 9.46058 22.5366 9.99594 22.5366 10.6589C22.5368 10.8163 22.5059 10.9722 22.4458 11.1177C22.3856 11.2632 22.2974 11.3954 22.1861 11.5067C22.0748 11.618 21.9426 11.7062 21.7971 11.7664C21.6516 11.8265 21.4957 11.8574 21.3383 11.8572Z"
                fill="#3C4563"
              />
            </svg>
          </div>
        </div>
        <div>
          <div className={"flex justify-between gap-[90px]"}>
            {texts.map((text, i) => (
              <div key={i} className={"flex flex-col gap-4"}>
                <h1
                  className={
                    "text-[#0E1735] font-semibold text-[18px] capitalize mb-1"
                  }
                >
                  {text.title}
                </h1>
                {text.content.map((content, i) => (
                  <p
                    key={i}
                    className={
                      "text-[#888B97] text-sm font-normal leading-normal capitalize cursor-pointer"
                    }
                  >
                    {content.text}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
}
