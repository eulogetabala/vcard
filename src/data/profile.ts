export const profile = {
  firstName: "Euloge",
  lastName: "Tabala",
  fullName: "Euloge Tabala",
  title: "Ingénieur logiciel · Cloud & DevOps · Project Manager",
  organization: "Euloge Tabala",
  phone: "+242065298498",
  phoneDisplay: "+242 065298498",
  email: "eulogetabala51@gmail.com",
  /** URL de la carte (QR → cette page) */
  cardUrl: "https://euloge-tabala.netlify.app",
  /** Portfolio professionnel */
  portfolio: "https://eulogetabala.cg",
  portfolioDisplay: "eulogetabala.cg",
  linkedin: "https://www.linkedin.com/in/euloge-tabala-mabandza-84072a310/",
  linkedinDisplay: "Profil LinkedIn",
  location: "République du Congo",
  avatar: "/hello-1.png",
  vcardNotes: "Portfolio : eulogetabala.cg",
} as const;

export type Profile = typeof profile;
