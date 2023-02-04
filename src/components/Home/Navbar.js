import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../UI/Button";

const Navbar = () => {
  return (
    <div className="w-[100%] xl:min-w-[1280px] flex justify-between px-10 md:px-6  xl:px-6 py-10 ">
      <Link href={"/"}  className="hidden md:block">
        <Image
          src="https://terato-space.sgp1.digitaloceanspaces.com/kitajaga/kitajaga-logo-horizontal.svg"
          width={139}
          height={38}
          alt="img"
        />
      </Link>
      <Link href={"/"} className="block md:hidden">
            <Image
              src="https://terato-space.sgp1.digitaloceanspaces.com/kitajaga/kitajaga-small-logo-only.svg"
              width={40}
              height={30}
              alt="img"
            />
          </Link>
      <div className="flex gap-x-8 items-center">
        <ul className=" font-bold gap-x-8 text-md hidden xl:flex">
          <Link href={"/"}><li>Our Impact</li></Link>
          <Link href={"/"}><li>About Us</li></Link>
          <Link href={"/"}><li>Contact</li></Link>
          <Link href={"/"}><li>Blog</li></Link>
          <Link href={"/support"}><li>Support Kitajaga.co</li></Link>
        </ul>
        <Button className="bg-gray-100 text-sm px-4 py-2">
          <div className="hidden lg:block">
            <Image
              src="https://terato-space.sgp1.digitaloceanspaces.com/kitajaga/kitajaga-small-logo-only.svg"
              width={23}
              height={15}
              alt="img"
            />
          </div>
          <div className="text-md ">Create Compaign</div>
        </Button>
      </div>

    </div>
  );
};

export default Navbar;
