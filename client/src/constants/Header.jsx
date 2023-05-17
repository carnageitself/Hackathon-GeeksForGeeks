import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import bg from "../assets/ui2.png";

const Header = () => {
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts[0]);
      } catch (error) {
        console.error(error.message);
      }
    } else {
      console.log("Metamask is not installed");
    }
  };

  const getCurrentWalletConnected = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } else {
          console.log("Connect to Metamask using the Connect button");
        }
      } catch (error) {
        console.error(error.message);
      }
    } else {
      console.log("Metamask is not installed");
    }
  };

  useEffect(() => {
   // getCurrentWalletConnected();
   // addWalletListener()
  });

  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", ()=> {
        setWalletAddress(accounts[0])
        console.log(accounts[0])

      })
    } else {
      setWalletAddress("")
      console.log("Metamask is not installed");
    }
  };

  const commonStyles =
    "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

  return (
    <div className="header mt-5 inset-0 top-[120px] max-w-8xl flex flex-row items-start z-10 bg-transparent relative">
      <div className=" md:flex-row flex flex-1 items-start justify-between md:p-20 py-12 px-4 mx-auto">
        <div className="flex justify-start flex-col">
          <h1 className={`${styles.sectionHeadText}`}>
            The decentralized <br /> cloud is here
          </h1>
          <p className="text-left mt-5 text-white font-light mf:w-9/12 w-11/12 text-xl">
            Cryptographic proofs guarantee your data remains available and
            unchanged over time.
          </p>
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10 border rounded-xl">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
            <div className={commonStyles}>Security</div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>Ethereum</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
            <div className={commonStyles}>IPFS</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>Blockchain</div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded w-48 my-5 p-3 blur-xl opacity-80 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button
              className="my-5 p-3 relative bg-black rounded-xl w-48 leading-none flex items-center"
              onClick={connectWallet}
            >
              <p className="text-gray-400 text-base font-semibold group-hover:text-white transition duration-200">
                {walletAddress.length > 0
                  ? `Connected: ${walletAddress.substring(
                      0,
                      6
                    )}...${walletAddress.substring(38)}`
                  : "Connect Wallet"}
              </p>
            </button>
          </div>
        </div>
        <div className="footer mt-5 inset-0 top-[120px] max-w-8xl flex flex-row z-10 bg-transparent relative">
          <div className=" justify-end items-center flex-col rounded-xl sm:w-72">
            <img src={bg} alt="" className="w-96 h-96"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
