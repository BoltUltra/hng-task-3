import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="px-20 py-6 font-rr">
      <navbar className="flex justify-between">
        <div className="flex items-center">
          <img src="/house.svg" alt="" />
          <h1 className="text-4xl font-bold font-sans gradient">Metabnb</h1>
        </div>

        <ul className="flex items-center space-x-10 text-[#434343]">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/place"> Place to stay</Link>
          </li>
          <li>
            <Link to="/nfts"> NFTs</Link>
          </li>
          <li>
            <Link to="/community"> Community</Link>
          </li>
        </ul>

        <button className="bg-primary text-white px-5 py-2 rounded-lg text-sm">
          Connect to Wallet
        </button>
      </navbar>
    </header>
  );
};

export default NavBar;
