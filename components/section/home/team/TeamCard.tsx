import Image, { StaticImageData } from "next/image";

type TeamCardProps = {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  altText: string;
};

const TeamCard: React.FC<TeamCardProps> = ({
  title,
  description,
  imageSrc,
  altText,
}) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-md flex-shrink-0">
      <Image
        src={imageSrc}
        alt={altText}
        width={500}
        height={500}
        className="object-cover h-80 w-60 md:w-full"
      />
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-5">
        <h3 className="text-white text-lg font-medium">{title}</h3>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
