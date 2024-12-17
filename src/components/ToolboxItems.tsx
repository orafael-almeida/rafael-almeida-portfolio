import { twMerge } from "tailwind-merge";

const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: { title: string }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemsWrapperClassName
        )}
      >
        {items.map((item) => (
          <div
            key={item.title}
            className="self-center cursor-auto p-0.5 text-sm text-gray-900 rounded-lg  bg-gradient-to-r from-emerald-300 to-sky-400 dark:text-white h-max"
          >
            <span className="flex font-semibold gap-4 outline text-slate-700 dark:text-slate-300 outline-2 outline-white/10 px-2 py-3 bg-white/60 dark:bg-gray-900 rounded-md">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolboxItems;
