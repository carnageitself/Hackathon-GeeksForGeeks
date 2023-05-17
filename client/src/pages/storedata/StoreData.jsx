import React from "react";
import Navbar from "../components/navbar/Navbar";
import Upload from "../../artifacts/contracts/Upload.sol/Upload.json";
import { ethers } from "ethers";
import FileUpload from "./FileUpload";
import Display from "./Display";
import Modal from "./Modal";
import { useState } from "react";
import { useEffect } from "react";
import { styles } from "../../constants/styles";

const StoreData = () => {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.log("Metamask is not Installed");
      }
    };
    provider && loadProvider();
  }, []);

  return (
    <div className="storedata scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-grey-transparent scrollbar-thumb-rounded-md">
      <Navbar />

      <div className="App mt-20 h-full mx-20">
        <h1 style={{ color: "white" }} className={`${styles.sectionHeadText}`}>
          Upload your Details
        </h1>

       
        <p className="text-xl  text-white">
          Account: {account ? account : "Please connect Metamask"}
        </p>

        <FileUpload
          account={account}
          provider={provider}
          contract={contract}
        ></FileUpload>
        <Display contract={contract} account={account}></Display>
        <div className="data w-full h-48 flex justify-between mt-10">
        <h1 className={`${styles.sectionHeadText}`}>Share your Insights</h1>
          {!modalOpen && (
            <button className="share border w-32 h-10 rounded-lg mt-5 justify-end mr-20 text-white" onClick={() => setModalOpen(true)}>
              Share
            </button>
          )}{" "}
          {modalOpen && (
            <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreData;
