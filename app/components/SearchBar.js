import { CircleUser, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function SearchBar({ className }) {
  return (
    <div className={`${className} bg-secNav`}>
      <div className=" z-20 w-full bg-nav-bg">
        <div className="Navcontainer ">
          <div className="flex items-center w-full space-x-4">
            <Image src="/logoa.png" width={100} height={100} alt="Logo" />
            <div className="items-center relative flex w-[400px]">
              <input
                className="bg-white rounded-lg text-black outline-hidden py-2 px-4 flex-1 w-full"
                placeholder="Search Love"
              />
              <button className="absolute text-black justify-end items-end flex right-3  ">
                <Search className="" width={20} />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <CircleUser width={30} height={30} strokeWidth={2} />
            <h2 className="text-nowrap text-sm cursor-pointer">Sign in</h2>
            <div className="p-2 px-3 bg-[#181D2D] rounded-lg cursor-pointer ">
              <ShoppingCart className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
