"use client";

import { Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";

const Products = () => {
  return (
    <div className="Navcontainer mt-16">
      <div className="">
        <div>
          <h1 className="font-bold text-xl">Top Picks</h1>
          <span className="text-[#9DA0A6] text-sm">
            Shop the Best: Tried, Tested, and Loved by Many
          </span>
        </div>
        <div>
          {/* <Swiper
            slidesPerView={"auto"}
            loop={true}
            draggable={true}
            spaceBetween={25}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          ></Swiper> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
