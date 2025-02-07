"use client";

import { NewsLetter } from "@/components";
import InputField from "@/components/contact/inputField";
import { useActionState } from "react";
import * as actions from "@/actions"; // Import server actions

const ContactNewsletter = () => {
  // Bind to server action using useActionState
  const [formState, action] = useActionState(actions.subscriberFormSubmit, {
    errors: {},
  });

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
              className="flex w-full h-full items-center bg-[#100425] rounded-full"
              action={action} // Bind the form to the server action
            >
              <InputField
                id="newsletter-email"
                name="email"
                type="email"
                className="flex-1 h-full bg-transparent text-white placeholder-white px-4 py-2 outline-none text-sm"
                placeholder="example@gmail.com"
                hasBorder={false}
                required
                isInvalid={!!formState.errors.email}
                errorMessage={formState.errors.email?.join(", ")}
              />
              <button
                type="submit"
                className="h-full bg-gradient-to-r via-[#dc00d3] from-pink-500 to-purple-500 text-white text-sm font-xl px-6 py-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {/* Form Errors */}
        {formState.errors._form && (
          <p className="mt-4 text-red-500 text-sm">
            {formState.errors._form.join(", ")}
          </p>
        )}
        {formState.message && (
          <p className="mt-4 text-green-500 text-sm">{formState.message}</p>
        )}
      </div>
    </div>
  );
};

export default ContactNewsletter;

