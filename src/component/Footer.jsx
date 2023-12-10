import { Link } from "react-router-dom";
import GreenSvg from "../assets/GreenSvg";
import FooterGreenSvg from "../assets/FooterGreenSvg";
import FooterBlueSvg from "../assets/FooterBlueSvg";
import FacebookSvg from "../assets/FacebookSvg";
import TwitterSvg from "../assets/TwitterSvg";
import InstagramSvg from "../assets/InstagramSvg";

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
    <section>
      <div className={"relative -z-10"}>
        <FooterGreenSvg />
        <FooterBlueSvg />
      </div>

      <footer className={"w-10/12 mx-auto flex justify-between"}>
        <div>
          <Link
            to={"/"}
            className={
              "text-[#1B1C57] flex items-center capitalize text-base font-bold z-10"
            }
          >
            <img
              src="/images/logo.svg"
              className={"mr-4"}
              alt="logo"
              loading={"lazy"}
            />
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
            <FacebookSvg />
            <TwitterSvg />
            <InstagramSvg />
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
