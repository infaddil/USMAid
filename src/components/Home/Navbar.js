import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../UI/Button";

const Navbar = () => {
  return (
    <div className="min-w-[1280px] flex justify-between px-6 py-10">
      <Link href={"/"}>
        <Image
          src="https://terato-space.sgp1.digitaloceanspaces.com/kitajaga/kitajaga-logo-horizontal.svg"
          width={139}
          height={38}
          alt="img"
        />
      </Link>
      <div className="flex gap-x-8 items-center">
        <ul className="flex font-bold gap-x-8 text-md">
          <Link href={"/"}><li>Our Impact</li></Link>
          <Link href={"/"}><li>About Us</li></Link>
          <Link href={"/"}><li>Contact</li></Link>
          <Link href={"/"}><li>Blog</li></Link>
          <Link href={"/support"}><li>Support Kitajaga.co</li></Link>
        </ul>
        <Button className="bg-gray-100 text-sm">
          <div>
            <Image
              src="https://terato-space.sgp1.digitaloceanspaces.com/kitajaga/kitajaga-small-logo-only.svg"
              width={28}
              height={20}
              alt="img"
            />
          </div>
          <div className="text-md">Create Compaign</div>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
