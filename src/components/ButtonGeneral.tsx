import { IconType } from "react-icons";

const ButtonGeneral = ({
  title,
  link,
  Icon,
}: {
  title: string;
  link: string;
  Icon: IconType;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer relative inline-flex items-center justify-center p-0.5 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-emerald-300 to-sky-400 group-hover:from-emerald-300 group-hover:to-sky-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
    >
      <span className="relative px-2 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex gap-2">
        <Icon className="self-center size-5" />
        {title}
      </span>
    </a>
  );
};

export default ButtonGeneral;
