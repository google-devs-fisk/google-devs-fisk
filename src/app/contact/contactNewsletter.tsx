"use client";
import { NewsLetter } from "@/components";
import InputField from "./reusables/inputField";
import { FieldValues, useForm } from "react-hook-form";
import useSubmitForm from "./reusables/submitForm";

const Newsletter = () => {
  const { register, handleSubmit, reset } = useForm();
  const submitForm = useSubmitForm({
    url: "https://jsonplaceholder.typicode.com/posts",
  });

  const onSubmit = (data: FieldValues) => {
    submitForm(data);
    reset();
  };

  return (
    <div className="relative md:py-auto">
      <div className="hidden sm:flex justify-center items-center">
        <NewsLetter />
      </div>

      <div className="relative sm:absolute sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 py-20 flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center gap-2 ">
          <p className="text-[15px] font-thin text-gray-900 dark:text-white lg:text-[2rem]">
            SUBSCRIBE TO OUR NEWSLETTER
          </p>
          <p className="text-[10px] font-thin text-gray-900 dark:text-white lg:text-[1rem]">
            Receive info about any of our projects and new deployments
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative flex items-center w-96 rounded-full bg-gradient-to-r from-[#dc00d3] via-pink-500 to-purple-500 p-[2px] overflow-hidden">
            <form
              className="flex w-full items-center bg-[#100425] rounded-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <InputField
                id="newsletter-email"
                type="email"
                className="flex-1 bg-transparent text-white placeholder-white px-4 py-2 outline-none text-sm"
                placeholder="example@gmail.com"
                register={register}
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r via-[#dc00d3] from-pink-500 to-purple-500 text-white text-sm font-xl px-6 py-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
