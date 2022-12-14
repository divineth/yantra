import React, { useState } from "react";
import Link from "next/link";
import Logo from "../../assets/images/yantra-logo.svg";
import style from "./navbar.module.css";
import WalletManager from "../WalletManager";
import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function closeModal() {
    setIsDialogOpen(false);
  }

  function openModal() {
    setIsDialogOpen(true);
  }

  return (
    <>
      <div className={style.navbar}>
        <div className={style.navbar__left}>
          <Link href="/stake">
            <img src={Logo.src} alt="" />
          </Link>
        </div>
        <div className={style.navbar__right}>
          <Link href="/stake">Stake</Link>
          <Link href="/mint">Mint NFT</Link>
          <button onClick={openModal} className={style.connect_btn}>
            Connect Wallet
          </button>
        </div>
        <Popover className={style.mobile__menu}>
          {({ open }) => (
            <>
              <Popover.Button
                className={`${
                  open ? "" : "text-opacity-90"
                } text-white group px-3 py-2 rounded-md inline-flex items-center outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <Bars3Icon
                  className={`${open ? "" : "text-opacity-100"}
                  h-8 w-8 text-white transition duration-150 ease-in-out group-hover:text-opacity-80`}
                  aria-hidden="true"
                />
              </Popover.Button>
              <Popover.Panel className="absolute z-10 w-screen px-4 mt-3 left-0 right-0 ">
                <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-4 bg-black p-4">
                    <div className="flex nexa-reg-18 text-white flex-col gap-4">
                      <Link href="/stake">Stake</Link>
                      <Link href="/mint">Mint NFT</Link>
                      <button onClick={openModal} className={style.connect_btn}>
                        Connect Wallet
                      </button>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </>
          )}
        </Popover>
      </div>
      <WalletManager isOpen={isDialogOpen} onCloseModal={closeModal} />
    </>
  );
};

export default Navbar;
