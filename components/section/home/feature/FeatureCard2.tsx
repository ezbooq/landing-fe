type FeatureCard2Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
};

const FeatureCard2: React.FC<FeatureCard2Props> = ({
  icon,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={`flex flex-col justify-between gap-3 ${className} hover:bg-[#F5FDF3] border border-gray-200 hover:border-primary px-4 py-4 rounded-lg min-h-[18rem]`}
    >
      <div className="w-12 h-12 flex justify-center items-center rounded-md bg-secondary text-2xl text-[#6143E9]">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm mb-4">{description}</p>
      {/* <button className="flex items-start justify-start bg-transparent text-black text-sm font-semibold">
        <div className="truncate">Learn More</div>
        <span className="text-sm ms-2">&rarr;</span>
      </button> */}
    </div>
  );
};

export default FeatureCard2;
