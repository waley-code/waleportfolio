import React from "react";
import NetflixImg from "../public/images/projects/netflix.jpg";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const netflix = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] lg:h-[40vh] relative">
        <div className=" absolute w-full h-[30vh] lg:w-[40vh] top-0 left-0 bg-black/80" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={NetflixImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] text-white z-10 right-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="py-2">Netflix Clone</h2>
          <h3>React JS / TypeScript / MongoDB</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            &apos;Neflix Clone&apos; is an enthralling streaming platform that
            brings the best of the cinematic world to audiences worldwide. This
            captivating project was meticulously built using cutting-edge
            technologies like React, MongoDB, TypeScript, and Prisma, ensuring a
            seamless user experience and a robust backend infrastructure. The
            front-end of &apos;Neflix Clone&apos; was crafted using React, a
            popular and dynamic JavaScript library, which allowed for the
            creation of a highly interactive and visually appealing user
            interface. The interface boasts a user-friendly design, making it
            easy for subscribers to navigate through the vast library of movies
            and TV shows available on the platform.
            <br />
            Behind the scenes, MongoDB, a NoSQL database, was employed to store
            and manage the extensive collection of multimedia content. This
            choice facilitated quick and efficient data retrieval, ensuring
            smooth playback and fast access to users&apos; favorite movies and
            TV series. TypeScript was utilized to bring an added layer of static
            typing to the project, enhancing code maintainability and reducing
            potential runtime errors. With TypeScript&apos;s type checking, the
            development process became more productive, leading to fewer bugs
            and smoother collaboration among team members.
            <br />
            Furthermore, &apos;Neflix Clone&apos; leverages Prisma, an
            open-source database toolkit, to seamlessly connect the front-end
            and back-end layers of the platform. This integration streamlined
            data management, allowing for effortless querying and manipulation
            of the content database. To cater to a global audience and provide a
            seamless experience across different devices, the project was
            deployed using Vercel, a versatile and efficient cloud platform.
            Vercel&apos;s global edge network ensures that users from various
            regions can access the platform with minimal latency, ensuring an
            exceptional streaming experience regardless of geographical
            location.
          </p>
          <Link href={"https://netflix-clone-depoly.vercel.app"}>
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
                <RiRadioButtonFill className="pr-2" /> Typescript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-2" /> MongoDB
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

export default netflix;
