export default function HeroSlider() {
  const slides = [
    { src: "/images/slider.png", alt: "slide description" },
    { src: "/images/slider.png", alt: "slide description" },
    { src: "/images/slider.png", alt: "slide description" },
    { src: "/images/slider.png", alt: "slide description" },
    { src: "/images/slider.png", alt: "slide description" },
    { src: "/images/slider.png", alt: "slide description" },
    { src: "/images/slider.png", alt: "slide description" },
  ];

  return (
    <>
      <div className="m-7 w-[100%]">
        <div className="wrapper">
          <div className="slides flex overflow-hidden">
            {slides.map((slide) => {
              return (
                <div className="slide min-w-[100%] p-2">
                  <img className="min-w-[100%]" src={slide.src} alt={slide.alt} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
