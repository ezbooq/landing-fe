import { FaCircle } from "react-icons/fa";

type FeatureCardProps = {
  id: string;
  title: string;
  description: string;
  options: string[];
  className?: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  id,
  title,
  description,
  options,
  className,
}) => {
  return (
    <div
      className={`flex flex-col justify-between gap-3 ${className} border border-gray-200 px-4 py-8 rounded-lg min-h-[29rem]`}
    >
      <div className="text-sm font-semibold px-5 py-1 w-9 h-9 flex justify-center items-center rounded-md bg-white">
        {id}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm mb-4">{description}</p>
      {options.map((option, index) => (
        <div
          key={option}
          className={`bg-white px-4 py-1 rounded-md ${
            index === 0
              ? "rotate-3 mb-3"
              : index === 1
              ? "-rotate-3 origin-bottom mb-3"
              : ""
          }`}
        >
          <div
            className={`text-sm flex items-center gap-2 bg-white ${
              index === 0
                ? "text-[#EFA617]"
                : index === 1
                ? "text-[#4D77E3]"
                : "text-primary"
            } my-1`}
          >
            <div>
              <FaCircle />
            </div>
            <p>{option}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
