import Image from 'next/image'
import React from 'react'

const Skills = () => {
    const skills = [
        { image: '/images/skills/nextjs.svg', text: 'Next Js' },
        { image: '/images/skills/react.svg', text: 'React Js' },
        { image: '/images/skills/css3.svg', text: 'CSS 3' },
        { image: '/images/skills/typescript.svg', text: 'Typescript' },
        { image: '/images/skills/html.svg', text: 'HTML 5' },
        { image: '/images/skills/javascript.svg', text: 'Javascript' },
        { image: '/images/skills/figma.svg', text: 'Figma' },
        { image: '/images/skills/rtk.svg', text: 'Redux Tool Kit' },
        { image: '/images/skills/nodejs2.svg', text: 'Node Js' },
        { image: '/images/skills/express.svg', text: 'Express Js' },
        { image: '/images/skills/firebase.png', text: 'Firebase' },
        { image: '/images/skills/jest.svg', text: 'Jest' },
        { image: '/images/skills/mongodb2.svg', text: 'Mongo DB' },
        { image: '/images/skills/mongoose1.png', text: 'Mongoose' },
        { image: '/images/skills/git.svg', text: 'Git and Version Control' },
        { image: '/images/skills/excel.svg', text: 'Microsoft Excel' },
        { image: '/images/skills/msword.png', text: 'Microsoft Word' },
        { image: '/images/skills/corel.svg', text: 'CorelDraw' },
        { image: '/images/skills/photoshop.svg', text: 'Adobe Photoshop' },
    ]

    return (
        <div
            id="skills"
            className="min-h-[50vh] lg:px-[5rem] md:px-[2rem] px-[1rem] py-[3rem] flex justify-center items-center"
        >
            <div className="flex flex-col gap-6">
                <h2 className="text-[32px] text-lemonGreen text-center font-playwrite text-foreground font-semibold">
                    My Skills
                </h2>
                <p className=" text-[18px] text-center">
                    This includes tools, languages and frameworks which I use to
                    bring my projects to life. Each one helps me build efficient
                    and creative applications while detailing precision, peak
                    performance and best security practices.
                </p>

                {/* skills display */}
                <div className="w-full grid py-[2rem] lg:grid-cols-6 xl:grid-cols-8 md:grid-cols-5 sm:grid-cols-3 grid-cols-3 gap-5">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className=" flex flex-col py-2 px-3   justify-center items-center gap-2"
                        >
                            {/*icon */}
                            <span className="w-[70px] flex justify-center items-center h-[70px]">
                                <Image
                                    src={skill.image}
                                    alt="skill image"
                                    width={70}
                                    height={70}
                                    className="text-darkGrey"
                                />
                            </span>

                            {/* text */}
                            <p className="font-medium text-center text-[17px]">
                                {skill.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills
