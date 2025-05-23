"use client";
import { ImgSlider, secondImgSlider } from "@/api";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";

import Image from "next/image";

const Slider = () => {
  const dispatch = useDispatch();
  const { imgs, status } = useSelector((state) => state.main.sliderImages);

  const { secImgs, secStatus } = useSelector(
    (state) => state.main.secondImgSlider
  );
  useEffect(() => {
    dispatch(ImgSlider());
    dispatch(secondImgSlider());
  }, []);

  return (
    <div className="Navcontainer mt-4   flex z-1 relative ">
      <div className="w-full flex space-x-6 items-center h-full  overflow-hidden ">
        {status === "fulfilled" && (
          <div className=" relative h-100 max-w-10/12 w-full overflow-hidden ">
            <Swiper
              loop={true}
              effect={"fade"}
              slidesPerView={1}
              modules={[Autoplay, EffectFade, Pagination]}
              draggable
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 3000,
              }}
              className="h-full rounded-lg"
            >
              {imgs.map((item, imgIndex) => (
                <SwiperSlide key={imgIndex} className="h-full   relative">
                  {/* <MainImgs item={item} />
                   */}
                  <div className=" h-full relative">
                    <Image
                      src={item.imgURL}
                      fill={true}
                      alt="img"
                      className=" rounded-md  "
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
        {secStatus === "fulfilled" && (
          <div className=" relative  max-w-2/12 w-full h-100">
            {secImgs.map((img, secImgIndex) => (
              <div className=" h-full relative" key={secImgIndex}>
                <Image
                  src={img.imgURL}
                  alt="Img"
                  fill={true}
                  className="rounded-md  "
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Slider;
