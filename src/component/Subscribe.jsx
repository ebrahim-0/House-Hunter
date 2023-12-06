export default function Subscribe() {
  const imgs = [
    {
      img: "/images/subscribe1.jpg",
      class: "w-[81px] h-[81px]  top-[38px] left-11 rounded-3xl",
    },
    {
      img: "/images/Ellipse6.svg",
      class: "w-9 bottom-[103px] left-[67px] rounded-[36px]",
    },
    {
      img: "/images/subscribe2.jpg",
      class: "w-9 top-[71px] left-[204px] rounded-[36px]",
    },
    {
      img: "/images/subscribe3.jpg",
      class: "w-[54px] h-[54px] bottom-[80px] left-[195px] rounded-[24px]",
    },
    {
      img: "/images/tips2.jpg",
      class: "w-[36px] h-[36px] bottom-[133px] right-[200px] rounded-[24px]",
    },
    {
      img: "/images/subscribe4.jpg",
      class: "w-[36px] h-[36px] top-[107px] right-[82px] rounded-[24px]",
    },
    {
      img: "/images/subscribe5.jpg",
      class: "w-[55px] h-[55px] bottom-[60px] right-[73px] rounded-[24px]",
    },
    {
      img: "/images/subscribe6.jpg",
      class: "w-[70px] h-[70px] top-[44px] right-[200px] rounded-[24px]",
    },
  ];

  return (
    <section
      className={
        "w-10/12 h-[312px] mx-auto flex flex-col justify-center relative items-center gap-5 subscribe my-32 py-10"
      }
    >
      {imgs.map((img, i) => (
        <img
          key={i}
          src={img.img}
          alt={""}
          className={`${img.class} absolute border-2 border-white object-cover`}
        />
      ))}

      <h1
        className={
          "text-center capitalize text-[#1B1C57] font-semibold leading-[48px] w-[430px] text-[32px]"
        }
      >
        Subscribe For More Info and update from Hounter
      </h1>

      <div
        className={
          "flex items-center pl-6 pr-1 w-[496px] rounded-[32px] bg-white"
        }
      >
        <svg
          className={"w-6 h-6"}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM19 6L12.5 10.47C12.348 10.5578 12.1755 10.604 12 10.604C11.8245 10.604 11.652 10.5578 11.5 10.47L5 6H19Z"
            fill="#3B82F6"
          />
        </svg>

        <input
          type="text"
          className={
            "w-[500px] h-full rounded-l-[32px] bg-[#fff] px-5 placeholder-[#888B97] outline-0 text-[#1B1C57] font-normal text-[16px]"
          }
          placeholder={"Your email here"}
        />
        <button
          className={
            "rounded-[32px] w-[200px] bg-[#10B981] text-[#fff] m-1 px-4 py-3 text-sm font-semibold leading-[22px]"
          }
        >
          Subsribe Now
        </button>
      </div>
    </section>
  );
}
