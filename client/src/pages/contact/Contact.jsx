import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../../constants/styles";
import EarthCanvas from "../components/canvas/Earth";
import { slideIn } from "../../constants/motion";
import Navbar from "../components/navbar/Navbar";
import { Link } from "react-router-dom";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_u96ktuk",
        "template_3dsy6sq",
        {
          from_name: form.name,
          to_name: "Cloudcore",
          from_email: form.email,
          to_email: "carnageitself@gmail.com",
          message: form.message,
        },
        "oiyK82ekyOKggogpg"
      )
      .then(() => {
        setLoading(false);
        alert("Thank you, I will get back to you ASAP !");
        setForm({
          name: "",
          email: "",
          message: "",
        }),
          (error) => {
            setLoading(false);
            console.log(error);
            alert("Something went wrong !");
          };
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  //template_3dsy6sq
  //service_u96ktuk
  //oiyK82ekyOKggogpg

  return (
    <div className="contact scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-grey-transparent scrollbar-thumb-rounded-md">
      <Navbar />
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black p-8 rounded-2xl"
        >
          <h3 className={`${styles.sectionHeadText}`}>Contact</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur-xl opacity-80 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 w-full"></div>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your Good Name?"
                  className="bg-black py-4 px-6 placeholder:text-gray text-white rounded-lg outline-none font-medium border-none relative w-full"
                />
              </div>
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur-xl opacity-80 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 w-full"></div>
                <input
                  type="text"
                  name="name"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your Web Address?"
                  className="bg-black py-4 px-6 placeholder:text-gray text-white rounded-lg outline-none font-medium border-none relative w-full"
                />
              </div>
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur-xl opacity-80 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 w-full"></div>
                <textarea
                rows={3}
                  type="text"
                  name="name"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hello there, how can I help you?"
                  className="bg-black py-4 px-6 placeholder:text-gray text-white rounded-lg outline-none  font-medium border-none relative w-full resize-none"
                />
              </div>
            </label>

            <div className="relative group mt-3">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur-xl opacity-80 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 w-28"></div>
              <button
                type="submit"
                className="bg-black py-3 px-8 rounded-xl outline-none w-fit  text-gray-300 group-hover:text-white transition duration-200 font-light relative"
                
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </motion.div>

        <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
      </div>
    </div>
  );
};

export default Contact;
