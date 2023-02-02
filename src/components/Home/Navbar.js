import Image from "next/image";
import React from "react";
import Button from "../UI/Button";

const Navbar = () => {
  return (
    <div className="min-w-[1280px] flex justify-between px-6 py-10">
      <div>
        <Image
          src="https://terato-space.sgp1.digitaloceanspaces.com/kitajaga/kitajaga-logo-horizontal.svg"
          width={139}
          height={38}
          alt="img"
        />
      </div>
      <div className="flex gap-x-8 items-center">
        <ul className="flex font-bold gap-x-8 text-lg">
          <li>Our Impact</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Support Kitajaga.co</li>
        </ul>
        <Button>
          <div>
            <Image
              src="https://terato-space.sgp1.digitaloceanspaces.com/kitajaga/kitajaga-small-logo-only.svg"
              width={28}
              height={20}
              alt="img"
            />
          </div>
          <div>Create Compaign</div>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
