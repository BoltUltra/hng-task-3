import React from "react";
import { HouseCard } from "./";

const Houses = () => {
  return (
    <div className="font-rr px-20 py-20">
      <h3 className="font-bold text-5xl text-center">
        Inspiration for your next adventure
      </h3>
      <div className="pt-10 grid grid-cols-4 gap-7">
        <HouseCard img={"/house1.jpg"} />
        <HouseCard img={"/house2.jpg"} />
        <HouseCard img={"/house3.jpg"} />
        <HouseCard img={"/house4.jpg"} />
        <HouseCard img={"/house5.jpg"} />
        <HouseCard img={"/house6.jpg"} />
        <HouseCard img={"/house7.jpg"} />
        <HouseCard img={"/house8.jpg"} />
      </div>
    </div>
  );
};

export default Houses;
