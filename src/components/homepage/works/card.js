import Image from "next/image";
import fight_legends from "../../../assets/works/fight_legends.jpg";
import funtime from "../../../assets/works/funtime.jpg";
import liquid from "../../../assets/works/liquid.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const images = [fight_legends, funtime, fight_legends, liquid];
const data = [
  { title: "Fight Legends", desc: "Web3 GameFi" },
  { title: "The Wiggles FunTime with Faces", desc: "Mobile App" },
  { title: "Fight Legends", desc: "Web3 GameFi" },
  { title: "Liquid Crypto", desc: "Web3 DeFi platform" },
];

export default function Banner() {
  return (
    <Swiper
      className="w-full mx-auto homeSwiper h-[330px] md:h-[440px] !flex justify-center items-end"
      spaceBetween={10}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1.5,
        },
        1200: {
          slidesPerView: 2.1,
        },
        1444: {
          slidesPerView: 3,
        },
      }}
      modules={[Pagination]}
      loop
      pagination={{ clickable: true }}
    >
      {images.map((item, idx) => (
        <SwiperSlide key={idx} className="w-full">
          <div className="h-60 md:h-80 mx-auto w-max border-b-[3px] pb-5 md:pb-0 border-primary">
            <div className="w-[250px] relative h-full max-h-[220px] sm:w-[300px] md:w-[373px] sm:max-h-[285px]">
              <Image src={item} alt="img" fill={true} />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-3 lg:mt-5 gap-1">
            <span className="text-black text-base md:text-lg">
              {data[idx].title}
            </span>
            <span className="text-xs leading-5 md:text-base lg::text-2xl text-dark-grey text-center font-light">
              {data[idx].desc}
            </span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
