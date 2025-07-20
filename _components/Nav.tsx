"use client"

import Link from "next/link";
import { useState, useRef } from "react"
import { motion, useScroll, useMotionValueEvent} from "framer-motion"

interface SubLinkType{
    title: string;
    href: string;
}

interface LinkType {
    id: number;
    attributes: {
        title: string;
        href: string;
        subnav: SubLinkType[]
    }
}

const backup: LinkType[] = [
    {
        id: 1,
        attributes: {
            title: "About",
            href: "/about",
            subnav: [
                {title: "History", href: "/"},
                {title: "Magnet Life", href:"/"}
            ]
        }
    },
    {
        id: 2,
        attributes: {
            title: "Apply",
            href: "/apply",
            subnav: [
                {title: "Who", href: "/"},
                {title: "What", href:"/"},
                {title: "When", href:"/"},
                {title: "Where", href:"/"},
                {title: "How", href:"/"}
            ]
        }
    },
    {
        id: 3,
        attributes: {
            title: "Courses",
            href: "/courses",
            subnav: [
                {title: "Math", href: "/"},
                {title: "Science", href:"/"},
                {title: "Computer Science", href:"/"},
                {title: "Interdisciplinary", href:"/"}
            ]
        }
    },
    {
        id: 7,
        attributes: {
            title: "News",
            href: "/news",
            subnav: [
                {title: "Applicant Info", href: "/"},
                {title: "Achievements", href: "/"},
                {title: "Events", href:"/"}
            ]
        }
    },
    {
        id: 5,
        attributes: {
            title: "Resources",
            href: "/resources",
            subnav: [
                {title: "College", href: "/"},
            ]
        }
    },
]

export default function Nav() {
    const [activeSub, setActiveSub] = useState<null | number>(null);
    const [isHidden, setIsHidden] = useState(false);
    const { scrollY } = useScroll()
    const lastYRef = useRef(0)

    useMotionValueEvent(scrollY, "change", (y) => {
        const difference = y - lastYRef.current;
        if (Math.abs(difference) > 50){
            setIsHidden(difference > 0)
            lastYRef.current=y
        } 
    })

    return (
        <motion.div 
            className="fixed z-10 flex w-full justify-center items-center -ml-18 gap-12 top-3"
            animate={isHidden ? "hidden" : "visible"}
            variants={{
                hidden:{
                    y:"-80%"
                },
                visible: {
                    y:"0%"
                }
            }}
            transition={{duration:0.2}}
        >
            <motion.div
                className=""
                animate={isHidden ? "hidden" : "visible"}
                variants={{
                    hidden:{
                        y:"-100%",
                        scale:0.9
                    },
                    visible: {
                        y:"0%",
                        scale:1
                    }
                }}
                transition={{duration:0.2}}
            >
                <Link 
                    href="/"
                >
                    <span>
                        <img
                            src="/assets/logo.png"
                            className="text-white h-18 w-18"
                            alt="Logo"
                        />
                    </span>
                </Link>
            </motion.div>
            <nav>
                <motion.ul 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{
                        duration: 0.3,
                    }}
                    className="flex gap-6 p-4 border-white border w-md justify-center rounded-full glass"
                    onPointerLeave={() => setActiveSub(null)}
                    onHoverStart={() => setIsHidden(false)}
                >
                    {backup.map((link, i) => (
                        <li
                            key={link.id}
                            className="relative"
                            onPointerEnter={() => setActiveSub(link.id)}
                        >
                            {!link.attributes.subnav && (
                                <Link 
                                    href={link.attributes.href}
                                >
                                    {link.attributes.title}
                                </Link>
                            )}
                            {link.attributes.subnav && (
                                <motion.div
                                    initial={{opacity:0}}
                                    animate={{opacity:1}}
                                    transition={{
                                        duration: 0.3,
                                        delay: (i+1) * 0.1,
                                    }}
                                >
                                    <Link       
                                        className = "peer text-white link"
                                        onFocus={() => {setActiveSub(isHidden ? null : link.id)}}
                                        href={link.attributes.href}
                                        aria-expanded = {activeSub === link.id}
                                        aria-controls = {`subnav-${link.id}`} 
                                    >
                                        {link.attributes.title}
                                    </Link>
                                    <div
                                        id = {`subnav-${link.id}`}
                                        className="absolute -left-5 top-full hidden rounded-xl text-white peer-aria-expanded:block w-sm mt-10 border border-white glass"
                                    >
                                        <div className="w-full -mt-7.5 pt-5">
                                            <div className="w-0 h-0 text-white ml-8
                                                        border-l-[10px] border-l-transparent 
                                                        border-r-[10px] border-r-transparent
                                                        border-b-[10px] border-t-transparent"
                                            />
                                        </div>
                                        <ul className="grid grid-cols-2 gap-2 p-4">
                                            {link.attributes.subnav.map((sublink)=>(
                                                <li key={sublink.title}>
                                                    <Link
                                                        className="text-white link"
                                                        href={sublink.href}
                                                    >
                                                        {sublink.title}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            )}
                        </li>
                    ))}
                </motion.ul>
            </nav>
        </motion.div>
    )
}
