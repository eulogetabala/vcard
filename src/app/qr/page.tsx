"use client";

import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { profile } from "@/data/profile";

/**
 * QR pour carte physique : encode l’URL de la carte web.
 * Au scan → page designée → l’utilisateur enregistre le contact depuis là.
 */
export default function QrPrintPage() {
  const [cardUrl, setCardUrl] = useState<string>(profile.website);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hostname === "localhost") {
      setCardUrl(window.location.origin);
    }
  }, []);

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-8 gap-8">
      <div className="text-center max-w-sm">
        <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-[#0d1424]">
          {profile.fullName}
        </p>
        <p className="text-sm text-[#64748b] mt-1">
          Scannez pour ouvrir ma carte de visite
        </p>
      </div>

      <div className="p-5 rounded-3xl border-2 border-[#0d1424]/10 bg-white shadow-lg">
        <QRCodeSVG
          value={cardUrl}
          size={260}
          level="M"
          bgColor="#ffffff"
          fgColor="#0d1424"
          includeMargin
        />
      </div>

      <p className="text-xs text-[#94a3b8] text-center max-w-xs leading-relaxed">
        Ce QR ouvre <strong className="text-[#0d1424]">{profile.websiteDisplay}</strong>,
        puis la personne peut enregistrer le contact sur la carte. À imprimer sur ta
        carte physique.
      </p>
      <p className="text-[10px] text-[#cbd5e1] font-mono break-all text-center max-w-xs">
        {cardUrl}
      </p>
    </main>
  );
}
