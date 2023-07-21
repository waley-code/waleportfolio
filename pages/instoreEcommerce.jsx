import React from "react";
import instoreImg from "../public/assets/projects/instore.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const instoreEcommerce = () => {
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
          <h2 className="py-2">Instore Ecommerce</h2>
          <h3>React JS / JavaScript / MongoDB</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            InStore is a sleek and efficient mini Instore Ecommerce project that
            enables users to browse and purchase products with ease. Developed
            using the powerful combination of React, MongoDB, TypeScript, and
            Prisma, this platform offers a seamless and secure shopping
            experience.
            <br />
            With InStore, customers can explore a wide variety of products, from
            trendy fashion items to cutting-edge gadgets, all from the comfort
            of their homes. The project&apos;s intuitive interface, built with
            React, ensures a user-friendly shopping journey, allowing users to
            effortlessly find and add items to their carts. To ensure a smooth
            checkout process, InStore integrates Stripe, a trusted and secure
            payment gateway. With Stripe, customers can confidently finalize
            their purchases, knowing that their sensitive payment information is
            handled with the utmost care. Under the hood, InStore utilizes
            MongoDB as the backend database, ensuring efficient data management
            and quick access to product information.
            <br />
            TypeScript adds an extra layer of reliability to the codebase,
            reducing errors and making the development process more productive
            and maintainable. Thanks to Vercel&apos;s seamless deployment
            capabilities, InStore is effortlessly accessible to customers
            worldwide. Whether it&apos;s on desktops, laptops, or mobile
            devices, the platform delivers a consistent and delightful shopping
            experience to every user. InStore empowers sellers to showcase their
            products and reach a broader audience, while providing shoppers with
            a convenient and secure ecommerce solution. Whether it&apos;s a
            fashion statement or the latest tech gadget, InStore makes online
            shopping a breeze, bringing joy and convenience to your doorstep.
          </p>
          <Link href={"https://instore-ecommerce.vercel.app"}>
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

export default instoreEcommerce;
