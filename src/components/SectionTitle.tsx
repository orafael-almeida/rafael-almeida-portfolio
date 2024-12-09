const SectionTitle = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow?: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="  tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-xl text-center bg-clip-text text-transparent">
            ../{eyebrow}
            </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
        {title}
      </h2>
      <p className="text-center md:text-lg text-white/60 mt-4 mx-auto">
        {description}
      </p>
    </>
  );
};

export default SectionTitle;
