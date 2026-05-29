"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, Globe, MessageCircle, Contact, type LucideIcon } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { profile } from "@/data/profile";
import { generateAndDownloadVCard } from "@/utils/vcard";

const waUrl = `https://wa.me/${profile.phone.replace(/\D/g, "")}`;

const infos = [
  {
    icon: Phone,
    label: "Téléphone & WhatsApp",
    value: profile.phoneDisplay,
    href: `tel:${profile.phone}`,
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    icon: Globe,
    label: "Site",
    value: profile.websiteDisplay,
    href: profile.website,
    external: true,
  },
  {
    label: "LinkedIn",
    value: profile.linkedinDisplay,
    href: profile.linkedin,
    external: true,
    brand: "linkedin" as const,
  },
] as const;

type InfoItem =
  | {
      icon: LucideIcon;
      label: string;
      value: string;
      href: string;
      external: boolean;
      brand?: undefined;
    }
  | {
      label: string;
      value: string;
      href: string;
      external: boolean;
      brand: "linkedin";
      icon?: undefined;
    };

export default function VCardScreen() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="card w-full max-w-[380px] rounded-[2rem] overflow-hidden"
    >
      <div className="px-6 pt-10 pb-8 flex flex-col items-center text-center">
        {/* Photo */}
        <div className="photo-ring rounded-full mb-6">
          <div className="relative w-[7.5rem] h-[7.5rem] rounded-full overflow-hidden bg-[var(--ink-soft)]">
            <Image
              src={profile.avatar}
              alt={profile.fullName}
              fill
              className="object-cover object-top"
              priority
              sizes="120px"
            />
          </div>
        </div>

        <h1 className="font-[family-name:var(--font-display)] text-[1.65rem] font-semibold tracking-tight text-[var(--text)]">
          {profile.fullName}
        </h1>
        <p className="mt-1.5 text-sm text-[var(--cyan)] font-medium">
          {profile.title}
        </p>
        <p className="mt-1 text-xs text-[var(--text-muted)]">{profile.location}</p>

        {/* Infos essentielles */}
        <ul className="w-full mt-8 space-y-2.5 text-left">
          {(infos as readonly InfoItem[]).map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="info-row flex items-center gap-3.5 px-4 py-3.5 rounded-2xl group"
              >
                <span className="w-10 h-10 shrink-0 rounded-xl bg-[rgba(34,211,238,0.1)] flex items-center justify-center">
                  {item.brand === "linkedin" ? (
                    <FaLinkedin className="w-[18px] h-[18px] text-[#0A66C2]" />
                  ) : (
                    <item.icon
                      className="w-[18px] h-[18px] text-[var(--cyan)]"
                      strokeWidth={1.75}
                    />
                  )}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                    {item.label}
                  </span>
                  <span className="block text-sm font-medium text-[var(--text)] truncate group-hover:text-[var(--cyan)] transition-colors">
                    {item.value}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA principal */}
        <div className="w-full mt-8 space-y-3">
          <button
            type="button"
            onClick={() => generateAndDownloadVCard()}
            className="btn-save w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl text-[15px]"
          >
            <Contact className="w-5 h-5" strokeWidth={2} />
            Enregistrer dans le téléphone
          </button>

          <a
            href="/api/vcard"
            download="Euloge_Tabala.vcf"
            className="block text-center text-[11px] text-[var(--text-muted)] hover:text-[var(--cyan)] transition-colors"
          >
            Ou télécharger le fichier .vcf
          </a>

          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-medium text-[var(--text)]"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" strokeWidth={2} />
              WhatsApp
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="btn-ghost flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-medium text-[var(--text)]"
            >
              <Phone className="w-4 h-4 text-[var(--cyan)]" strokeWidth={2} />
              Appeler
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
