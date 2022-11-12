import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Add, ArrowRight2 } from "iconsax-react";

const NavBar = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
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

          <button
            onClick={openModal}
            className="bg-primary text-white px-5 py-2 rounded-lg text-sm"
          >
            Connect Wallet
          </button>
        </navbar>
      </header>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 font-rr" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white py-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex items-center justify-between border-b pb-3 px-6">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Connect Wallet
                    </Dialog.Title>
                    <div
                      className="cursor-pointer rotate-45"
                      onClick={closeModal}
                    >
                      <Add color="#000" variant="Outline" size={32} />
                    </div>
                  </div>
                  <div className="mt-5 px-6">
                    <h5 className="text-xs">Choose your preferred wallet</h5>

                    <div className="mt-5 space-y-3">
                      <div className="wallet">
                        <div className="flex items-center space-x-2">
                          <img src="/metamassk.svg" alt="" />
                          <p className="font-semibold">Metamask</p>
                        </div>
                        <ArrowRight2 color="#000" />
                      </div>
                      <div className="wallet">
                        <div className="flex items-center space-x-2">
                          <img src="/wallettconnect.svg" alt="" />
                          <p className="font-semibold">WalletConnect</p>
                        </div>
                        <ArrowRight2 color="#000" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4"></div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default NavBar;
