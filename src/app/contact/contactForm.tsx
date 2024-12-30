import { FieldValues, useForm } from "react-hook-form";
import InputField from "./reusables/inputField";
import useSubmitForm from "./reusables/submitForm";

interface FormProps {
  interest: string;
  onSuccess?: () => void;
  onError?: (error: any) => void;
}

const Form = ({ interest, onSuccess, onError }: FormProps) => {
  const { register, handleSubmit, reset } = useForm();

  const submitForm = useSubmitForm({
    url: "https://jsonplaceholder.typicode.com/posts",
    onSuccess,
    onError,
  });

  const onSubmit = (data: FieldValues) => {
    const formData = {
      ...data,
      interest,
    };
    submitForm(formData);
    reset();
  };
  return (
    <form className="max-w mx-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="relative z-0 w-full mb-5 group">
        <InputField
          id="name"
          type="text"
          className="block py-2.5 px-0 w-full text-sm text-white placeholder-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-[#A91179] focus:outline-none focus:ring-0 focus:border-[#A91179] peer caret-[#A91179]"
          placeholder="Your name"
          register={register}
          required
        />
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <InputField
          id="email"
          type="email"
          className="block py-2.5 px-0 w-full text-sm text-white placeholder-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-[#A91179] focus:outline-none focus:ring-0 focus:border-[#A91179] peer caret-[#A91179]"
          placeholder="Your email"
          register={register}
          required
        />
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <InputField
          id="subject"
          type="text"
          className="block py-2.5 px-0 w-full text-sm text-white placeholder-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-[#A91179] focus:outline-none focus:ring-0 focus:border-[#A91179] peer caret-[#A91179]"
          placeholder="Message Subject"
          register={register}
          required
        />
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <InputField
          id="description"
          type="text"
          className="block py-2.5 px-0 w-full text-sm text-white placeholder-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-[#A91179] focus:outline-none focus:ring-0 focus:border-[#A91179] peer caret-[#A91179]"
          placeholder="Brief Description of your Idea (if any)"
          register={register}
        />
      </div>

      <button
        type="submit"
        className="flex gap-4 items-center self-start px-5 py-3 text-center rounded-2xl max-md:px-5 max-md:mt-10 bg-gradient-to-r to-[#46c6fd] from-[#dc00d3] text-white focus:outline-none"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/41716a93c1bd0273a257ff096057b7833fc51da3a164a8fa5848d97a4aa736f6?placeholderIfAbsent=true&apiKey=8a41729a6a6e4864bd4f2cf5dd70fa62"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <span>Send Message</span>
      </button>
    </form>
  );
};

export default Form;
