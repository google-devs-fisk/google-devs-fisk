"use client";

import { useEffect, useActionState } from "react";
import Image from "next/image";
import InputField from "./inputField";
import CHeader from "./cardHeader";
import * as actions from "@/actions";
import ToastNotification from "./toast";

export default function ContactForm() {
  // Use useActionState to bind the form to the server action
  const [formState, action] = useActionState(actions.contactFormSubmit, {
    errors: {},
  });

  // Initialize toast notifications
  const successToast = ToastNotification({
    message: "Message Sent",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/41716a93c1bd0273a257ff096057b7833fc51da3a164a8fa5848d97a4aa736f6?placeholderIfAbsent=true&apiKey=8a41729a6a6e4864bd4f2cf5dd70fa62",
  });

  const errorToast = ToastNotification({
    message: "Failed To Send Message",
    icon: "https://img.icons8.com/?size=100&id=46&format=png&color=FFFFFF",
  });

  // // Watch for formState changes to show appropriate toasts
  useEffect(() => {
    // If there are no errors, it means the submission was successful
    if (formState && Object.keys(formState.errors).length === 0) {
      successToast.showToast();

      // Clear form on success
      const form = document.querySelector("form") as HTMLFormElement;
      if (form) form.reset();
    }
    // Show error toast if there are form-level errors
    else if (formState?.errors?._form) {
      errorToast.showToast();
    }
  }, [formState]);

  const handleInterestSelect = (selectedInterest: string) => {
    // Update the hidden input in the form with the selected interest
    const formElement = document.querySelector("form")!;
    const interestInput = formElement.querySelector(
      "input[name='interest']"
    ) as HTMLInputElement;

    if (interestInput) {
      interestInput.value = selectedInterest;
    } else {
      const hiddenInput = document.createElement("input");
      hiddenInput.type = "hidden";
      hiddenInput.name = "interest";
      hiddenInput.value = selectedInterest;
      formElement.appendChild(hiddenInput);
    }
  };

  return (
    <form className="max-w mx-4" action={action}>
      {/* Header Component */}
      <CHeader
        headingText="I'm interested in..."
        onInterestSelect={handleInterestSelect}
      />

      {/* Form Fields */}
      <div className="relative z-0 w-full mb-5 group">
        <InputField
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          isInvalid={!!formState.errors.name}
          errorMessage={formState.errors.name?.join(", ")}
          required
        />
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <InputField
          id="email"
          name="email"
          type="email"
          placeholder="Your email"
          isInvalid={!!formState.errors.email}
          errorMessage={formState.errors.email?.join(", ")}
          required
        />
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <InputField
          id="subject"
          name="subject"
          type="text"
          placeholder="Message Subject"
          isInvalid={!!formState.errors.subject}
          errorMessage={formState.errors.subject?.join(", ")}
          required
        />
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <InputField
          id="message"
          name="message"
          type="text"
          placeholder="Brief Description of your Idea (if any)"
          isInvalid={!!formState.errors.message}
          errorMessage={formState.errors.message?.join(", ")}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="flex gap-4 items-center self-start px-5 py-3 text-center rounded-2xl bg-gradient-to-r to-[#46c6fd] from-[#dc00d3] text-white focus:outline-none"
      >
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/41716a93c1bd0273a257ff096057b7833fc51da3a164a8fa5848d97a4aa736f6?placeholderIfAbsent=true&apiKey=8a41729a6a6e4864bd4f2cf5dd70fa62"
          alt="Submit icon"
          width={24}
          height={24}
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
        <span>Send Message</span>
      </button>
    </form>
  );
}
