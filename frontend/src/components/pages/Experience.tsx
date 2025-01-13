import Image from 'next/image'
import React from 'react'

const Experience = () => {
    return (
        <div className="min-h-[30vh] md:py-[2rem] py-[3rem] text-lightBg lg:px-[5rem] px-[1rem]  justify-center gap-8 md:gap-0 flex flex-col md:flex-row md:justify-around items-center bg-[#393c3f]">
            {/*  */}
            {/* clients */}
            <div className="h-[80%] w-[200px] relative  bg-darkGreen rounded-tr-[20px]  py-[20px] flex justify-center items-center ">
                <div>
                    <h3 className="text-white text-center font-roboto leading-none font-semibold text-[45px]">
                        30+
                    </h3>
                    <p className="text-[20px] font-medium">Clients</p>
                </div>

                {/* icon */}
                <div className="absolute -top-[15%] left-[10%] bg-background  w-[40px] h-[40px] flex justify-center items-center">
                    <Image
                        src="/images/icons/users.svg"
                        alt="clients image"
                        width={25}
                        height={25}
                        className="text-white"
                    />
                </div>
            </div>

            {/* years experience */}
            <div className="h-[80%] w-[200px] relative border-[2px] rounded-tr-[20px] bg-transparent py-[20px] flex justify-center items-center border-lightBg ">
                <div>
                    <h3 className="text-white font-roboto text-center leading-none font-semibold text-[45px]">
                        03
                    </h3>
                    <p className="text-[20px] font-medium">Years Experience</p>
                </div>

                {/* icon */}
                <div className="absolute -top-[15%] left-[10%] bg-background w-[40px] h-[40px] flex justify-center items-center">
                    <Image
                        src="/images/icons/experience.svg"
                        alt="clients image"
                        width={25}
                        height={25}
                        className="text-darkGrey"
                    />
                </div>
            </div>

            {/* projects */}
            <div className="h-[80%] w-[200px] relative  bg-darkGreen rounded-tr-[20px]  py-[20px] flex justify-center items-center">
                <div>
                    <h3 className="text-white text-center font-roboto leading-none font-semibold text-[45px]">
                        20+
                    </h3>
                    <p className="text-[20px] font-medium">Projects</p>
                </div>

                {/* icon */}
                <div className="absolute -top-[15%] left-[10%] bg-background w-[40px] h-[40px] flex justify-center items-center">
                    <Image
                        src="/images/icons/projects.svg"
                        alt="clients image"
                        width={25}
                        height={25}
                        className="text-white"
                    />
                </div>
            </div>
        </div>
    )
}

export default Experience
