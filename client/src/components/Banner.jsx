import { useState } from 'react';
import {
  bannerImgFive,
  bannerImgFour,
  bannerImgOne,
  bannerImgThree,
  bannerImgTwo,
} from '../assets';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';
const Banner = () => {
  const [currentSlide, SetCurrentSlide] = useState(0);
  const data = [
    bannerImgOne,
    bannerImgTwo,
    bannerImgThree,
    bannerImgFour,
    bannerImgFive,
  ];
  const prevSlide = () => {
    SetCurrentSlide((prev) => (prev === 0 ? 3 : prev - 1));
  };
  const nextSlide = () => {
    SetCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1));
  };
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div
          style={{ transform: `traslateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          <img
            src={data[0]}
            alt="ImgOne"
            loading="priority"
            className="w-screen h-full object-cover"
          />
          <img
            src={data[1]}
            alt="ImgOne"
            loading="priority"
            className="w-screen h-full object-cover"
          />
          <img
            src={data[2]}
            alt="ImgOne"
            loading="priority"
            className="w-screen h-full object-cover"
          />
          <img
            src={data[3]}
            alt="ImgOne"
            loading="priority"
            className="w-screen h-full object-cover"
          />
          <img
            src={data[4]}
            alt="ImgOne"
            loading="priority"
            className="w-screen h-full object-cover"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
