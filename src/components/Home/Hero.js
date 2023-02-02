import ForwardArrowIcon from "@/assets/icons/ForwardArrowIcon";
import Image from "next/image";
import React from "react";
import HeroImage from "../../assets/images/kitajaga-hero-image.jpg";
import flag from "../../assets/images/whiteflag.png";
import Button from "../UI/Button";

const Hero = () => {
  return (
    <div className="min-w-[1280px] flex justify-between pl-6 py-10">
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col mt-[90px]">
            <span className="text-7xl font-bold">Unite to help each </span>
            <span className="text-7xl font-bold">other</span>
        </div>
        <div className="text-lg flex flex-col">
          <span>
            Start small, help one flag a day and together we make Malaysia more
            harmonious.
          </span>
          <span>Stay strong & safe! We take care of Malaysia ✊</span>
        </div>
        <Button className="bg-black text-white py-2.5">
          Open the Kitajaga Map <ForwardArrowIcon />
        </Button>
      </div>
      <div>
        <Image src={HeroImage} width={768} height={542} />
      </div>
    </div>
  );
};

export default Hero;
