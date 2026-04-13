import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

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
    } = body;

    if (!company || !person || !phone || !email) {
      return NextResponse.json(
        { error: "Nedostaju obavezna polja." },
        { status: 400 }
      );
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

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Greška pri slanju zahteva." },
      { status: 500 }
    );
  }
}