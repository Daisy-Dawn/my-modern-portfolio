"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const Portfolio = () => {
  // const [selectedFilter, setSelectedFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const portfolio = [
    {
      image: "/images/portfolio/hunt-sponsor.png",
      link: "https://www.huntsponsor.com/",
      github: "https://github.com/Daisy-Dawn/hunt-sponsor-1",
      name: "Hunt Sponsor",
      tag: "web2_works",
      type: "personal",
    },
    {
      image: "/images/portfolio/sampees.png",
      link: "https://sampeesglobal.com/",
      github: "https://github.com/Daisy-Dawn/sampees-website",
      name: "Sampees Global Resources Ltd.",
      tag: "web2_works",
      type: "personal",
    },
    {
      image: "/images/portfolio/ukraft.png",
      link: "https://www.ukraftstore.com/",
      github: "https://github.com/your-repo",
      name: "Ukraft Store",
      tag: "web2_works",
      type: "collaboration",
    },
    {
      image: "/images/portfolio/linkmie.png",
      link: "https://linkmie.com/",
      github: "https://github.com/your-repo",
      name: "Linkmie",
      tag: "web2_works",
      type: "collaboration",
    },
    {
      image: "/images/portfolio/wikieln.png",
      link: "https://www.wikieln.com/",
      github: "https://github.com/your-repo",
      name: "WikiEln",
      tag: "web2_works",
      type: "collaboration",
    },
    {
      image: "/images/portfolio/idashyou.png",
      link: "https://idashyou.ng/home",
      github: "https://github.com/your-repo",
      name: "iDashYou",
      tag: "web2_works",
      type: "collaboration",
    },
  ];

  // const filteredPortfolio =
  //   selectedFilter === "all"
  //     ? portfolio
  //     : portfolio.filter((item) => item.tag === selectedFilter);

  // const displayedPortfolio = showAll
  //   ? filteredPortfolio
  //   : filteredPortfolio.slice(0, 3);

  return (
    <div
      id="portfolio"
      className="min-h-[50vh] xl:px-[5rem] md:px-[2rem] px-[1rem] py-[3rem] flex flex-col gap-[2.5rem]"
    >
      {/* HEADER */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-[1rem] md:gap-0 items-center">
        <div className="flex flex-col xl:w-[70%] w-[80%] gap-5">
          <h3 className="font-playwrite text-lemonGreen font-semibold text-[32px]">
            Portfolio
          </h3>

          <p className="text-justify">
            Selected projects demonstrating frontend engineering across personal
            builds and collaborative production work. Personal projects reflect
            full ownership of design and implementation, while collaborative
            projects show experience integrating into existing systems and
            shipping features in team environments.
          </p>
        </div>
      </div>

      {/* GRID */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {portfolio.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden bg-darkGrey/10 flex flex-col relative"
          >
            {/* TYPE BADGE */}
            <div className="absolute top-3 left-3 z-10">
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  item.type === "personal"
                    ? "bg-lemonGreen text-black"
                    : "bg-gray-600 text-white"
                }`}
              >
                {item.type === "personal"
                  ? "Personal Project"
                  : "Collaboration"}
              </span>
            </div>

            {/* IMAGE */}
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="h-[250px] md:h-[300px] lg:h-[380px] w-full">
                <Image
                  className="w-full h-full object-top object-cover"
                  src={item.image}
                  alt={item.name}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 33vw"
                />
              </div>
            </a>

            {/* ACTION BUTTONS */}
            <div className="flex gap-2 p-3">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 rounded-md bg-darkGreen text-white text-sm hover:bg-lemonGreen transition"
              >
                Live Demo
              </a>

              {item.type === "personal" && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 rounded-md border border-lightGrey text-white text-sm hover:bg-darkGrey transition"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* VIEW MORE */}
      {/* <div className="flex w-full justify-center items-center">
        <button
          className="py-[15px] w-[150px] rounded-md flex justify-center gap-2 text-white items-center bg-darkGreen hover:bg-darkGrey transition-all"
          onClick={() => setShowAll((prev) => !prev)}
        >
          <p>{showAll ? "View Less" : "View More"}</p>
          <span>{showAll ? <FaCaretUp /> : <FaCaretDown />}</span>
        </button>
      </div> */}
    </div>
  );
};

export default Portfolio;
