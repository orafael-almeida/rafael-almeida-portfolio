"use client";

import ImgEffect from "@/assets/grain.jpg";
import StarsBackground from "@/components/StarsElement";
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
  return (
    <div id="home" className="py-32 md:py-48 lg:py-56 relative z-0 h-screen flex items-center before:absolute before:inset-0 before:bg-[radial-gradient(circle,_rgba(0,0,0,0)_620px,_rgba(0,0,0,0.8)_100%)] overflow-hidden">
      <div
      className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]"
      >
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
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">
              Disponível para novos desafios
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-hero text-5xl md:text-6xl text-center mt-8 tracking-wide">
            RAFAEL ALMEIDA
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Especialista em transfomar ideias e design em soluções funcionais de
            alta performance.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8">
          <div className="text-3xl text-gray-600 flex items-center h-20 gap-3">
            {MOCK_CONTACTS.map((contact, index) => (
              <a
                href={contact.url}
                key={`contact-${index}`}
                target="_blank"
                className="hover:text-gray-100 transform transition-all duration-300 hover:-translate-y-1"
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
