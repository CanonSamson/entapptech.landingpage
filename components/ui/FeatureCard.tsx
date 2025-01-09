import Image from "next/image";

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex flex-col  font-montserrat items-center">
      <Image
        src={image}
        alt={title}
        className="w-full md:w-1/3 object-cover"
        width={300}
        height={300}
      />
      <div className="px-6 pb-6 border border-divider border-t-[0px] relative">
        <div className=" bg-secondary inline-flex relative p-4 rounded-[5px] top-[-30px]">
          <Image
            src={icon}
            alt={"icon"}
            className=" object-cover"
            width={26}
            height={26}
          />
        </div>
        <h3 className="text-xl  mb-2 font-medium">{title}</h3>
        <p className="text-divider-300 font-openSans">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
