// Define the interface for form state and errors
export interface ContactFormState {
  interest?: string; // Optional interest value
  errors: {
    name?: string[]; // Array of validation errors for the name field
    email?: string[]; // Array of validation errors for the email field
    subject?: string[]; // Array of validation errors for the subject field
    message?: string[]; // Array of validation errors for the message field
    interest?: string[]; // Array of validation errors for the interest field
    _form?: string[]; // Array of general form-level errors
  };
}

export interface SubscriberFormState {
  errors: {
    email?: string[]; // Field-specific errors
    _form?: string[]; // General form-level errors
  };
  message?: string; // Success message
}

/** These are component's element state props */
export interface CHeaderProps {
  headingText: string;
  onInterestSelect: (selectedInterest: string) => void;
}

export interface InputFieldProps {
  id: string; // Unique identifier for the input
  name: string; // Name attribute for the input, used by useFormState
  type: string; // Input type (e.g., text, email, etc.)
  placeholder: string; // Placeholder text for the input
  isInvalid?: boolean; // Whether the input is invalid
  errorMessage?: string; // Error message to display if the input is invalid
  required?: boolean; // Whether the input is required
  className?: string; // Additional CSS classes
  hasBorder?: boolean; // Optional prop to control border styles
}
