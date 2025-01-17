import { InputFieldProps } from "@/types/contact";

const InputField: React.FC<InputFieldProps> = ({
  id,
  name,
  type,
  placeholder,
  isInvalid = false,
  errorMessage,
  required = false,
  className = "",
  hasBorder = true, // Optional prop to control border styles
}) => {
  return (
    <div className="relative z-0 w-full group">
      <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      className={`block py-2.5 pl-2.5 w-full text-sm text-white placeholder-white bg-transparent border-0 ${hasBorder ? "border-b-2": ""} appearance-none peer caret-[#A91179]
      ${
        isInvalid
          ? "border-red-500 focus:border-red-500"
          : "border-white focus:border-[#A91179]"
      }
        ${className}`}
      />
      {isInvalid && errorMessage && (
        <p className="mt-2 text-xs text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default InputField;
