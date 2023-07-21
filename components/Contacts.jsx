import React from "react";
import contactImg from "static/images/projects/contact.jpg";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import ContactForm from "./Form";

const Contacts = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className=" max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="uppercase tracking-widest text-xl text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get in Touch</h2>
        <div className="grid lg:grid-cols-5 grap-8">
          {/* Left */}
          <div className=" col-span-2 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <Image
                className="rounded-xl hover:scale-105 ease-in duration-300 group-hover:opacity-10"
                src={contactImg}
                alt="/"
              />
              <div className="">
                <h2 className="py-4">Pelumi Adeosun</h2>
                <p>Full-Stack Software Engineer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos; s talk
                </p>
              </div>
              <div className="">
                <p className="uppercase pt-8">Connect with me</p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                  <div className="flex items-center justify-around my-4 w-full sm:w-[100%] ">
                    <Link
                      href={
                        "https://www.linkedin.com/in/oyewale-adeosun-6b2203133/"
                      }
                    >
                      <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75">
                        <FaLinkedin />
                      </div>
                    </Link>
                    <Link href={"https://github.com/waley-code"}>
                      <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75">
                        <FaGithub />
                      </div>
                    </Link>
                    <Link
                      href={`mailto:${"walephlp@gamil.com"}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75">
                        <AiOutlineMail />
                      </div>
                    </Link>

                    <Link href={`tel:${`+2348131352515`}`}>
                      <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-75">
                        <BsPersonLinesFill />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className=" col-span-3 w-full h-auto shadow-xl shdow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              {/* <form>
                <div className=" grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 " htmlFor="">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="">
                    Message
                  </label>
                  <textarea
                    className=" border-2 rounded-lg p-3 border-gray-300"
                    rows={10}
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send message
                </button>
              </form> */}
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href={"/"}>
            <div
              className=" rounded-full shadow-lg shadow-gray-400
            p-6 cursor-pointer hover:scale-110 ease-in duration-75"
            >
              <HiOutlineChevronDoubleUp className="text-[#5651e5] size={30}" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
