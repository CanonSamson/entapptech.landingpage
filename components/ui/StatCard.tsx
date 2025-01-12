interface StatCardProps {
  value: number | string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <div
      className="border-divider max-w-[70%] border w-full p-5 flex flex-col items-center justify-center "
    >
      <h3 className="text-[32px] md:text-[50px]  text-divider font-medium">{value}</h3>
      <p className="text-[9.5px] md:text-[15px] text-divider/80 mt-2">{label}</p>
    </div>
  );
};

export default StatCard;
