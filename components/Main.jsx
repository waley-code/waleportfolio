import React from 'react';
import { FaLinkedin, FaGithub} from "react-icons/fa";
import { BsPersonLinesFill} from "react-icons/bs";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import Link from 'next/link';


const Main = () => {
  return (
    <div className="flex w-full h-screen text-center bg-[#3e3e42] text-white">
      <div className=" max-w-[1240px] w-full mx-auto p-2 flex justify-center  items-center">
        <div className="">
          <p className="uppercase text-sm tracking-widest text-gray-100">
            LET&apos;S BUILD SOLUTIONS TOGETHER
          </p>
          <h1 className="py-4 text-gray-100">
            Hi, I&apos;m <span className="text-[#5651e5]">Pelumi </span>{" "}
          </h1>
          <h1 className="py-4 text-700">A Full-Stack Software Engineer</h1>
          <div className="">
            <p className="py-4 text-gray-100 max-w-[70%] m-auto ">
              A Full Stack Software Engineer with specialty in back-end
              development having proficiency in technologies such as C,
              JavaScript, Node.js, Python, Flask, MySQL, PostgreSQL, and
              MongoDB, having strong understanding of web development concepts,
              including web protocols, web services, and web architecture.
            </p>

            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
              <Link
                href={"https://www.linkedin.com/in/oyewale-adeosun-6b2203133/"}
              >
                <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-75">
                  <FaLinkedin />
                </div>
              </Link>
              <Link href={"https://github.com/waley-code"}>
                <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-75">
                  <FaGithub />
                </div>
              </Link>
              <Link
                href={`mailto:${"walephlp@gamil.com"}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-75">
                  <AiOutlineMail />
                </div>
              </Link>

              <Link href={`tel:${`+2348131352515`}`}>
                <div className=" rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-75">
                  <BsPersonLinesFill />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main