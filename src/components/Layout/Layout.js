import Link from "next/link";
import React from "react";
import Button from "../UI/Button";

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <div className="w-full fixed bottom-0 p-2 bg-white shadow-sm ">
        <div className="flex flex-col md:flex-row justify-between px-2">
          <div className="flex gap-x-2">
            <Link href="/support">
              <Button className="bg-[#FFEF85] text-black px-3 text-xs font-bold py-1">
                🙏🏻 &nbsp;Support kitajaga.co
              </Button>
            </Link>
            <Button className="bg-[#26BD62] text-white px-3 text-xs font-bold py-1">
              🕵🏻 &nbsp; Check No. Phone
            </Button>
          </div>
          <div className="flex gap-x-2">
            <Button className="bg-[#F1F2F4] text-black px-3 text-xs font-bold">
              Blog
            </Button>
            <Button className="bg-[#F1F2F4] text-black px-3 text-xs font-bold">
              Contact
            </Button>
            <Button className="bg-[#F1F2F4] text-black px-3 text-xs font-bold">
              About us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
