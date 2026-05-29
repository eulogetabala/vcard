import { profile } from "@/data/profile";

export interface ContactData {
  firstName: string;
  lastName: string;
  title: string;
  organization: string;
  phone: string;
  email: string;
  website: string;
  linkedin: string;
  location: string;
  notes: string;
  photoUrl?: string;
}

export function profileToContactData(): ContactData {
  return {
    firstName: profile.firstName,
    lastName: profile.lastName,
    title: profile.title,
    organization: profile.organization,
    phone: profile.phone,
    email: profile.email,
    website: profile.website,
    linkedin: profile.linkedin,
    location: profile.location,
    notes: profile.vcardNotes,
    photoUrl: profile.avatar,
  };
}

/** Chaîne vCard — utilisée par le QR physique, l’API et le bouton d’enregistrement */
export function buildVCardString(
  contact: ContactData = profileToContactData(),
  opts?: { compact?: boolean }
): string {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${contact.lastName};${contact.firstName};;;`,
    `FN:${contact.firstName} ${contact.lastName}`,
    `ORG:${contact.organization}`,
    `TITLE:${contact.title}`,
    `TEL;TYPE=CELL:${contact.phone}`,
    `EMAIL;TYPE=INTERNET:${contact.email}`,
    `URL;TYPE=WORK:${contact.website}`,
    `URL;TYPE=LinkedIn:${contact.linkedin}`,
  ];

  if (!opts?.compact) {
    lines.push(`ADR;TYPE=WORK:;;${contact.location};;;;`);
    lines.push(`NOTE:${contact.notes.replace(/\n/g, "\\n")}`);
    if (contact.photoUrl && typeof window !== "undefined") {
      const photo = contact.photoUrl.startsWith("http")
        ? contact.photoUrl
        : `${window.location.origin}${contact.photoUrl}`;
      lines.push(`PHOTO;VALUE=URI:${photo}`);
    }
  }

  lines.push("END:VCARD");
  return lines.join("\r\n");
}

export function generateAndDownloadVCard(
  contact: ContactData = profileToContactData()
): void {
  const vcard = buildVCardString(contact);
  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute(
    "download",
    `${contact.firstName}_${contact.lastName}.vcf`
  );
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
