import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type IndustryCardProps = {
  title: string;
  image: StaticImageData;
  slug?: string;
};

const IndustryCard: React.FC<IndustryCardProps> = ({ title, image, slug}) => {
  return (
    <div className="relative  w-full h-60">
      <Image
        src={image}
        alt="dashboard"
        className="w-full rounded-tr-3xl rounded-br-3xl rounded-bl-3xl h-full object-cover"
        height={800}
        width={1000}
      />
      <div className="absolute bottom-2 left-2">
        <Link href={`/industries/${slug}`}>
          <button className="flex truncate items-center justify-center px-2 sm:px-4 py-2 bg-white text-black text-sm font-semibold rounded-full shadow-md">
            <div className="line-clamp-2"> 
            {title}
            </div>
            <span className="text-sm ms-1">&rarr;</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default IndustryCard;
