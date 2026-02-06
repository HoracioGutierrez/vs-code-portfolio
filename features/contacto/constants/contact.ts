export const CONTACT_INFO = {
    email: "horacio.estevez@gmail.com",
    phone: "1135069607",
} as const;

export const CONTACT_LINKS = {
    email: `mailto:${CONTACT_INFO.email}`,
    phone: `tel:${CONTACT_INFO.phone}`,
} as const;
