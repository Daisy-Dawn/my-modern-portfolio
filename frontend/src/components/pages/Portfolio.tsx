'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa'

const Portfolio = () => {
    const [selectedFilter, setSelectedFilter] = useState('all')
    const [showAll, setShowAll] = useState(false)

    const portfolio = [
        {
            image: '/images/portfolio/ukraft.png',
            link: 'https://ukraft-store.vercel.app/',
            name: 'Ukraft Store',
            tag: 'professionalWorks',
        },
        {
            image: '/images/portfolio/sampees.png',
            link: 'https://sampeesglobal.com/',
            name: 'Sampees Global Resources Ltd.',
            tag: 'professionalWorks',
        },
        {
            image: '/images/portfolio/getrich.png',
            link: 'https://gerich-restaurant-teal.vercel.app/',
            name: 'Getrich Restaurant Home Page',
            tag: 'personalWorks',
        },
        {
            image: '/images/portfolio/linkmie.png',
            link: 'https://linkmie.com/',
            name: 'Linkmie',
            tag: 'professionalWorks',
        },
        {
            image: '/images/portfolio/wikieln.png',
            link: 'https://www.wikieln.com/',
            name: 'WikiEln',
            tag: 'professionalWorks',
        },
        {
            image: '/images/portfolio/gpt3.png',
            link: 'https://gpt-3-website-theta.vercel.app/',
            name: 'GPT-3 Home Page',
            tag: 'personalWorks',
        },
        {
            image: '/images/portfolio/greenbank.png',
            link: 'https://green-bank-ten.vercel.app/',
            name: 'Green Bank Home Page',
            tag: 'personalWorks',
        },
        {
            image: '/images/portfolio/hoobank.png',
            link: 'https://vercel.com/daisy-dawns-projects/modern-bank-app',
            name: 'Hoo Bank Home Page',
            tag: 'personalWorks',
        },
        {
            image: '/images/portfolio/teasername.png',
            link: 'https://teaser-name.vercel.app/',
            name: 'Teaser Name Home Page',
            tag: 'personalWorks',
        },
    ]

    // Filter the portfolio items based on the selected filter
    const filteredPortfolio =
        selectedFilter === 'all'
            ? portfolio
            : portfolio.filter((item) => item.tag === selectedFilter)

    // Limit displayed items to 3 if `showAll` is false
    const displayedPortfolio = showAll
        ? filteredPortfolio
        : filteredPortfolio.slice(0, 3)

    return (
        <div
            id="portfolio"
            className="min-h-[50vh] px-[5rem] py-[3rem] flex flex-col gap-[2.5rem]"
        >
            <div className="grid grid-cols-2  items-center">
                {/* header text */}
                <div className="flex flex-col w-[70%] gap-5">
                    <h3 className="font-playwrite font-semibold text-[32px]">
                        Portfolio
                    </h3>
                    <p className="text-justify">
                        Displaying a collection of some of my best work. Each
                        project reflects my commitment to quality, innovation,
                        and delivering impactful digital solutions.
                        {/* Displaying a collection of some of my best work,
                        showcasing my expertise in crafting functional,
                        scalable, and visually engaging web applications. Each
                        project reflects my commitment to quality, innovation,
                        and delivering impactful digital solutions. */}
                    </p>
                </div>

                {/* buttons */}
                <div className=" w-full flex justify-end">
                    <div className="flex w-[80%]  text-white items-center">
                        <button
                            className={`py-[15px] w-full ${
                                selectedFilter === 'all'
                                    ? 'bg-darkGrey'
                                    : 'bg-foreground'
                            } flex justify-center items-center border-r-[3px] border-r-white hover:bg-darkGrey hover:text-white hover:transition-all hover:duration-100`}
                            onClick={() => setSelectedFilter('all')}
                        >
                            All Works
                        </button>
                        <button
                            className={`py-[15px] w-full ${
                                selectedFilter === 'personalWorks'
                                    ? 'bg-darkGrey'
                                    : 'bg-foreground'
                            } flex justify-center items-center border-r-[3px] border-r-white hover:bg-darkGrey hover:text-white hover:transition-all hover:duration-100`}
                            onClick={() => setSelectedFilter('personalWorks')}
                        >
                            Personal Projects
                        </button>
                        <button
                            className={`py-[15px] w-full ${
                                selectedFilter === 'professionalWorks'
                                    ? 'bg-darkGrey'
                                    : 'bg-foreground'
                            } flex justify-center items-center hover:bg-darkGrey hover:text-white hover:transition-all hover:duration-100`}
                            onClick={() =>
                                setSelectedFilter('professionalWorks')
                            }
                        >
                            Professional Projects
                        </button>
                    </div>
                </div>
            </div>

            {/* works */}
            <div className="grid grid-cols-3 gap-4">
                {displayedPortfolio.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-2xl overflow-hidden w-full h-[450px]"
                    >
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                className="w-full h-full object-top object-cover"
                                src={item.image}
                                alt={item.name}
                                width={0}
                                height={0}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                            />
                        </a>
                    </div>
                ))}
            </div>

            {/* view all button */}
            <div className="flex w-full justify-center items-center">
                <button
                    className={`py-[15px] w-[150px] rounded-md flex justify-center gap-2 text-white items-center bg-foreground hover:bg-darkGrey hover:transition-all hover:duration-100`}
                    onClick={() => setShowAll((prev) => !prev)}
                >
                    <p>{showAll ? 'View Less' : 'View More'}</p>
                    <span> {showAll ? <FaCaretUp /> : <FaCaretDown />} </span>
                </button>
            </div>
        </div>
    )
}

export default Portfolio
