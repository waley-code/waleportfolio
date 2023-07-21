import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about">
      <div className=" w-full md:h-screen lg:h-screen min-h-max py-20 p-2 flex items-center justify-center ">
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
              I believe the world of today relies on technology driven solutions
              ranging from health science to business and having basic human needs
              being met with the help of technology.
              <br /><br />
              I strongly believe
              providing these technology driven solutions will help in resolving
              previous difficult problems encountered by individuals who will be
              able to leverage the solutions in various aspects of their lives.
            </p>
            <br />
            <br />
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects
            </p>
          </div>
          <div className=" w-full h-auto m-auto shadow-xl rounded-xl flex items-center justify-center p-4 hover:scale-110 duration-500 ">
            <Image
              src={"/images/about1.png"}
              alt="/"
              width={800}
              height={200}
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;
