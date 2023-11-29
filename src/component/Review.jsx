import Carousel from "./Carousel";

export default function Review() {
  return (
    <section className={"pb-20"}>
      <h1 className={"flex flex-col items-center gap-2 text-[#F59E0B]"}>
        <hr className={"w-8 h-[1px] border-0 bg-[#F59E0B]"} />
        See Our Review
      </h1>
      <h1
        className={"text-center text-[#1B1C57] font-semibold text-[32px] pb-10"}
      >
        What Our User Say About Us
      </h1>
      <Carousel />
    </section>
  );
}
