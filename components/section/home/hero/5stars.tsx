import { FcGoogle } from "react-icons/fc";
import { IoMdStar } from "react-icons/io";

const Hero2: React.FC = () => {
  return (
    <section className="text-center mb-8 mt-8 sm:mt-2 bg-[#F9F9F9]">
      <div className="max-w-6xl mx-auto sm:p-10 px-5 py-5 text-primary">
        <h1 className="text-2xl sm:text-3xl font-medium mb-4">
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
          {[...Array(5)].map((_, i) => (
            <IoMdStar key={i} className="text-2xl text-yellow" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero2;
