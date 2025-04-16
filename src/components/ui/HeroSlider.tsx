import { useState } from "react";

export default function HeroSlider() {
  const slides = [
    { src: "/images/appstore.png", alt: "slide description" },
    { src: "/images/slider.png", alt: "slide description" },
    { src: "/images/bag.png", alt: "slide description" },
    { src: "/images/camera.png", alt: "slide description" },
    { src: "/images/camera.png", alt: "slide description" },
  ];

  const [currentSlide, setCurrentSlide] = useState(Math.trunc(slides.length / 2));

  function paganation(index: number) {
    setCurrentSlide(index);
  }

  return (
    <>
      <div className="m-7 w-[100%]">
        <div className="wrapper relative">
          <div className="slides flex overflow-hidden bg-black rounded">
            <div className="slide min-w-[100%] p-2">
              <img className="min-w-[100%] h-[400px]" src={slides[currentSlide].src} alt={slides[currentSlide].alt} />
            </div>
          </div>

          <div className="absolute bottom-5 flex gap-4 justify-center w-full">
            <ul className="flex gap-5 justify-center">
              {slides.map((_, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => paganation(index)}
                    className={` ${index === currentSlide && "border-2 border-white bg-red-500"} w-[15px] h-[15px] rounded-full bg-[#808080] cursor-pointer`}
                  ></li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
