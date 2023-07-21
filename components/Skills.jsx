import Image from "next/image";
import React from "react";
import html from "../public/images/skills/html.png";

const Skills = () => {
  return (
    <div id="skills" className=" w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center  h-full">
        <p className="flex uppercase tracking-widest text-xl text-[#5651e5]">
          Skills
        </p>
        <div>
          {/* Front End start */}
          <h2 className="py-4">Front-End Tech Stack</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {/* first skill start */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img src={html} alt="/" width={64} height={64} />
                </div>
                <div className=" flex flex-col items-center justify-around">
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
            {/* First skill ends */}
            {/* 2 skill start */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <img
                    src={"/images/skills/css.png"}
                    alt="/"
                    width={64}
                    height={64}
                  />
                </div>
                <div className=" flex flex-col items-center justify-around">
                  <h3>CSS</h3>
                </div>
              </div>
            </div>
            {/* 2skill ends */}
            {/* 3 skill start */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={"/images/skills/javascript.png"}
                    alt="/"
                    width={64}
                    height={64}
                  />
                </div>
                <div className=" flex flex-col items-center justify-around">
                  <h3>Javascript</h3>
                </div>
              </div>
            </div>
            {/* 3 skill ends */}
            {/* 4 skill start */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={"/images/skills/react.png"}
                    alt="/"
                    width={64}
                    height={64}
                  />
                </div>
                <div className=" flex flex-col items-center justify-around">
                  <h3>REACT</h3>
                </div>
              </div>
            </div>
            {/* 4 skill ends */}
            {/* first skill start */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={"/images/skills/tailwind.png"}
                    alt="/"
                    width={64}
                    height={64}
                  />
                </div>
                <div className=" flex flex-col items-center justify-around">
                  <h3>Tailwind</h3>
                </div>
              </div>
            </div>
            {/* First skill ends */}
            {/* 2 skill start */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={"/images/skills/firebase.png"}
                    alt="/"
                    width={64}
                    height={64}
                  />
                </div>
                <div className=" flex flex-col items-center justify-around">
                  <h3>Firebase</h3>
                </div>
              </div>
            </div>
            {/* 2skill ends */}
            {/* 3 skill start */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={"/images/skills/github1.png"}
                    alt="/"
                    width={64}
                    height={64}
                  />
                </div>
                <div className=" flex flex-col items-center justify-around">
                  <h3>GitHub</h3>
                </div>
              </div>
            </div>
            {/* 3 skill ends */}
            {/* 4 skill start */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={"/images/skills/nextjs.png"}
                    alt="/"
                    width={64}
                    height={64}
                  />
                </div>
                <div className=" flex flex-col items-center justify-around">
                  <h3>Next</h3>
                </div>
              </div>
            </div>
            {/* 4 skill ends */}
          </div>
          {/* Front End Ens */}
        </div>
        <div>
          {/* BACK End start */}
          <h2 className="py-4">Back-End Tech Stack</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {/* first skill start */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={"/images/skills/mongo.png"}
                    alt="/"
                    width={64}
                    height={64}
                  />
                </div>
                <div className=" flex flex-col items-center justify-around">
                  <h3>MongoDB</h3>
                </div>
              </div>
            </div>
            {/* First skill ends */}
            {/* 2 skill start */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={"/images/skills/node.png"}
                    alt="/"
                    width={64}
                    height={64}
                  />
                </div>
                <div className=" flex flex-col items-center justify-around">
                  <h3>Nodejs</h3>
                </div>
              </div>
            </div>
            {/* 2skill ends */}
            {/* 3 skill start */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={"/images/skills/javascript.png"}
                    alt="/"
                    width={64}
                    height={64}
                  />
                </div>
                <div className=" flex flex-col items-center justify-around">
                  <h3>Javascript</h3>
                </div>
              </div>
            </div>
            {/* 3 skill ends */}
            {/* 4 skill start */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={"/images/skills/python.png"}
                    alt="/"
                    width={64}
                    height={64}
                  />
                </div>
                <div className=" flex flex-col items-center justify-around">
                  <h3>Python</h3>
                </div>
              </div>
            </div>
            {/* 4 skill ends */}
            {/* first skill start */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={"/images/skills/ccc.png"}
                    alt="/"
                    width={64}
                    height={64}
                  />
                </div>
                <div className=" flex flex-col items-center justify-around">
                  <h3>C#</h3>
                </div>
              </div>
            </div>
            {/* First skill ends */}
            {/* 2 skill start */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={"/images/skills/docker.png"}
                    alt="/"
                    width={64}
                    height={64}
                  />
                </div>
                <div className=" flex flex-col items-center justify-around">
                  <h3>Docker</h3>
                </div>
              </div>
            </div>
            {/* 2skill ends */}
            {/* 3 skill start */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={"/images/skills/sql.png"}
                    alt="/"
                    width={64}
                    height={64}
                  />
                </div>
                <div className=" flex flex-col items-center justify-around">
                  <h3>SQL</h3>
                </div>
              </div>
            </div>
            {/* 3 skill ends */}
            {/* 4 skill start */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={"/images/skills/net.png"}
                    alt="/"
                    width={64}
                    height={64}
                  />
                </div>
                <div className=" flex flex-col items-center justify-around">
                  <h3>.NET</h3>
                </div>
              </div>
            </div>
            {/* 4 skill ends */}
            {/* 4 skill start */}
            <div className="p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image
                    src={"/images/skills/redis.png"}
                    alt="/"
                    width={64}
                    height={64}
                  />
                </div>
                <div className=" flex flex-col items-center justify-around">
                  <h3>Redis</h3>
                </div>
              </div>
            </div>
            {/* 4 skill ends */}
          </div>
          {/* BACK End Ens */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
