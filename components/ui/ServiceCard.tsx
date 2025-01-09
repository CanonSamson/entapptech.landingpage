import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

// Define the props interface
interface ServiceCardProps {
  icon: string | StaticImport;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white p-6  pr-[20%] py-10 flex flex-col items-xtart text-start">
      <div>
        <Image
          src={icon}
          width={44}
          height={44}
          alt={title}
          className=" h-[50px] w-[50px]"
        />
        <div className="w-[50px] mt-4 border-b border-divider" />
      </div>
      <h3 className="text-xl  font-normal  mt-4 font-montserrat mb-2">
        {title}
      </h3>
      <p className="text-divider-300 font-openSans">{description}</p>
    </div>
  );
};

export default ServiceCard;