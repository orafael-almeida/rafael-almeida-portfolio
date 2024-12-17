"use client";

import { Card } from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import book from "@/assets/images/book1.jpg";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const toolboxItems = [
  {
    title: "Resolução de Problemas",
  },
  {
    title: "Aprendizado Contínuo",
  },
  {
    title: "Trabalho em Equipe",
  },
  {
    title: "Adaptabilidade",
  },
  {
    title: "Empatia",
  },
  {
    title: "Proatividade",
  },
  {
    title: "Inteligência Emocional",
  },
  {
    title: "Organização",
  },
];

const curiosityItems = [
  {
    title: "Já fui mecânico de helicópteros",
    emoji: "🚁",
    left: "5%",
    top: "5%",
  },
  {
    title: "Sou Engenheiro Civil",
    emoji: "👷🏻‍♂️",
    left: "50%",
    top: "5%",
  },
  {
    title: "Papai da Bella",
    emoji: "👨🏻‍🍼",
    left: "10%",
    top: "35%",
  },
  {
    title: "Já fui mochileiro",
    emoji: "🎒",
    left: "35%",
    top: "40%",
  },
  {
    title: "Fiquei 7 dias na selva",
    emoji: "🌲",
    left: "70%",
    top: "45%",
  },
  {
    title: "Maratono filmes antigos",
    emoji: "📽️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Adoro viajar",
    emoji: "✈️",
    left: "45%",
    top: "70%",
  },
];

const AboutSection = () => {
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
      id="about"
      className={`pt-14 px-4 md:px-16 lg:px-32 overflow-x-hidden ${backgroundClass}`}
    >
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title="Sobre o Rafa"
          eyebrow="sobre_mim"
          description="Um pouco sobre o Rafa e o que ele anda fazendo."
        />
        <div className="flex flex-col gap-8 mt-6">
          <Card className="p-0">
            <div className="flex flex-col">
              <CardHeader
                title="Sobre mim"
                description="Quem é o Rafa?"
                className="px-4 md:px-8 pt-6"
              />
              <p className="px-4 md:px-8 text-justify">
                Sou apaixonado por códigos, jogos, filmes e inspirar pessoas.
                Atualmente estou concluindo Engenharia de Software, com previsão
                para conclusão em 2027. Além disso, estudo diariamente para
                melhorar meu código e minha percepção de desenvolvimento. Também
                sou o papai da Isabella e adoro passar meu tempo livre fazendo
                bagunças com ela. Sou reconhecido por manter um ambiente de
                trabalho colaborativo, positivo e motivador, sempre em busca de
                novos desafios para crescer e superar expectativas.
              </p>
            </div>

            <ToolboxItems items={toolboxItems} className="mt-6" />
            <ToolboxItems
              items={toolboxItems}
              className="my-6"
              itemsWrapperClassName=""
            />
          </Card>

          <div className="md:grid md:grid-cols-5 gap-8">
            <Card className="h-[320px] md:col-span-2 p-0 mb-8">
              <CardHeader
                title="Leitura da vez"
                className="px-4 md:px-8 pt-6"
              />
              <div className="w-40 mx-auto mt-8 ">
                <Image src={book} alt="Book cover" />
              </div>
            </Card>

            <Card className="h-[320px] flex flex-col md:col-span-3 p-0">
              <CardHeader
                title="Além do código"
                description="Descubra um pouco mais sobre mim e algumas coisas malucas que já fiz"
                className="px-4 md:px-8 pt-6"
              />
              <div className="relative flex-1">
                {curiosityItems.map((item) => (
                  <div
                    key={item.title}
                    className="inline-flex gap-2 px-6 items-center justify-center p-0.5 text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-emerald-300 to-sky-400 group-hover:from-emerald-300 group-hover:to-sky-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 absolute"
                    style={{
                      left: item.left,
                      top: item.top,
                    }}
                  >
                    <span>{item.emoji}</span>
                    <span className="font-medium text-gray-950 text-center text-nowrap">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
