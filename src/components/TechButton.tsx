import { IconType } from "react-icons";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTailwindcss,
  SiFramer,
  SiZod,
  SiReacthookform,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";

const TechButton = ({ variant }: { variant: string }) => {
  let title: string;
  let Icon: IconType | null;

  switch (variant) {
    case "next":
      title = "Next.js";
      Icon = TbBrandNextjs;
      break;
    case "react":
      title = "React";
      Icon = SiReact;
      break;
    case "tailwind":
      title = "TailwindCSS";
      Icon = SiTailwindcss;
      break;
    case "node":
      title = "Node.js";
      Icon = SiNodedotjs;
      break;
    case "zustand":
      title = "Zustand";
      Icon = null;
      break;
    case "motion":
      title = "Framer Motion";
      Icon = SiFramer;
      break;
    case "zod":
      title = "Zod";
      Icon = SiZod;
      break;
    case "react-hook-form":
      title = "React Hook Form";
      Icon = SiReacthookform;
      break;
    default:
      title = "Default Button";
      Icon = null;
  }

  return (
    <button className="self-center cursor-auto p-0.5 text-sm text-gray-900 rounded-lg  bg-gradient-to-r from-emerald-300 to-sky-400 dark:text-white  dark:focus:ring-blue-800 h-max">
      <span className="px-2 py-1.5 bg-white dark:bg-gray-900 rounded-md  flex">
        {Icon && <Icon className="self-center text-xl" />}
        <span className="hidden md:block">{title}</span>
      </span>
    </button>
  );
};

export default TechButton;
