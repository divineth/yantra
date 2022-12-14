import React from "react";
import style from "./mint-widget.module.css";
import NFTPlaceholder from "../../assets/images/yantra-nft-placeholder.jpg";
import CustomSlider from "../CustomSlider";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 6,
    label: "6",
  },
  {
    value: 8,
    label: "8",
  },
  {
    value: 10,
    label: "10",
  },
];

const MintWidget = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.mint__header}>
          <h2>Mint Your NFT</h2>
          <p>
            <span className="text-[#FB2032]">Total Supply:</span> 5000
          </p>
        </div>
        <div className={style.mint__info}>
          <img src={NFTPlaceholder.src} alt="" />
          <div className={style.mint__info__text}>
            <p>Price Per $YANTRA NFT</p>
            <h3>Not Connected</h3>
          </div>
        </div>
        <div className={style.mint__form}>
          <div className={style.mint__price}>
            <h3>Price</h3>
            <h3>0.06ETH</h3>
          </div>
          <input type="text" />
          <div className={style.mint__slider}>
            <CustomSlider
              aria-label="amount"
              defaultValue={0}
              valueLabelDisplay="auto"
              step={1}
              min={0}
              max={10}
              marks={marks}
            />
            <button>Max</button>
          </div>
        </div>
        <div className={style.mint__buttons}>
          <button>Connect Wallet</button>
        </div>
      </div>
    </div>
  );
};

export default MintWidget;
