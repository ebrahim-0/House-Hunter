import { useState } from "react";

export function SlideLogic(items, Component) {
  return function WrappedComponent(props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + items.length) % items.length,
      );
    };

    return (
      <Component
        {...props}
        items={items}
        currentIndex={currentIndex}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        setCurrentIndex={setCurrentIndex}
      />
    );
  };
}
