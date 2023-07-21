import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about">
      <div className=" w-full md:h-screen p-2 flex items-center justify-center py-10">
        <div className="max-w-[1240px] md:grid grid-cols-3 gap-8">
          <div className=" col-span-2">
            <p className=" uppercase tracking-widest text-xl text-[#5651e5]">
              ABOUT
            </p>
            <h2 className="py-4">Who I Am</h2>
            <p className="py-2 text-gray-600">
              I am a solution driven Engineer
            </p>
            <p className="py-2 text-gray-600">
              A Full Stack Software Engineer with specialty in back-end
              development having proficiency in technologies such as C,
              JavaScript, Node.js, Python, Flask, MySQL, PostgreSQL, and
              MongoDB, having strong understanding of web development concepts,
              including web protocols, web services, and web architecture.
            </p>
            <br />
            <br />
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects
            </p>
          </div>
          <div className=" w-full h-auto m-auto shadow-xl rounded-xl flex items-center justify-center p-4 hover:scale-110 duration-500 ">
            <Image src={"/static/images/about1.png"} alt="/" width={800} height={200} />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;
