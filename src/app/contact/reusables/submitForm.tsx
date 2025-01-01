import { useCallback } from "react";

interface UseSubmitFormOptions {
  url: string;
  onSuccess?: () => void;
  onError?: (error: any) => void;
}

const useSubmitForm = ({ url, onSuccess, onError }: UseSubmitFormOptions) => {
  const submitForm = useCallback(
    async (data: any) => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        console.log(data);

        if (response.ok) {
          console.log("Message sent successfully!");
          onSuccess?.();
        } else {
          throw new Error("Failed to send the message");
        }
      } catch (error) {
        console.error("Something went wrong:", error);
        onError?.(error);
      }
    },
    [url, onSuccess, onError]
  );

  return submitForm;
};

export default useSubmitForm;
