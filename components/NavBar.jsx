import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub} from "react-icons/fa";
import { BsPersonLinesFill} from "react-icons/bs";
import {  useRouter } from "next/router";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(()=>{
    if (
      router.asPath === "/netflix" ||
      router.asPath === "/3dportfolio" ||
      router.asPath === "/instoreEcommerce" 
    ) {
      setNavBg('transparent');
      setLinkColor("#ecf0f3");
    }else{
            setNavBg("#ecf0f3");
            setLinkColor("#1f2937");
    }
  }, [router])

  const handleNavBar = () => {
    setNav(!nav)
  };

  useEffect(()=>{
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      }else{
        setShadow(false)
      }
      }
      window.addEventListener('scroll', handleShadow)
  },[])

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-15 shadow-xl z-[100]"
          : "fixed w-full h-15 z-[100]"
      }
    >
      <div className="flex justify-between bg-[#ecf0f3] items-center w-full px-4 py-2 2xl:px-16 ">
        <Link href={"/"}>
          <Image
            src={"/images/navLogo.png"}
            alt="/"
            width={125}
            height={50}
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className=" hidden md:flex">
            <Link href={"/"}>
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href={"/#about"}>
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href={"/#skills"}>
              <li className="ml-10 text-sm uppercase hover:border-b">Skils</li>
            </Link>
            <Link href={"/#proj"}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href={"/#contact"}>
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNavBar} className="md:hidden">
            <AiOutlineMenu size={"25"} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? `md:hidden fixed left-0 top-0 w-full h-screen bg-black/70` : ""
        }
      >
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[30%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed top-0 left-[-100%]  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href={"/"}>
                <Image
                  src={"/images/navLogo.png"}
                  alt="/"
                  width={125}
                  height={50}
                />
              </Link>
              <div
                onClick={handleNavBar}
                className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b  border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Lets Buid World Solutions
              </p>
            </div>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              <Link href={"/"}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href={"/#about"}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href={"/#skills"}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href={"/#proj"}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href={"/#contact"}>
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className=" uppercase tracking-widest text-[#5e51e5]">
                Lets&apos;s connect
              </p>
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
    </div>
  );
};

export default NavBar;
