import { Setting5 } from "iconsax-react";
import React from "react";
import { HouseCard } from "./";

const Place = () => {
  return (
    <div className="px-20 py-32 font-rr">
      <div className="pb-10">
        <ul className="flex items-center justify-between text-base">
          <li className="place transit">Restaurant</li>
          <li className="place transit">Cottage</li>
          <li className="place transit">Castle</li>
          <li className="place transit">Fantast city</li>
          <li className="place transit">Beach</li>
          <li className="place transit">Carbins</li>
          <li className="place transit">Off-grid</li>
          <li className="place transit">Farm</li>
          <div className="py-2 px-5 rounded border flex items-center space-x-3">
            <p>Location</p>
            <div className="rotate-90">
              <Setting5 color="#000" variant="TwoTone" />
            </div>
          </div>
        </ul>
      </div>
      <div className="pt-10 grid grid-cols-4 gap-7">
        <HouseCard img={"/place1.png"} />
        <HouseCard img={"/place2.png"} />
        <HouseCard img={"/place3.png"} />
        <HouseCard img={"/place4.png"} />
        <HouseCard img={"/place5.png"} />
        <HouseCard img={"/place6.png"} />
        <HouseCard img={"/place7.png"} />
        <HouseCard img={"/place8.png"} />
        <HouseCard img={"/place9.png"} />
        <HouseCard img={"/place10.png"} />
        <HouseCard img={"/place11.png"} />
        <HouseCard img={"/place12.png"} />
        <HouseCard img={"/place13.png"} />
        <HouseCard img={"/place14.png"} />
        <HouseCard img={"/place15.png"} />
        <HouseCard img={"/place16.png"} />
      </div>
    </div>
  );
};

export default Place;
