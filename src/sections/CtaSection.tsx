"use client";

import ButtonGeneral from "@/components/ButtonGeneral";
import { HiOutlineMail } from "react-icons/hi";
import starsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";
import { RefObject, useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";

const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();
    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return [mouseX, mouseY];
};

const CtaSection = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => setMounted(true), []);

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);

  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black,transparent)`;

  const backgroundClass = mounted
    ? theme === "dark"
      ? "bg-gray-900 before:inset-0 before:bg-[radial-gradient(circle,_rgba(0,0,0,0)_620px,_rgba(0,0,0,0.8)_100%)]"
      : "bg-custom-header"
    : "";

  return (
    <section
      id="contact"
      className={`py-20 md:py-24 px-4 md:px-16 lg:px-32 overflow-x-hidden ${backgroundClass}`}
      ref={sectionRef}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={borderedDivRef}
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative group"
          animate={{
            backgroundPositionX: starsBg.width,
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          style={{
            backgroundPositionY,
            backgroundImage: `url(${starsBg.src})`,
          }}
        >
          <div
            className="absolute inset-0 bg-[#499390] dark:bg-[#216b67] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{ backgroundImage: `url(${gridLines.src})` }}
          ></div>
          <motion.div
            className="absolute inset-0 bg-[#499390] dark:bg-[#216b67] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
            style={{
              maskImage,
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></motion.div>
          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-semibold text-white/70">
              Deixe uma mensagem
            </h2>
            <p className="text-center text-lg md:text-xl max-w-sm mx-auto text-white/70 px-4 mt-5 tracking-tight">
              Estou disponível para novos projetos e oportunidades de trabalho.
            </p>
            <div className="flex justify-center mt-8">
              <ButtonGeneral
              title="Fale comigo"
              link="mailto:almeidarp.dev@gmail.com"
              Icon={HiOutlineMail}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
