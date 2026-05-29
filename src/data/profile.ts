export const profile = {
  firstName: "Euloge",
  lastName: "Tabala",
  fullName: "Euloge Tabala",
  title: "Ingénieur logiciel · Cloud & DevOps · Project Manager",
  organization: "Euloge Tabala",
  phone: "+24265298498",
  phoneDisplay: "+242 06 52 98 498",
  email: "eulogetabala51@gmail.com",
  website: "https://eulogetabala.cg",
  websiteDisplay: "eulogetabala.cg",
  linkedin: "https://www.linkedin.com/in/euloge-tabala-mabandza-84072a310/",
  linkedinDisplay: "Profil LinkedIn",
  location: "République du Congo",
  avatar: "/hello-1.png",
  vcardNotes: "Contact partagé via eulogetabala.cg",
} as const;

export type Profile = typeof profile;
