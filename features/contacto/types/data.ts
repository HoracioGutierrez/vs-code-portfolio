export type ContactMessage = {
  name: string;
  email: string;
  message: string;
};

export type ContactRecord = ContactMessage & {
  id?: number;
  created_at?: string;
};
