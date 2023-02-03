import Link from "next/link";
import React from "react";
import Button from "../UI/Button";

const Donation = () => {
  return (
    <div className="flex flex-col gap-y-6 justify-center items-center mt-[100px]">
      <span className="text-lg font-semibold">Select Donation Method</span>
      <Button className="bg-black hover:bg-[#1C4BA9] text-white py-3 px-7 text-base w-[320px] justify-center">
        Support us on GlobalSadaqah
      </Button>
      <Button className="bg-black hover:bg-[#1C4BA9] text-white py-3 px-7 text-base w-[320px] justify-center">
        Donate with Binance Coin (BNB)
      </Button>
      <Button className="bg-black hover:bg-[#1C4BA9] text-white py-3 px-7 text-base w-[320px] justify-center">
        Donate With Ether (ETH)
      </Button>
      <Link href={"#"}>
        <span className="font-semibold text-sm underline">Management of Kitajaga Crypto Fund</span>
      </Link>
    </div>
  );
};

export default Donation;
