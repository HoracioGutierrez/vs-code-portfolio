// Campos del formulario de contacto
export type ContactFormFields = "name" | "email" | "message";

export type ContactFormStore = {
  name: string;
  email: string;
  message: string;
  setPropertyValue: (property: ContactFormFields, value: string) => void;
  resetForm: () => void;
};
