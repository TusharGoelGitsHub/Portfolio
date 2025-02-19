import React, { useState, useEffect, useRef } from "react";
import { ICarouselData } from "./Carousel.types";
import CarouselCard from "../CarouselCard/CarouselCard";
import {
  carouselContainerStyles,
  containerStyles,
  leftButtonStyles,
  rightButtonStyles,
} from "./Carousel.styles";

const Carousel = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleTransitionEnd = (): void => {
    setIsTransitioning(false);
    if (currentIndex === 0) {
      setCurrentIndex(ICarouselData.length);
      carouselRef.current!.style.transition = "none";
      carouselRef.current!.style.transform = `translateX(-${
        ICarouselData.length * 100
      }%)`;
    } else if (currentIndex === ICarouselData.length + 1) {
      setCurrentIndex(1);
      carouselRef.current!.style.transition = "none";
      carouselRef.current!.style.transform = `translateX(-100%)`;
    }
  };

  const goToPrevious = (): void => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
      carouselRef.current!.style.transition = "transform 0.5s ease";
      carouselRef.current!.style.transform = `translateX(-${
        (currentIndex - 1) * 100
      }%)`;
    }
  };

  const goToNext = (): void => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
      carouselRef.current!.style.transition = "transform 0.5s ease";
      carouselRef.current!.style.transform = `translateX(-${
        (currentIndex + 1) * 100
      }%)`;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        goToNext();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className={carouselContainerStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={carouselRef}
        style={{
          display: "flex",
          transition: "transform 0.5s ease",
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        <div className={containerStyles}>
          <CarouselCard data={ICarouselData[ICarouselData.length - 1]} />
        </div>
        {ICarouselData.map((val, index) => (
          <div key={index} className={containerStyles}>
            <CarouselCard data={val} />
          </div>
        ))}
        <div className={containerStyles}>
          <CarouselCard data={ICarouselData[0]} />
        </div>
      </div>
      <button role="test" onClick={goToPrevious} className={leftButtonStyles}>
        &#9664;
      </button>
      <button onClick={goToNext} className={rightButtonStyles}>
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
