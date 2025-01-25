import { FcGoogle } from "react-icons/fc";
import { IoMdStar } from "react-icons/io";

const Hero2: React.FC = () => {
  return (
    <div className="text-center mb-8 mt-8 sm:mt-2 bg-secondary">
      <div className="max-w-5xl mx-auto sm:p-10 px-5 py-5">
        <h1 className="text-2xl sm:text-4xl font-medium mb-4">
          Trusted by Hundreds of Large & Small Businesses Around The world
        </h1>
        <p className="text-black text-sm sm:text-base mb-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius rem non
          perferendis maiores molestiae sint voluptates? Expedita ullam, sint
          incidunt voluptate architecto delectus laborum eligendi, accusamus
          animi magnam, molestiae velit!
        </p>
        <div className="mt-8 flex items-center justify-center gap-2">
          <FcGoogle className="text-2xl" />
          <IoMdStar className="text-2xl text-yellow" />
          <IoMdStar className="text-2xl text-yellow" />
          <IoMdStar className="text-2xl text-yellow" />
          <IoMdStar className="text-2xl text-yellow" />
          <IoMdStar className="text-2xl text-yellow" />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
