import Image from "next/image";

// Define the props interface
interface TeamCardProps {
  image: string;
  name: string;
  role: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ image, name, role }) => {
  return (
    <div className=" font-montserrat">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="w-full h-[300px] object-cover"
      />
      <div className="py-4">
        <h3 className="text-[24px] font-medium mb-2 ">{name}</h3>
        <div className=" flex items-center gap-1">
          <div className="w-[24px] border-b border-divider-300" />

          <p className="text-divider-300 italic text-[16px] font-openSans">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
