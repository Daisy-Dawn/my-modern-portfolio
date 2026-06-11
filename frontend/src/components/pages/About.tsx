import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-[50vh] gap-[3rem] grid md:grid-cols-2 grid-cols-1 xl:px-[5rem] md:px-[2rem] px-[1rem]  py-[4rem] items-center"
    >
      {/* about me */}
      <div className=" flex flex-col gap-4">
        <div className="px-4 w-fit py-2 bg-darkGreen text-white">
          Welcome! I&apos;m
        </div>

        <div className="flex flex-col gap-2">
          <p className="capitalize text-lemonGreen text-[35px] font-inter font-semibold">
            Agbo Emmanuella amarachukwu
          </p>
          <p className="capitalize text-lightGrey text-[18px] font-roboto">
            Frontend Web Developer
          </p>
        </div>

        <p className="font-roboto text-[#f1f0f0] text-justify">
          Frontend Engineer with 3+ years of experience building modern,
          scalable web applications using React, Next.js, TypeScript, and
          JavaScript. Passionate about crafting fast, accessible, and intuitive
          user experiences while maintaining clean, maintainable codebases.
          Experienced working remotely with international teams and clients
          across the US, UK, and Canada, delivering production-ready products in
          both Web2 and Web3 environments. <br />
          Strong understanding of frontend architecture, state management, API
          integration, responsive design, and performance optimization. Adept at
          taking ownership of features from design to deployment, collaborating
          across time zones, and translating complex requirements into polished
          user interfaces that drive business value.
        </p>
      </div>

      {/* image */}
      <div className="w-full relative flex justify-center h-[300px] items-center ">
        {/* shape */}
        {/* <div className="absolute w-[400px] h-[400px] bg-darkGrey rounded-full border-[1px] border-dashed border-lightBg   opacity-50 -z-10"></div> */}
        {/* <div className="absolute w-[200px] h-[200px] bg-lightGrey rounded-full  opacity-20 -z-10 bottom-10 right-10"></div> */}

        {/* image */}
        <Image
          alt="my-image"
          width={150}
          height={150}
          className=" opacity-40 object-cover w-full h-full "
          src="/images/front2.jpg"
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default About;
