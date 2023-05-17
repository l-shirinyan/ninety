import Image from "next/image";
import ellipse from "../../../assets/ellipse.png";
import Arrow from "../../../assets/digital/greyarrow.png";
import { useState } from "react";
import { info } from "@/utils/constants";

export default function Services() {
  const [selected, setSelected] = useState(0);

  const handleChangeText = (text) => {
    setSelected(text);
  };

  return (
    <main>
      <div className="h-[500px] lg:h-[1174px] background-gradient lg:px-36 md:px-20 px-10">
        <div className="relative">
          <Image
            priority={true}
            src={Arrow}
            width={200}
            height={200}
            alt="ellipse"
            className="absolute left-0 top-5 -rotate-180 h-[30px] w-[30px] sm:w-[44px] sm:h-[44px] lg:w-[74px] lg:h-[74px]"
          />
          <p className="text-xs md:text-xl leading-4 md:leading-8 lg:leading-[67px] lg:text-[45px] text-center max-w-[455px] font-poppins text-white m-auto lg:max-w-[1023px] py-10 md:pt-12 md:pb-[59px] lg:py-20">
            ​We’re problem solvers and strategic thinkers. See what we can do
            for you.
          </p>
          <Image
            priority={true}
            src={Arrow}
            width={200}
            height={200}
            alt="ellipse"
            className="absolute right-0 bottom-0 h-[30px] w-[30px] sm:w-[44px] sm:h-[44px] lg:w-[74px] lg:h-[74px]"
          />
        </div>
        <div className="flex justify-start items-start min-h-20 h-24">
          <div className="relative w-96 h-full flex justify-start items-center">
            <Image
              priority={true}
              src={ellipse}
              width={200}
              height={200}
              alt="ellipse"
              className="absolute top-[-38px] left-[-61px] md:left-[-73px] md:-top-[60px] lg:top-[-50px] lg:left-[-82px] w-[150px] h-[130px] md:w-[200px] md:h-[200px]"
            />
            <h2 className="text-[22px] md:text-4xl lg:text-7xl text-white font-bold h-20 absolute z-0">
              Services
            </h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row relative text-2xl md:mt-12 lg:mt-32">
          <div
            onMouseDown={() => console.log(0)}
            className="flex md:flex-col justify-between absolute w-full md:static md:w-auto md:justify-end -mt-10 cursor-pointer"
          >
            <button onClick={() => handleChangeText(0)}>
              <p
                className={`${
                  selected === 0 ? "title-gradient" : "text-white/20"
                } w-max text-left text-base md:text-[30px] lg:text-[50px] leading-[40px] lg:leading-[74px] font-bold`}
              >
                Digital
              </p>
            </button>
            <button onClick={() => handleChangeText(1)}>
              <p
                className={`${
                  selected === 1 ? "title-gradient" : "text-white/20"
                } w-max text-left text-base md:text-[30px] lg:text-[50px] leading-[40px] lg:leading-[74px] font-bold`}
              >
                Ventures
              </p>
            </button>
            <button onClick={() => handleChangeText(2)}>
              <p
                className={`${
                  selected === 2 ? "title-gradient" : "text-white/20"
                } w-max text-left text-base md:text-[30px] lg:text-[50px] leading-[40px] lg:leading-[74px] font-bold`}
              >
                Marketing
              </p>
            </button>
          </div>
          <div className="md:ml-28 -pl-5 max-w-[963px] mt-[30px] md:mt-0">
            <p className="text-xs lg:text-xl text-white text-left">
              {info[selected].first}
            </p>
            <br />
            <p className="text-xs lg:text-xl text-white text-left">
              {info[selected]?.second}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
