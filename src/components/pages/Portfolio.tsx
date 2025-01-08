import React from 'react'

const Portfolio = () => {
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
                <div className="flex w-full text-white items-center">
                    <button className="py-[15px] w-full bg-foreground flex justify-center items-center border-r-[3px] border-r-white hover:bg-darkGrey hover:text-white hover:transition-all hover:duration-100 ">
                        All Works
                    </button>
                    <button className="py-[15px] w-full border-r-[3px] border-r-white bg-foreground flex justify-center items-center hover:bg-darkGrey hover:text-white hover:transition-all hover:duration-100">
                        Personal Projects
                    </button>
                    <button className="py-[15px] w-full bg-foreground flex justify-center items-center hover:bg-darkGrey hover:text-white hover:transition-all hover:duration-100">
                        Professional Projects
                    </button>
                </div>
            </div>

            {/* works */}
            <div className="grid grid-cols-3 gap-4">
                <div className="rounded-2xl h-[450px] w-full">Hello</div>
            </div>
        </div>
    )
}

export default Portfolio
