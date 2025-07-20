"use client"

import Link from "next/link";
import { useState, useRef, useCallback} from "react"
import { motion } from "framer-motion"

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


    return (
        <div className="fixed z-10 flex w-full justify-center items-center -ml-15 gap-12 mt-4">
            <motion.div
                className=""
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{
                    duration: 0.3,
                    ease: "linear",
                }}
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
                <ul className="flex gap-6 p-4 border-white border w-md justify-center rounded-full glass"
                    onPointerLeave={() => setActiveSub(null)}
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
                                        ease: "linear",
                                    }}
                                >
                                    <Link       
                                        className = "peer text-white link"
                                        onFocus={() => {
                                            console.log(activeSub)
                                            console.log(link.id)
                                            setActiveSub(link.id)
                                        }}
                                        onClick={() => setActiveSub(link.id)}
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
                </ul>
            </nav>
        </div>
    )
}
