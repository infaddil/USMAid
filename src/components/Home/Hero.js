import ForwardArrowIcon from "@/assets/icons/ForwardArrowIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroImage from "../../assets/images/kitajaga-hero-image.jpg";
import flag from "../../assets/images/whiteflag.png";
import Layout from "../Layout/Layout";
import Button from "../UI/Button";

const Hero = () => {
  return (
    <Layout>
      <div className="w-full xl:min-w-[1280px] flex flex-col xl:flex-row xl:justify-between items-center xl:gap-x-2 px-10 md:px-6 xl:px-0 xl:pl-6 py-10 xl:mt-[10px]">
        <div className="flex flex-col gap-y-8">
          <div className="sm:flex flex-row items-center xl:mt-[90px]">
            <div className="flex flex-col gap-y-4 ">
              <div className="flex">
                <span className="text-3xl md:text-4xl xl:text-7xl font-bold">
                  Unite to help each other
                </span>
                <div className="sm:hidden">
                  <Image
                    alt="img"
                    src={flag}
                    width={0}
                    height={0}
                    className="w-f ull md: min-w-[96px] md: min-h-[82]"
                  />
                </div>
              </div>
              <span>
                Start small, help one flag a day and together we make Malaysia
                more harmonious. Stay strong & safe! We take care of Malaysia ✊
              </span>
            </div>
            <div className="hidden sm:block">
              <Image
                alt="img"
                src={flag}
                width={0}
                height={0}
                className="w-f ull md: min-w-[96px] md: min-h-[82]"
              />
            </div>
          </div>
          <Link href="/map" className="w-fit">
            <Button className="bg-black hover:bg-[#CE3245] text-white px-4 py-3 text-md mb-10">
              Open the Kitajaga Map <ForwardArrowIcon />
            </Button>
          </Link>
        </div>
        <div>
          <Image
            alt="img"
            src={HeroImage}
            width={0}
            height={0}
            className="w-full md:min-w-[768px] md:min-h-[542px] mb-10"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Hero;
