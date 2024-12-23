"use client";

import ohMyClothesDesktop from "@/assets/images/oh-my-clothes-desktop.png";
import ohMyClothesMobile from "@/assets/images/oh-my-clothes-mobile.png";
import nitroDashboardDesktop from "@/assets/images/nitro-dashboard-desktop.png";
import nitroDashboardMobile from "@/assets/images/nitro-dashboard-mobile.png";
import consultareDesktop from "@/assets/images/consultare-desktop.png";
import consultareMobile from "@/assets/images/consultare-mobile.png";
import Image from "next/image";
import { IoCheckmark } from "react-icons/io5";
import { HiOutlineSignal } from "react-icons/hi2";
import { FiGithub } from "react-icons/fi";
import grain from "@/assets/grain.jpg";
import SectionTitle from "@/components/SectionTitle";
import ButtonGeneral from "@/components/ButtonGeneral";
import TechButton from "@/components/TechButton";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const portfolioProjects = [
  {
    company: "Oh My Clothes!",
    title: "Plataforma de e-commerce",
    results: [
      { title: "Plataforma completa de e-commerce" },
      { title: "Dados consumidos de uma API externa" },
      { title: "Totalmente responsivo e customizável" },
    ],
    demo: "https://oh-my-clothes.vercel.app/",
    repository: "https://github.com/orafael-almeida/oh-my-clothes-frontend",
    desktop: ohMyClothesDesktop,
    mobile: ohMyClothesMobile,
    techs: ["react", "next", "tailwind"],
  },
  {
    company: "Nitro Dashboard",
    title: "Start-Up Website",
    results: [
      { title: "Landing page completa para uma start up" },
      { title: "Experiência elevada com animações criadas com Framer Motion" },
      { title: "Otimizado para SEO e tempos de carregamento mais rápidos" },
    ],
    demo: "https://nitro-frontend.vercel.app/",
    repository: "https://github.com/orafael-almeida/nitro-dashboard-frontend",
    desktop: nitroDashboardDesktop,
    mobile: nitroDashboardMobile,
    techs: ["react", "next", "tailwind", "motion"],
  },
  {
    company: "Consultare System",
    title: "Sistema de Agendamento",
    results: [
      { title: "Sistema fullstack de agendamento de consultas médicas" },
      { title: "Agendamentos armazenados em banco de dados externo" },
      { title: "Sistema de token completo com verificação OTP" },
    ],
    link: "https://youtu.be/example3",
    demo: "",
    repository: "https://github.com/orafael-almeida/consultare-system-frontend",
    desktop: consultareDesktop,
    mobile: consultareMobile,
    techs: ["react", "next", "tailwind", "zod", "react-hook-form"],
  },
];

export const ProjectsSection = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  const backgroundClass = mounted
    ? theme === "dark"
      ? "bg-gray-900 before:inset-0 before:bg-[radial-gradient(circle,_rgba(0,0,0,0)_620px,_rgba(0,0,0,0.8)_100%)]"
      : "bg-custom-header"
    : "";

  return (
    <section
      id="projects"
      className={`py-16 min-h-screen overflow-x-hidden ${backgroundClass}`}
    >
      <div className="flex flex-col px-4 md:px-16 lg:px-32">
        <SectionTitle
          title="Projetos Recentes"
          eyebrow="projects"
          description="Acompanhe alguns dos projetos principais que desenvolvi."
        />
        <div className="flex flex-col mt-6 gap-20 items-center justify-center">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="dark:bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-4 after:pointer-events-none max-w-[1200px]"
            >
              <div
                className="absolute inset-0 -z-10 opacity-10"
                style={{ backgroundImage: `url(${grain.src})` }}
              />
              <div className="bg-gradient-to-r from-emerald-300 to-sky-300 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
              </div>

              <h3 className="text-slate-100 font-serif text-2xl mt-2">
                {project.title}
              </h3>
              <hr className="border-t-2 border-white/5 mt-1" />
              <ul className="flex flex-col gap-2 mt-2">
                {project.results.map((result) => (
                  <li
                    key={result.title}
                    className="flex gap-2 text-sm md:text-base text-slate-200 dark:text-white/50"
                  >
                    <IoCheckmark className="self-center" />

                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-around gap-8">
                <Image
                  src={project.desktop}
                  alt={project.title}
                  className="mt-6 object-contain max-h-[400px] w-auto"
                />
                <Image
                  src={project.mobile}
                  alt={project.title}
                  className="hidden mdlg:block mt-6 max-h-[400px] w-auto"
                />
              </div>
              <div className="flex flex-wrap-reverse justify-between items-center my-8">
                <div className="flex gap-2 mt-2">
                  <ButtonGeneral
                    title="Demo"
                    link={project.demo}
                    Icon={HiOutlineSignal}
                  />
                  <ButtonGeneral
                    title="Repositório"
                    link={project.repository}
                    Icon={FiGithub}
                  />
                </div>

                <div className="flex gap-2 mt-2">
                  <span className="hidden lg:block font-eyebrow text-slate-300 text-2xl">
                    techs:
                  </span>
                  {project.techs.map((tech) => (
                    <TechButton key={tech} variant={tech} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
