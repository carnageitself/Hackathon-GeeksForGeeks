import React from "react";
import { motion } from "framer-motion";
import ComputerCanvas from "../canvas/Computer";
import StarCanvas from "../canvas/Stars";
import arrow from "../../../assets/arrow.png";

const Model = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-20 bg-transparent`}
      >
        <div className="flex flex-col justify-center items-center mt-5 bg-transparent">
          <div className="bg-transparent mt-auto flex flex-col">
            <h1 className="bg-gradient-to-r from-cyan-300 to-blue-600 inline-block text-transparent bg-clip-text font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
              Use Cloudcore to{" "}
              <span className="text-white bg-transparent">
                <u className="underline bg-transparent">
                  store
                  <br className="bg-transparent" /> and retrieve
                </u>{" "}
              </span>
              data
            </h1>
            <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block bg-clip-text font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-transparent">
              A powerful and dynamic distributed cloud{" "}
              <br className="sm:block hidden" />
              storage network for your data.
            </p>
            <button className="bg-transparent text-white border border-white rounded-full my-8 w-48 h-10 flex items-center justify-center">
              Store your data{" "}
              <img
                className="w-[20%] h-8 object ml-1 bg-transparent"
                src={arrow}
              />
            </button>
          </div>
        </div>
      </div>

    
    </section>
  );
};

export default Model;
