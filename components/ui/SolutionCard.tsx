import Image from "next/image";

// Define the props interface
interface SolutionCardProps {
  image: string;
  title: string;
  description: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className=" font-montserrat">
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="w-full h-40 object-cover"
      />
      <div className="py-4">
        <h3 className="text-[14px]  font-medium mb-2">{title}</h3>
        <p className="text-divider-300 text-[12px] font-openSans">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SolutionCard;
