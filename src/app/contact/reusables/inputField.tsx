import { UseFormRegister } from "react-hook-form";

interface InputFieldProps {
  id: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
  required?: boolean;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  type,
  placeholder,
  register,
  required = false,
  className,
}) => {
  return (
    <input
      type={type}
      id={id}
      className={className}
      placeholder={placeholder}
      required={required}
      {...register(id)}
    />
  );
};

export default InputField;
