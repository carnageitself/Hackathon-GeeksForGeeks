import { useState } from "react";
import { styles } from "../../constants/styles";

const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
    } catch (e) {
      alert("You don't have access");
    }
    const isEmpty = Object.keys(dataArray).length === 0;

    if (!isEmpty) {
      const str = dataArray.toString();
      const str_array = str.split(",");
      console.log(str);
      console.log(str_array);
      const images = str_array.map((item, i) => {
        return (
          <a href={item} key={i} target="_blank">
            <img
              key={i}
              src={item}
              alt="new"
              className="image-list w-[250px] h-[250px]"
            ></img>
          </a>
        );
      });
      setData(images);
    } else {
      alert("No image to display");
    }
  };
  return (
    <>
      <h1 className={`${styles.sectionHeadText} h-30`}>Your Results</h1>
      <div className="image-list">{data}</div>
      <div className="flex justify-between items-center">
      <input
        type="text"
        placeholder="Enter Address"
        className="address border flex h-10 p-2 text-gray-300"
      ></input>

      <button className="button border rounded-lg cursor-pointer w-32 h-10 mt-5 mr-20  text-white" onClick={getdata}>
        Get Results
      </button>
      </div>
    </>
  );
};
export default Display;
