"use client";

import ImgEffect from "@/assets/grain.jpg";
import StarsBackground from "@/components/StarsElement";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const MOCK_CONTACTS = [
  {
    url: "https://github.com/orafael-almeida",
    icon: <FiGithub />,
  },
  {
    url: "https://linkedin.com/in/orafael-almeida",
    icon: <FiLinkedin />,
  },
  {
    url: "https://instagram.com/orafa.almeida",
    icon: <FiInstagram />,
  },
];

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  const backgroundClass = mounted
    ? theme === "dark"
      ? "bg-gray-900 before:inset-0 before:bg-[radial-gradient(circle,_rgba(0,0,0,0)_620px,_rgba(0,0,0,0.8)_100%)]"
      : "bg-custom-header"
    : "bg-gray-900";

  return (
    <div
      id="home"
      className={`py-32 md:py-48 lg:py-56 relative z-0 h-screen flex items-center before:absolute overflow-hidden ${backgroundClass}
      }`}
    >
      {mounted && theme === "dark" && (
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
          <div
            className="absolute inset-0 -z-30 opacity-5"
            style={{ backgroundImage: `url(${ImgEffect.src})` }}
          />

          <StarsBackground />
          <div className="size-[500px]  md:size-[700px] lg:size-[820px] hero-ring relatve"></div>
          <div className="size-[600px] md:size-[1120px] lg:size-[1220px] hero-ring" />
          <div className="size-[700px] md:size-[1520px] lg:size-[1620px] hero-ring" />
          <div className="size-[800px] md:size-[1720px] lg:size-[1920px] hero-ring" />
        </div>
      )}
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="dark:bg-gray-950 bg-white border border-gray-400 dark:border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">
              Disponível para novos desafios
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-hero text-white text-5xl md:text-6xl text-center mt-8 tracking-wide">
            RAFAEL ALMEIDA
          </h1>
          <h2 className="font-eyebrow text-slate-200 dark:bg-gradient-to-r dark:from-emerald-300 dark:to-sky-300 dark:text-transparent dark:bg-clip-text text-3xl text-center mt-2 tracking-wide">
            fullstack creative developer
          </h2>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Especialista em transfomar ideias e design em soluções funcionais de
            alta performance.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8">
          <div className="text-3xl text-slate-200 dark:text-gray-600 flex items-center h-20 gap-3">
            {MOCK_CONTACTS.map((contact, index) => (
              <a
                href={contact.url}
                key={`contact-${index}`}
                target="_blank"
                rel="noreferrer noopener"
                className="dark:hover:text-slate-300 dark:text-gray-600 transform transition-all duration-300 hover:-translate-y-1"
              >
                {contact.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
