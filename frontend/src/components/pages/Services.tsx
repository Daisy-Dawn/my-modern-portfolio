import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div
            id="services"
            className="min-h-[90vh]  xl:px-[5rem] md:px-[2rem] px-[1rem] py-[5rem] md:py-[3rem] lg:py-0  flex text-white justify-center items-center"
        >
            <div className="flex flex-col w-full gap-[2rem]">
                <h2 className="text-[32px] text-center text-lemonGreen font-playwrite text-foreground font-semibold">
                    My Services
                </h2>

                <p className="text-foreground text-[18px] text-center">
                    I offer a wide range of services, ranging from web
                    development to graphics designing; to get the best
                    applications out there!
                </p>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-[2rem] gap-x-[2rem] xl:gap-x-[4rem]">
                    {/* frontend */}
                    <div className="py-4 md:px-4 px-2  border-[2px] border-lightGrey bg-transparent  flex justify-start items-center md:gap-4 gap-2">
                        {/* icon */}
                        <span className="rounded-full w-10 h-10 flex justify-center items-center bg-lightBg">
                            <Image
                                src="/images/icons/frontend2.svg"
                                alt="clients image"
                                width={25}
                                height={25}
                                className="text-darkGrey"
                            />
                        </span>

                        {/* text */}
                        <p>Frontend Web Development</p>
                    </div>

                    {/* backend */}
                    <div className="py-4 md:px-4 px-2  border-[2px] border-lightGrey bg-transparent  flex justify-start items-center md:gap-4 gap-2">
                        {/* icon */}
                        <span className="rounded-full w-10 h-10 flex justify-center items-center bg-lightBg">
                            <Image
                                src="/images/icons/server.svg"
                                alt="clients image"
                                width={25}
                                height={25}
                                className="text-darkGrey"
                            />
                        </span>

                        {/* text */}
                        <p>Backend Web Development</p>
                    </div>

                    {/* fullstack */}
                    <div className="py-4 md:px-4 px-2  border-[2px] border-lightGrey bg-transparent  flex justify-start items-center md:gap-4 gap-2">
                        {/* icon */}
                        <span className="rounded-full w-10 h-10 flex justify-center items-center bg-lightBg">
                            <Image
                                src="/images/icons/fullstack.svg"
                                alt="clients image"
                                width={25}
                                height={25}
                                className="text-darkGrey"
                            />
                        </span>

                        {/* text */}
                        <p>Fullstack Web Development</p>
                    </div>

                    {/* dbms */}
                    <div className="py-4 md:px-4 px-2  border-[2px] border-lightGrey bg-transparent  flex justify-start items-center md:gap-4 gap-2">
                        {/* icon */}
                        <span className="rounded-full w-10 h-10 flex justify-center items-center bg-lightBg">
                            <Image
                                src="/images/icons/database.svg"
                                alt="clients image"
                                width={25}
                                height={25}
                                className="text-darkGrey"
                            />
                        </span>

                        {/* text */}
                        <p>Database Management System</p>
                    </div>

                    {/* graphics design */}
                    <div className="py-4 md:px-4 px-2  border-[2px] border-lightGrey bg-transparent  flex justify-start items-center md:gap-4 gap-2">
                        {/* icon */}
                        <span className="rounded-full w-10 h-10 flex justify-center items-center bg-lightBg">
                            <Image
                                src="/images/icons/graphics.svg"
                                alt="clients image"
                                width={25}
                                height={25}
                                className="text-darkGrey"
                            />
                        </span>

                        {/* text */}
                        <p>Graphics Design</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
