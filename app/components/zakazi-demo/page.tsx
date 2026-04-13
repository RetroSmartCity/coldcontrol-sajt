import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ResponseData =
  | { success: true }
  | { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed." });
  }

  try {
    const {
      company,
      person,
      phone,
      email,
      address,
      type,
      locations,
      sensors,
      message,
    } = req.body;

    if (!company || !person || !phone || !email) {
      return res.status(400).json({ error: "Nedostaju obavezna polja." });
    }

    await resend.emails.send({
      from: "ColdControl Demo <onboarding@resend.dev>",
      to: process.env.DEMO_RECEIVER_EMAIL || "",
      subject: `Novi demo zahtev - ${company}`,
      html: `
        <h2>Novi zahtev za demo</h2>
        <p><strong>Ime firme:</strong> ${company}</p>
        <p><strong>Kontakt osoba:</strong> ${person}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Grad / adresa:</strong> ${address || "-"}</p>
        <p><strong>Tip objekta:</strong> ${type || "-"}</p>
        <p><strong>Broj lokacija:</strong> ${locations || "-"}</p>
        <p><strong>Broj senzora:</strong> ${sensors || "-"}</p>
        <p><strong>Poruka:</strong><br/>${message || "-"}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Greška pri slanju zahteva." });
  }
}