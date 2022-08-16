import React, { useEffect, useState } from "react";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

import {
  SliderWrapper,
  SlideImage,
  DisplayWrapper,
  DisplayBody,
  InfoBox,
  Intro,
  SliderController,
  SliderButton,
} from "./CarouselStyles.js";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const lastSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = length - 1;
    } else if (newIndex >= length) {
      newIndex = 0;
    }

    setCurrent(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(current + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <SliderWrapper
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}>
      {slides.map((slide, index) => {
        return (
          <DisplayWrapper key={index} style={{ width: "100%" }}>
            {index === current && (
              <DisplayBody even={slide.id % 2 === 0 ? true : false}>
                <InfoBox>
                  <Intro>{slide.description}</Intro>
                </InfoBox>
                <SlideImage src={slide.image} alt="" />
              </DisplayBody>
            )}
          </DisplayWrapper>
        );
      })}
      <SliderController>
        <SliderButton style={{ paddingRight: "1rem" }} onClick={lastSlide}>
          <BsFillArrowLeftSquareFill />
        </SliderButton>
        <SliderButton style={{ paddingLeft: "1rem" }} onClick={nextSlide}>
          <BsFillArrowRightSquareFill />
        </SliderButton>
      </SliderController>
    </SliderWrapper>
  );
};

export default Carousel;
