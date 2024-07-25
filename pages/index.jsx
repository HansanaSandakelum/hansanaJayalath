import { useEffect } from "react";
import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";

import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

import { BsArrowUpRight } from "react-icons/bs";

import Avatar_Black from "@/public/cv_photo.png";
import Avatar_White from "@/public/cv_photo.png";
import BooBlack from "@/public/boo-black.svg";
import BooWhite from "@/public/boo-white.svg";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import BackGroundCircles from "@/components/BackGroundCircles";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    console.clear();
    console.log.apply(console, [
      "%c Designed and Developed by Pranjal Shikhar %c %c🚀 %c\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
      "color: #fff; background: #242424; padding:5px 0 5px 5px;",
      "background: #242424; padding:5px 0",
      "background: #242424; padding:5px 5px 5px 0",
    ]);
    console.log.apply(console, [
      "%c Thanks for stopping by, I’m currently looking to a new team of creative designers and developers.\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
    ]);
  }, []);

  return (
    <>
      <Head>
        <title>hansa ✦ developer, designer</title>
        <link rel="icon" href="/hs.png" />
      </Head>
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
        <div className="lg:h-40 2xl:h-50 max-w-[90rem] mx-auto">
          <div className="flex flex-row justify-start items-center mt-20">
          <BackGroundCircles/>
            <Image
              src={currentTheme === "dark" ? Avatar_White : Avatar_Black}
              alt="pranjal"
              width="90"
              height="90"
            />

            <div className="flex flex-col ml-4">
              <h2 className="flex sm:text-2xl md:text-2xl lg:text-2xl">
                <span className="font-semibold">Hansana S Jayalath </span>

                <span>
                  {/* <Image
                    src={currentTheme === "dark" ? BooWhite : BooBlack}
                    alt="boo"
                    width="25"
                    height="25"
                  /> */}
                </span>
              </h2>
              <h3>
                <Link
                  href={
                    "https://www.linkedin.com/in/hansana-sandakelum-8280b2258/"
                  }
                  target="_blank"
                  className="text-[#717171bb] flex items-center"
                >
                  <p>@hansana</p>
                  <BsArrowUpRight className="stroke-1 h-3" />
                </Link>
              </h3>
              <Typewriter
                loop={true}
                words={["Full Stack Developer", "UI/UX Designer "]}
                cursorStyle='|'
                typeSpeed={100}
              ></Typewriter>
            </div>
            
          </div>
          <div className="mt-12 text-base md:text-xl lg:text-lg xl:text-lg 2xl:text-lg">
            <p className="sm:leading-6 md:leading-6 lg:leading-8">
              I’m a an undergraduate at Sabaragamuwa University of Sri Lanka,
              interested in fullstack software engineering. I focus on building
              scalable web applications with rich user interfaces using
              JavaScript.
            </p>
          </div>
        </div>
        
        <div className="mt-32 mx-auto">
          <Experience />
        </div>
        <div className="mt-20 mx-auto ">
          <Contact />
        </div>
      </div>
    </>
  );
}
