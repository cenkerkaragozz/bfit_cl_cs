import { Resend } from "resend";

type CheckUpPayload = {
  parentName?: unknown;
  phone?: unknown;
  childAge?: unknown;
  concern?: unknown;
  note?: unknown;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: CheckUpPayload;

  try {
    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      payload = (await request.json()) as CheckUpPayload;
    } else {
      payload = Object.fromEntries(await request.formData());
    }
  } catch {
    return Response.json({ message: "Geçersiz form verisi." }, { status: 400 });
  }

  const parentName = clean(payload.parentName);
  const phone = clean(payload.phone);
  const childAge = clean(payload.childAge);
  const concern = clean(payload.concern) || "Seçilmedi";
  const note = clean(payload.note) || "Not paylaşılmadı";

  if (!parentName || !phone || !childAge) {
    return Response.json(
      { message: "Ad, telefon ve yaş alanları zorunludur." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CHECKUP_EMAIL_TO;
  const from = process.env.CHECKUP_EMAIL_FROM;

  if (!apiKey || !to || !from) {
    return Response.json(
      { message: "E-posta ayarları henüz yapılandırılmadı." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const timestamp = new Intl.DateTimeFormat("tr-TR", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Istanbul",
  }).format(new Date());

  const text = [
    "Yeni Zihin Check-Up talebi",
    "",
    `Ad Soyad: ${parentName}`,
    `Telefon: ${phone}`,
    `Çocuğun yaşı: ${childAge}`,
    `Seçilen durum: ${concern}`,
    `Not: ${note}`,
    `Tarih: ${timestamp}`,
  ].join("\n");

  try {
    await resend.emails.send({
      from,
      to,
      subject: "Yeni Zihin Check-Up Talebi - BrainFit Karşıyaka",
      text,
    });
  } catch {
    return Response.json(
      { message: "E-posta gönderimi şu anda tamamlanamadı." },
      { status: 502 },
    );
  }

  return Response.json({ message: "Talep başarıyla gönderildi." });
}
