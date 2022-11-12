import React from "react";

const Nft = () => {
  return (
    <div className="flex bg-primary py-24 px-20 items-center font-rr text-white">
      <div className="w-[40%] space-y-10">
        <h3 className="font-bold text-5xl">Metabnb NFTs</h3>
        <p className="text-lg font-light leading-relaxed">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button className="bg-white text-primary py-3 px-7 rounded-md">
          Learn more
        </button>
      </div>
      <div className="w-[60%]">
        <img src="/nft.png" alt="nft" className="mx-auto" />
      </div>
    </div>
  );
};

export default Nft;
