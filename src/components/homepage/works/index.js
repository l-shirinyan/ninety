import { steps } from "@/utils/constants";
import Card from "./card";

export default function Works() {
  return (
    <main className="lg:px-36 md:px-20 px-10 pt-[34px] md:pt-[50px] lg:pt-28 bg-[#f5f5f5] pb-10 md:pb-20">
      <h2 className="title-gradient text-[22px] md:text-[40px] mx-auto lg:mx-0 lg:text-[80px] font-bold pb-[34px] md:pb-[68px] lg:pb-24 w-max">
        Our Work
      </h2>
      <div className="flex justify-between">
        <Card />
      </div>
    </main>
  );
}
