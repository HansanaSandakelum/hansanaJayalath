import Image from "next/image";
import Link from "next/link";

import aizen from "@/public/work/smartdoor.jpg";
import kamui from "@/public/work/spotify.jpg";
import pokedex from "@/public/work/food.jpg";
import portfolio from "@/public/work/portfolio.jpg";
import cryptohunter from "@/public/work/crypto-hunter.jpg";
import redeye from "@/public/work/red-eye.jpg";
import evo from "@/public/work/evo.jpg";
import notion from "@/public/work/notion.jpg";
import nike from "@/public/work/nike.jpg";

const ProjectCard = () => {
  const data = [
    {
      id: 1,
      image: aizen,
      title: "Smart-Door-Lock-System",
      description: "This project replaces traditional locks with advanced home security technology",
      link: "https://github.com/HansanaSandakelum/Smart-Door-Lock-System",
      target: "_self",
    },
    {
      id: 2,
      image: kamui,
      title: "Spotify-Clone",
      description: "This project is a Spotify clone for streaming music",
      link: "https://github.com/HansanaSandakelum/spotify-clone",
      target: "_self",
    },
    {
      id: 3,
      image: pokedex,
      title: "Food E commerce website",
      description: "Gotta Catch'em All. Explore your Pokemon",
      link: "https://github.com/HansanaSandakelum/Web-project",
      target: "_self",
    },
    // {
    //   id: 4,
    //   image: evo,
    //   title: "Evo Gym",
    //   description: "Gym Landing Page",
    //   link: "https://evogymm.netlify.app/",
    //   target: "_blank",
    // },
    // {
    //   id: 5,
    //   image: nike,
    //   title: "Nike Store",
    //   description: "Nike Store Landing Page",
    //   link: "https://nikestore-polly.netlify.app/",
    //   target: "_blank",
    // },
    // {
    //   id: 6,
    //   image: notion,
    //   title: "Potion",
    //   description: "Connected workspace where better, faster work happens.",
    //   link: "https://potion-write.vercel.app/",
    //   target: "_blank",
    // },
    // {
    //   id: 7,
    //   image: portfolio,
    //   title: "Portfolio",
    //   description: "Portfolio made using Next.js and Tailwind CSS",
    //   link: "",
    //   target: "",
    // },
    // {
    //   id: 8,
    //   image: cryptohunter,
    //   title: "Crypto Hunter",
    //   description: "Get the Trending Crypto list with its Price",
    //   link: "https://crytocurrencyhunter.netlify.app/",
    //   target: "_self",
    // },
    // {
    //   id: 9,
    //   image: redeye,
    //   title: "Red Eye",
    //   description: "Question based website to know your movie genre",
    //   link: "https://red-eye.netlify.app/",
    //   target: "_self",
    // },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {data.map((project) => {
        return (
          <div
            className="rounded-lg mb-12 flex flex-col items-center "
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.target}
              onClick={() => {
                project.title === "Portfolio"
                  ? alert("You are already on this site! 🤩")
                  : project.title === "Pokedex"
                  ? alert(
                      "Ash Ketchum asked you to open in desktop browser.. 🚀"
                    )
                  : "";
              }}
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                width="200"
                className="rounded-lg drop-shadow-2xl hover:scale-110 "
              />
            </Link>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-[1rem] mt-3 text-gray-700 dark:text-white">
                {project.title}
              </h1>
              <p className="max-w-[90%] text-gray-400 font-light text-center text-sm">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
