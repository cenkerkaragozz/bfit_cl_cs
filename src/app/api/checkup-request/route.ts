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
    return Response.json({ message: "Lütfen tüm alanları doğru formatta doldurunuz." }, { status: 400 });
  }

  const parentName = clean(payload.parentName);
  const phone = clean(payload.phone);
  const childAge = clean(payload.childAge);
  const concern = clean(payload.concern) || "Henüz Seçim Yapılmadı";
  const note = clean(payload.note) || "Not Eklenmedi";

  if (!parentName || !phone || !childAge) {
    return Response.json(
      { message: "Lütfen ad, telefon ve yaş bilgilerini eksiksiz giriniz." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CHECKUP_EMAIL_TO;
  const from = process.env.CHECKUP_EMAIL_FROM;

  if (!apiKey || !to || !from) {
    return Response.json(
      { message: "Sistem hatası: E-posta servisi şu an aktif değil." },
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
    "Yeni Zihin Check-Up Başvurusu",
    "",
    `Adı Soyadı: ${parentName}`,
    `Telefon: ${phone}`,
    `Çocuğun Yaşı: ${childAge}`,
    `Belirtilen Durum: ${concern}`,
    `Veli Notu: ${note}`,
    `Başvuru Tarihi: ${timestamp}`,
  ].join("\n");

  try {
    await resend.emails.send({
      from,
      to,
      subject: "BrainFit Karşıyaka - Yeni Başvuru Bildirimi",
      text,
    });
  } catch {
    return Response.json(
      { message: "E-posta gönderimi başarısız oldu." },
      { status: 502 },
    );
  }

  return Response.json({ message: "Başvurunuz tarafımıza ulaştı." });
}
