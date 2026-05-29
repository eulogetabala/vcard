import { buildVCardString, profileToContactData } from "@/utils/vcard";

export function GET() {
  const body = buildVCardString(profileToContactData(), { compact: true });

  return new Response(body, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Euloge_Tabala.vcf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
