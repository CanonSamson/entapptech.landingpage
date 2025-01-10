// Define the props type
interface CustomInputProps {
  label: string;
  type?: string;
  id: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type = "text",
  id,
  name,
  placeholder,
  required = false,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block  font-medium text-[#414651] text-[14px]  font-montserrat"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="w-full mt-1 px-4  text-[14px]  font-medium font-inter h-[44px] py-2 border border-divider rounded-md focus:outline-none "
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default CustomInput;
