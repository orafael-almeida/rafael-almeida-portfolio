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

const portfolioProjects = [
  {
    company: "Oh My Clothes!",
    title: "Plataforma de e-commerce",
    results: [
      { title: "Aumentou a taxa de conversão em 25%" },
      { title: "Reduziu o abandono de carrinho em 30%" },
      { title: "Melhorou a funcionalidade de busca de produtos" },
    ],
    demo: "https://oh-my-clothes.vercel.app/",
    repository: "https://github.com/orafael-almeida/oh-my-clothes-frontend",
    desktop: ohMyClothesDesktop,
    mobile: ohMyClothesMobile,
  },
  {
    company: "Nitro Dashboard",
    title: "Start-Up Website",
    results: [
      { title: "Exibiu projetos com UI interativa" },
      { title: "Melhorou a navegação do site e o fluxo do usuário" },
      { title: "Otimizado para SEO e tempos de carregamento mais rápidos" },
    ],
    demo: "https://nitro-frontend.vercel.app/",
    repository: "https://github.com/orafael-almeida/nitro-dashboard-frontend",
    desktop: nitroDashboardDesktop,
    mobile: nitroDashboardMobile,
  },
  {
    company: "NextGen Tech",
    title: "Painel de Mídias Sociais",
    results: [
      { title: "Integrado com análises em tempo real" },
      { title: "Aumentou o engajamento do usuário em 40%" },
      { title: "Implementou o recurso de modo escuro" },
    ],
    link: "https://youtu.be/example3",
    demo: "",
    repository: "https://github.com/orafael-almeida/consultare-system-frontend",
    desktop: consultareDesktop,
    mobile: consultareMobile,
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-16 min-h-screen sticky overflow-x-hidden"
    >
      <div className="container">
        <div className="flex justify-center">
          {/* <p className=" font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400  text-center bg-clip-text text-transparent">
            ../destaques
          </p> */}
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Projetos Recentes
        </h2>
        <p className="text-center md:text-lg text-white/60 mt-4 mx-auto">
          Acompanhe alguns dos projetos principais que desenvolvi.
        </p>
        <div className="flex flex-col mt-10 gap-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 after:pointer-events-none"
            >
              <div
                className="absolute inset-0 -z-10 opacity-10"
                style={{ backgroundImage: `url(${grain.src})` }}
              ></div>
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                <span>{project.company}</span>
              </div>

              <h3 className="font-serif text-2xl mt-2">{project.title}</h3>
              <hr className="border-t-2 border-white/5 mt-1" />
              <ul className="flex flex-col gap-4 mt-4">
                {project.results.map((result) => (
                  <li
                    key={result.title}
                    className="flex gap-2 text-sm text-white/50"
                  >
                    <IoCheckmark className="self-center" />

                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-around">
                <Image
                  src={project.desktop}
                  alt={project.title}
                  className="mt-6 object-contain max-h-[400px] w-auto"
                />
                <Image
                  src={project.mobile}
                  alt={project.title}
                  className="mt-6 max-h-[400px] w-auto"
                />
              </div>
              <div className="flex gap-2 my-6">
                <a
                  href={project.demo}
                  className="cursor-pointer relative inline-flex items-center justify-center p-0.5 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <span className="relative px-2 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex gap-2">
                    <HiOutlineSignal className="self-center size-5" />
                    Demo
                  </span>
                </a>
                <a
                  href={project.repository}
                  className="cursor-pointer relative inline-flex items-center justify-center p-0.5 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                >
                  <span className="relative px-2 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex gap-2">
                    <FiGithub className="self-center size-5" />
                    Repositório
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
