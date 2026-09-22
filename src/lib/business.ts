export const BUSINESS = {
  name: "Shivganga Sanitary Ware & Panels",
  shortName: "Shivganga",
  email: "shivgangasanitaryware@gmail.com",
  location: "Varanasi, Uttar Pradesh",
  phones: [
    { display: "+91 95694 12653", dial: "+919569412653", wa: "919569412653" },
    { display: "+91 99194 03832", dial: "+919919403832", wa: "919919403832" },
  ],
} as const;

export const PRIMARY_WA = BUSINESS.phones[0].wa;

/** Build a wa.me link with a contextual, prefilled inquiry message. */
export function waLink(topic?: string, number: string = PRIMARY_WA) {
  const message = topic
    ? `Hello ${BUSINESS.name}, I'm interested in ${topic}. Please share available options and pricing.`
    : `Hello ${BUSINESS.name}, I'd like to know more about your sanitary ware and panels. Please guide me.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
