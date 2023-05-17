import React from "react";
import axios from "axios";
import { useState } from "react";
import logo from "../../assets/cloud.png"


const FileUpload = ({ contract, account, provider }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No Image Selected");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `
            0e7204093697cd01dec4`,
            pinata_secret_api_key: `b2456fdb4da6abb1cd2d16b1adc33f51a9df4f78c189c31d26a2b8f2bae43e79`,
            "Content-Type": "multipart/form-data",
          },
        });

        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        //const signer = contract.connect(provider.getSigner())
        contract.add(account, ImgHash);
        alert("Succesfully Image Uploaded");
        setFileName("No Image Selected");
        setFile(null);
      } catch (error) {
        alert("Unable to upload image to Pinata");
      }
    }
  };

  const retrieveFile = (e) => {
    const data = e.target.files[0]; //array of files
    console.log(data);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFileName(e.target.files[0].name);
    e.preventDefault();
    
  };

  return (
    <div className="top">
      <form className="form w-full h-[30vh]" onSubmit={handleSubmit}>
        <div className="flex items-center">
        <span className="textArea text-xl flex-1 h-32 flex flex-col  text-white">Image : {fileName}
        <label htmlFor="file-upload" className="choose border rounded-lg w-32 h-10 cursor-pointer mt-5 flex items-center justify-center  text-white">Choose File</label>
        <input disabled={!account} type="file" id="file-upload" name="data" onChange={retrieveFile} className=""/>
        <button type="submit" className="upload border rounded-lg w-32 h-10 cursor-pointer mt-5 text-white" disabled={!file}>
          Upload File
        </button>
        </span>
        <img src={logo} alt="" className="flex-2 justify-end h-full"/>
        </div>
        <div className="formData flex flex-1">
        
        </div>
      </form>
    </div>
  );
};

export default FileUpload;
