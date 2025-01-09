import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div
            id="services"
            className="min-h-[70vh] px-[5rem] flex text-white justify-center items-center"
        >
            <div className="flex flex-col w-full gap-[2rem]">
                <h2 className="text-[32px] text-center font-playwrite text-foreground font-semibold">
                    My Services
                </h2>

                <p className="text-foreground text-[18px] text-center">
                    I offer a wide range of services, ranging from web
                    development to graphics designing; to get the best
                    applications out there!
                </p>

                <div className="grid grid-cols-3 gap-y-[2rem] gap-x-[4rem]">
                    {/* frontend */}
                    <div className="py-4 px-4 bg-darkGrey  flex justify-start items-center gap-4">
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
                    <div className="py-4 px-4 bg-darkGrey flex justify-start items-center gap-4">
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
                    <div className="py-4 px-4 bg-darkGrey flex justify-start items-center gap-4">
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
                    <div className="py-4 px-4 bg-darkGrey flex justify-start items-center gap-4">
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
                    <div className="py-4 px-4 bg-darkGrey flex justify-start items-center gap-4">
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
