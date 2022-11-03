import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../assets/images/yantra-logo.svg'
import style from "./navbar.module.css";
import WalletManager from "../WalletManager";

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
          <img src={Logo.src} alt="" />
        </div>
        <div className={style.navbar__right}>
          <button onClick={openModal} className={style.connect_btn}>Connect Wallet</button>
        </div>
      </div>
      <WalletManager isOpen={isDialogOpen} onCloseModal={closeModal} />
    </>
  )
}

export default Navbar