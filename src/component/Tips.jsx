import BlueSvg from "../assets/BlueSvg";
import TipsSvg from "../assets/TipsSvg";
import TipsGreenSvg from "../assets/TipsGreenSvg";
import TimeSvg from "../assets/TimeSvg";

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
        <TipsSvg />
        <TipsGreenSvg />
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
                    <span
                      className={"text-[#888B97] text-sm font-normal leading-6"}
                    >
                      <TimeSvg />
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
              <TimeSvg />

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
