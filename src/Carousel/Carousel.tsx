import React, { useState, useEffect, useRef } from "react";
import { ICarouselData } from "./Carousel.types";
import CarouselCard from "../CarouselCard/CarouselCard";

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
      style={{
        position: "relative",
        width: "60%",
        margin: "auto",
        overflow: "hidden",
      }}
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
        <div style={{ minWidth: "100%" }}>
          <CarouselCard data={ICarouselData[ICarouselData.length - 1]} />
        </div>
        {ICarouselData.map((val, index) => (
          <div key={index} style={{ minWidth: "100%" }}>
            <CarouselCard data={val} />
          </div>
        ))}
        <div style={{ minWidth: "100%" }}>
          <CarouselCard data={ICarouselData[0]} />
        </div>
      </div>
      <button
        onClick={goToPrevious}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "24px",
          color: "#fff",
        }}
      >
        &#9664;
      </button>
      <button
        onClick={goToNext}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "24px",
          color: "#fff",
        }}
      >
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
