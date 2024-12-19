import { FaHeart } from "react-icons/fa";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
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

  return (
    <footer className="py-5 border-sky-800 border-t-2 dark:border-white/15">
      <div className="flex flex-col-reverse">
        <div className="flex gap-2 justify-center items-center py-1">
          Made with <FaHeart className="text-emerald-400" /> by Rafa
        </div>
        <div className="text-3xl text-slate-200 dark:text-gray-600 flex justify-center items-center gap-3">
          {MOCK_CONTACTS.map((contact, index) => (
            <a
              href={contact.url}
              key={`contact-${index}`}
              target="_blank"
              rel="noreferrer noopener"
              className="text-gray-500 dark:hover:text-slate-300 dark:text-gray-600 transform transition-all duration-300 hover:-translate-y-1"
            >
              {contact.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
