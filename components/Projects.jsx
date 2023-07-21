import Image from "next/image";
import React from "react";
import PortfolioImg from "../public/images/projects/personalPortfolio.png";
import NetflixImg from "../public/images/projects/netflix.jpg";
import TwitterImg from "../public/images/projects/3Dportfolio.png";
import InStoreImg from "../public/images/projects/instore.png";
import Link from "next/link";
import ProjectItemCard from "./ProjectItemCard";

const Projects = () => {
  return (
    <div id="proj" className="w-full">
      <div className="max-w-w[1240px]  mx-auto px-2 py-28">
        <p className=" uppercase tracking-widest text-xl text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItemCard
            title="InStore Ecommerce Store"
            backgroundImg={InStoreImg}
            projectUrl="/instoreEcommerce"
            techStack={("React Js", "Tailwind")}
          />
          <ProjectItemCard
            title="Netflix Clone"
            backgroundImg={NetflixImg}
            projectUrl="/netflix"
            techStack={"React Js"}
          />
          <ProjectItemCard
            title="3D Portfolio"
            backgroundImg={TwitterImg}
            projectUrl="/3dportfolio"
            techStack={("React Js", "Tailwind")}
          />
          <ProjectItemCard
            title="My Portfolio"
            backgroundImg={PortfolioImg}
            projectUrl="/"
            techStack={("React Js", "Tailwind")}
          />
          {/* <ProjectItemCard
            title="Business DashBoard"
            backgroundImg={DashBoardImg}
            projectUrl="/"
            techStack={("React Js", "Tailwind")}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
