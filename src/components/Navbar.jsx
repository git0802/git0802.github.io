"use client";
import { BiMenuAltRight } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import Link from "next/link";
import Logo from "@/components/Logo";
import Image from "next/image";
import { Drawer, Tooltip } from "antd";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import Head from "next/head";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <header className="flex items-center justify-between h-[60px] z-50 sticky top-0 left-0 right-0 overflow-hidden  gap-5 bg-gray-200 text-black px-5 ">
      <div className="">
        <Head>
          <link
            rel="icon"
            href="/logo.svg"
            type="image/x-icon"
            sizes="any"
          ></link>
        </Head>
        <Logo />
      </div>
      <div className="flex gap-2 border border-black max-w-[700px] md:mr-10 cursor-pointer overflow-hidden bg-white py-1">
        <Marquee pauseOnHover="true" autoFill="true">
          {Logos.map((logo, index) => (
            <div className="mx-4" key={index}>
              <Tooltip title={logo.title}>
                <Image
                  src={"/" + logo.img || "/"}
                  width={25}
                  height={25}
                  alt=""
                />
              </Tooltip>
            </div>
          ))}
        </Marquee>
      </div>
      {/* <nav className="sm:flex hidden gap-5">
        {Links.map((link, index) => {
          const isActive = pathname.startsWith(link.route);
          return (
            <Link
              href={link.route || "#"}
              key={index}
              className={" h-[60px] flex items-center  border-b-4 border-[#00000000] "              }
            >
              {link.text}
            </Link>
          );
        })}
      </nav> */}
      <Drawer
        closable={false}
        placement="right"
        onClose={onClose}
        open={open}
        // width={"100vw"}
        style={{ backgroundColor: "#000", color: "#fff" }}
      >
        <div className="flex flex-col h-full justify-end relativep-4">
          <div className=" bg-slate-50 rounded-full cursor-pointer text-3xl absolute top-[20px] right-[20px]">
            <GrFormClose onClick={onClose} />
          </div>
          <nav className=" text-4xl mb-10 ml-8 flex flex-col gap-10 ">
            {Links.map((link, index) => (
              <Link
                href={link.route || "#"}
                key={index}
                onClick={onClose}
                className=" border-b-2 border-white pb-2"
              >
                {link.text}
              </Link>
            ))}
          </nav>
          <div className="absolute bg-[#ff660030] bottom-[-5%] right-[-50%] w-[400px] h-[500px]  blur-3xl rounded-full "></div>
        </div>
      </Drawer>
      <div onClick={showDrawer} className=" text-3xl cursor-pointer ">
        <BiMenuAltRight />
      </div>
    </header>
  );
}

const Links = [
  {
    text: "About",
    route: "#about",
  },
  {
    text: "Skills",
    route: "#skills",
  },
  {
    text: "Projects",
    route: "#projects",
  },
  {
    text: "Contact",
    route: "#contact",
  },
];

const Logos = [
  {
    title: "React",
    img: "react.svg",
  },
  {
    title: "Next.js",
    img: "nextjs.svg",
  },
  {
    title: "JavaScript",
    img: "javascript.svg",
  },
  {
    title: "HTML",
    img: "html.svg",
  },
  {
    title: "CSS",
    img: "css.svg",
  },
  {
    title: "Tailwind CSS",
    img: "tailwindcss.svg",
  },
  {
    title: "MongoDB",
    img: "mongodb.svg",
  },
  {
    title: "Git",
    img: "git.svg",
  },
  {
    title: "GitHub",
    img: "github.svg",
  },
  {
    title: "Figma",
    img: "figma.svg",
  },
  {
    title: "Photoshop",
    img: "photoshop.svg",
  },
  {
    title: "Firebase",
    img: "firebase.svg",
  },
];
