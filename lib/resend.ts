import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

export interface BookingEmailData {
  id?: string;
  prestation: {
    title: string;
    duration: string;
    price: string;
  };
  date: string;
  time: string;
  clientInfo: {
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    message?: string;
  };
}
