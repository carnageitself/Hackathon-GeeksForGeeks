import React, { useEffect } from "react";


const Modal = ({ contract, setModalOpen }) => {
  const sharing = async () => {
    const address = document.querySelector(".address").value;
    await contract.allow(address);
    console.log("Shared");
  };

  useEffect(() => {
    const accessList = async () => {
      const addressList = await contract.shareAccess();
      let select = document.querySelector("#selectNumber");
      const options = addressList;

      for (let i = 0; i < options.length; i++) {
        let opt = options[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
      }
    };
    contract && accessList();
  }, []);

  return (
    <div className="modalBackground flex justify-end w-full">
      <div className="modalContainer border justify-center flex flex-col rounded-lg w-72 items-center  text-white">
        <div className="title text-lg  text-white">Share with</div>
        <div className="body">
          <input type="text" className="address border border-xl p-2 text-gray-300" placeholder="Enter Address" />
        </div>
        <form id="myForm">
          <select name="" id="selectNumber">
            <option className="adress mt-2  text-white">People with access</option>
          </select>
        </form>
        <div className="footer mt-6 gap-3">
          <button onClick={()=> {setModalOpen(false)}} id="button" className="border w-32 h-10 rounded-lg cursor-pointer  text-white">cancel</button>
          <button onClick={()=>sharing} className="border w-32 h-10 rounded-lg cursor-pointer  text-white">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
