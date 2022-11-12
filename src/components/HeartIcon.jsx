import { Heart } from "iconsax-react";
import React, { useState } from "react";

const Hero = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <button
        onClick={handleClick}
      >
        <Heart
          size="24"
          color={active ? "#ff0000" : "#ff0000"}
          variant={active ? "Bold" : "Outline"}
        />
      </button>
    </>
  );
};

export default Hero;
