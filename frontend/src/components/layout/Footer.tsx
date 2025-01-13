import Image from 'next/image'
import React from 'react'

const Footer = () => {
    const socialIcons = [
        {
            image: '/images/social-icons/twitter.svg',
            link: 'https://x.com/datigbogirl20',
        },
        {
            image: '/images/social-icons/instagram.svg',
            link: 'https://www.instagram.com/daisydawn20/',
        },
        {
            image: '/images/social-icons/whatsapp.svg',
            link: 'https://wa.link/0s9e3p',
        },
        {
            image: '/images/social-icons/linkedin.svg',
            link: 'https://www.linkedin.com/in/agbo-emmanuella7/',
        },
    ]

    return (
        <div className="min-h-[50vh] py-[3rem] relative bg-[#477f2d] flex justify-center items-center">
            <div className="w-[300px] text-center flex justify-center items-center rounded-full mb-[2rem] border-dashed h-[300px] border-foreground border-[2px]">
                <div className="flex flex-col gap-[2rem] ">
                    <div>
                        <h2 className="text-[32px] font-semibold font-playwrite">
                            Let&apos;s Say Hi
                        </h2>
                        <p className="text-[18px] font-roboto">
                            agboella20@gmail.com
                        </p>
                    </div>
                    <div className="flex gap-4 justify-center items-center">
                        {socialIcons.map((icon, index) => (
                            <span
                                key={index}
                                className="w-[30px] flex justify-center items-center h-[30px]"
                            >
                                <a href={icon.link}>
                                    <Image
                                        src={icon.image}
                                        alt="social icon image"
                                        width={30}
                                        height={30}
                                        className="text-darkGrey"
                                    />
                                </a>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <hr className="w-full absolute border-foreground bottom-[50px]" />
            <h2 className="w-full text-center text-[13px] absolute bottom-3">
                {' '}
                ©2024-Form | All rights reserved.
            </h2>
        </div>
    )
}

export default Footer
