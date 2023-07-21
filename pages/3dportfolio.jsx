import React from "react";
import instoreImg from ".../public/images/projects/3Dportfolio.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Dportfolio = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] lg:h-[40vh] relative">
        <div className=" absolute w-full h-[30vh] lg:w-[40vh] top-0 left-0 bg-black/80" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={instoreImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] text-white z-10 right-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="py-2">3D Portfolio</h2>
          <h3>React JS / JavaScript / MongoDB</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            A captivating world of immersive visuals and artistic brilliance
            with my mini 3D portfolio project. Crafted using React, JavaScript,
            and the powerful 3JS library, this personal portfolio is a stunning
            display of creativity and technical finesse. Through the magic of
            3JS, my portfolio project brings to life an array of captivating 3D
            scenes and animations, showcasing my work in a truly unique and
            memorable way. From dynamic and interactive backgrounds to
            eye-catching object manipulations, my portfolio will stand out as an
            extraordinary masterpiece.
            <br />
            The combination of React and JavaScript allows for a seamless and
            responsive user interface, ensuring that visitors can explore my
            portfolio across various devices with ease. Each section of the
            portfolio is carefully designed to provide an intuitive and engaging
            user experience, allowing my work to take center stage. With the
            project deployed on GitHub Pages, my 3D portfolio is easily
            accessible to a global audience. Share my artistic myney, skills,
            and achievements with the world, as visitors from all corners of the
            globe can marvel at my talents and creativity. Experience the fusion
            of technology and artistry in my mini 3D portfolio project, a
            testament to my boundless imagination and dedication.
            <br />
            Open the door to new opportunities and collaborations as you
            showcase my work like never before. Let my portfolio speak volumes
            about my passion and expertise - it&apos;s time to unleash my
            creativity with my mesmerizing 3D portfolio showcase.
          </p>
          <Link href={"https://waley-code.github.io/portfolio"}>
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
                <RiRadioButtonFill className="pr-2" /> Google API
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

export default Dportfolio;
