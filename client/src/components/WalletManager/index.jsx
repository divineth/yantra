import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import style from "./wallet-manager.module.css";
import MetaMask from "../../assets/images/metamask.png";
import WalletConnect from "../../assets/images/walletConnect.svg";
import Coinbase from "../../assets/images/coinbase.svg";

const providers = [
    {
        options: {},
        displayName: "MetaMask",
        icon: MetaMask,
    },
    {
        options: { provider: "walletconnect" },
        displayName: "Coinbase Wallet",
        icon: Coinbase
    },
    {
        options: { provider: "walletconnect" },
        displayName: "WalletConnect",
        icon: WalletConnect
    },

]

function WalletManager({ isOpen, onCloseModal }) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const walletAddress = "0xabcd";

    return(
    <>
      <Transition appear show={isOpen && !isAuthenticated} as={Fragment}>
        <Dialog as="div" className={style.wallet_dialog} onClose={onCloseModal}>
          <div className={style.wallet_dailog_containter}>
            <Dialog.Overlay className={style.wallet_dialog_overlay} />

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className={style.wallet_dialog_containter_spacer}
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className={style.wallet_dialog_content}>
                <div className={style.wallet_dialog_header}>
                  <div className={style.wallet_dialog_header_content}>
                      <Dialog.Title as="h3" className={style.wallet_dialog_title}>
                        Select a wallet
                      </Dialog.Title>
                      <span
                        onClick={onCloseModal}
                        className={style.wallet_dialog_close}
                      >
                        &times;
                      </span>
                  </div>
                </div>

                <div className={style.wallet_dialog_providers}>
                  <ul className={style.wallet_dialog_providers_list}>
                    {providers.map(({ options, displayName, icon }, key) => (
                      <li key={key}>
                        <button onClick={() => setIsAuthenticated(false)}>
                          <img src={icon} alt={displayName} />
                          <span>{displayName}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={isOpen && isAuthenticated} as={Fragment}>
        <Dialog as="div" className={style.wallet_dialog} onClose={onCloseModal}>
          <div className={style.wallet_dailog_containter}>
            <Dialog.Overlay className={style.wallet_dialog_overlay} />

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className={style.wallet_dialog_containter_spacer}
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className={style.wallet_dialog_content}>
                <div className={style.wallet_dialog_header}>
                  <Dialog.Title as="h3" className={style.wallet_dialog_title}>
                    Account
                  </Dialog.Title>

                  <span
                    onClick={onCloseModal}
                    className={style.wallet_dialog_close}
                  >
                    &times;
                  </span>
                </div>

                <div className={style.wallet_dialog_body}>
                  <div className={style.wallet_dialog_provider}>
                    <p>Connected with X</p>
                    <button
                      className={style.wallet_dialog_disconnect}
                    >
                      Disconnect
                    </button>
                  </div>

                  <div className={style.wallet_dialog_address}>
                    <p>{walletAddress}</p>
                    <div className={style.wallet_dialog_address_copy_etherscan}>
                        <p className={style.wallet_dialog_bottom_text}>
                          <img
                            src={require("../../assets/images/copy.svg")}
                            alt="etherscan"
                          />
                          <span>Copy address</span>
                          {true ? (
                            <span className={style.tooltip}>Copied.</span>
                          ) : null}
                        </p>

                      <p className={style.wallet_dialog_bottom_text}>
                        <a
                          href={`https://etherscan.io/address/${walletAddress}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={require("../../assets/images/xternal-link.svg")}
                            alt="etherscan"
                          />
                          <span>View on Etherscan</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>            
    </>
    )
}

export default WalletManager;