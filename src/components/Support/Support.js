import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../UI/Button";
import Donation from "./Donation";

const Support = () => {
  const [donationMethod, setDonationMethod] = useState(false);
  return (
    <div className="transition-fade h-screen dark:bg-white dark:text-black	">
      <div className="w-full   xl:min-w-[1280px] flex justify-between px-6 py-10  ">
        <span className="font-bold text-lg">Support kitajaga.co</span>
        <Link href={"/"}>
          <Button className="bg-[#1C4BA9] text-xl justify-center text-white h-10 w-10 shadow-lg">
            <i className="fa fa-times" aria-hidden="true"></i>
          </Button>
        </Link>
      </div>
      {!donationMethod ? (
        <div className="w-full flex flex-col px-7 gap-y-6 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div>
              <Image
                src="https://terato-space.sgp1.digitaloceanspaces.com/kitajaga/kitajaga-small-logo-only.svg"
                width={120}
                height={120}
                alt="img"
              />
            </div>
            <h1 className="text-5xl font-bold text-[#1C4BA9]">kitajaga</h1>
          </div>

          <p className="w-full md:w-[35%]  text-justify text-lg">
            We are a nonprofit movement, we are self-initiated, we are driven by
            the community. It is a platform to help other people in need. Please
            consider helping us so we can continue to run this website & help
            the people of Malaysia 🇲🇾
          </p>
          <Button
            className="bg-[#CE3245] hover:bg-[#1C4BA9] text-white w-full  md:w-[35%] justify-center py-3"
            onClick={() => setDonationMethod(true)}
          >
            Donate to kitajaga.co ✊
          </Button>
          <span className="text-[#CE3245] pb-10">
            Stay strong & safe! Kita jaga Malaysia ✊
          </span>
        </div>
      ) : (
        <Donation />
      )}
    </div>
  );
};

export default Support;
