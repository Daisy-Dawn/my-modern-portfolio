import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-[50vh] grid md:grid-cols-2 grid-cols-1 xl:px-[5rem] md:px-[2rem] px-[1rem] lg:pt-[2rem] pt-[3rem] items-center"
    >
      {/* about me */}
      <div className=" flex flex-col gap-4">
        <div className="px-4 w-fit py-2 bg-darkGreen text-white">
          Welcome! I&apos;M
        </div>

        <div className="flex flex-col gap-2">
          <p className="capitalize text-lemonGreen  text-[35px] font-playwrite font-semibold">
            Agbo Emmanuella amarachukwu
          </p>
          <p className="capitalize text-lightGrey text-[18px] font-roboto">
            Fullstack Web Developer
          </p>
        </div>

        <p className="font-roboto text-[#f1f0f0] text-justify">
          Full-stack developer with 3+ years of experience building scalable web
          applications across Web2 and Web3. Strong frontend focus using React,
          Next.js, and TypeScript, with solid backend experience in Node.js and
          Python. Experienced working remotely with international teams and
          clients across the US, UK, and Canada, both as a contract developer
          and freelancer. Comfortable in async environments, cross-time-zone
          collaboration, and shipping production-ready products. <br />
          Proven ability to take ownership of projects end-to-end, contribute to
          Web3 ecosystems, and deliver clean, performant user experiences
        </p>
      </div>

      {/* image */}
      <div className="w-full relative flex justify-center items-center h-[600px]">
        {/* shape */}
        {/* <div className="absolute w-[400px] h-[400px] bg-darkGrey rounded-full border-[1px] border-dashed border-lightBg   opacity-50 -z-10"></div> */}
        {/* <div className="absolute w-[200px] h-[200px] bg-lightGrey rounded-full  opacity-20 -z-10 bottom-10 right-10"></div> */}

        {/* image */}
        <Image
          alt="my-image"
          width={500}
          height={300}
          className="w-full h-full opacity-40 object-top object-cover"
          src="/images/image1.png"
        />
        {/* </div> */}
      </div>
    </div>
  );
};

export default About;
