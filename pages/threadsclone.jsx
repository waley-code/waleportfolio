import React from "react";
import threads from "../public/images/projects/treadsfull.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Threads = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] lg:h-[40vh] relative">
        <div className=" absolute w-full h-[30vh] lg:w-[40vh] top-0 left-0 bg-black/80" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={threads}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] text-white z-10 right-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="py-2">Threads Clone App</h2>
          <h3>Next.js 13, React, TypeScript</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Welcome to the Threads App Clone! This is a modern web application
            built using the latest features of Next.js 13, with a focus on
            seamless user experience, robust authentication, and interactive
            community engagement. The app empowers users to engage in
            discussions, share insights, and create vibrant communities. Threads
            App Clone leverages cutting-edge technologies to provide a
            feature-rich experience while ensuring mobile responsiveness and
            data security.
          </p>
          <Link href={"https://threads-app-one.vercel.app"}>
            <button className="px-8 py-2 mt-4 mr-8">Live Project</button>
          </Link>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>
        <div className=" col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className=" text-center font-bold pb-2">Technologies</p>
            <div className=" grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> Clerk Authentication
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> Next
              </p>
            </div>
          </div>
        </div>
        <Link href={"/"}>
          <p className=" underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Threads;
