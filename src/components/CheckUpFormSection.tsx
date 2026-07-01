"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Decorations";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function CheckUpFormSection({ selectedConcern }: { selectedConcern: string }) {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      parentName: String(formData.get("parentName") || ""),
      phone: String(formData.get("phone") || ""),
      childAge: String(formData.get("childAge") || ""),
      note: String(formData.get("note") || ""),
      concern: selectedConcern,
    };

    try {
      const response = await fetch("/api/checkup-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Request failed");
      }

      setSubmitState("success");
      setMessage(
        "Talebiniz başarıyla alındı. Uzman ekibimiz en kısa sürede sizinle iletişime geçecektir.",
      );
      event.currentTarget.reset();
    } catch {
      setSubmitState("error");
      setMessage("Mesaj gönderilemedi. Lütfen bilgilerinizi kontrol ederek tekrar deneyiniz.");
    }
  }

  return (
    <section
      id="checkup-form"
      className="section-surface relative overflow-hidden py-14 md:py-[116px]"
    >
      <div className="inner">
        <div className="section-cta-surface grid gap-8 rounded-[32px] px-5 py-8 sm:px-7 md:gap-10 md:rounded-[40px] md:p-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal className="min-w-0">
            <div className="badge border-[#160A08]/40 bg-white/20 text-[#160A08]">
              Zihin Check-Up
            </div>
            <h2 className="display mt-6 max-w-[700px] text-[clamp(40px,5.5vw,72px)] leading-[0.94] md:mt-7">
              Çocuğunuzun geleceği için ilk adımı bugün atın.
            </h2>
            <p className="mt-6 max-w-[560px] text-[16px] font-semibold leading-7 text-[#160A08]/78 md:mt-7 md:text-[17px] md:leading-8">
              Formu doldurun, uzman ekibimiz sizinle iletişime geçsin.
              Bilgileriniz KVKK kapsamında sadece randevu planlaması için saklanır.
            </p>

            <motion.div
              layout
              className="mt-7 flex w-full max-w-[560px] items-center gap-3 rounded-full bg-white px-4 py-3 text-[14px] font-extrabold shadow-[0_18px_40px_rgba(22,10,8,0.12)] md:mt-8 md:inline-flex md:w-auto"
            >
              <CheckCircle2 size={18} className="shrink-0 text-[#164C35]" />
              <span className="min-w-0 truncate">{selectedConcern}</span>
            </motion.div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 md:mt-8">
              {["45 dakikalık görüşme", "16 sayfalık rapor", "Uzman açıklaması", "Tanı veya ilaç içermez"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-[18px] bg-white/18 p-4">
                  <CheckCircle2 size={18} className="shrink-0 text-[#164C35]" />
                  <p className="text-[14px] font-extrabold text-[#160A08]">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="min-w-0">
            <form
              onSubmit={handleSubmit}
              method="post"
              action="/api/checkup-request"
              className="rounded-[24px] bg-white p-4 shadow-[0_30px_80px_rgba(22,10,8,0.18)] sm:p-5 md:rounded-[30px] md:p-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-xs font-extrabold tracking-normal text-[rgba(36,29,24,0.68)]">
                  Adınız Soyadınız
                  <input
                    name="parentName"
                    required
                    className="min-h-13 w-full min-w-0 rounded-[18px] border border-[var(--line)] bg-[#FEF9F5] px-4 text-[16px] font-bold normal-case tracking-normal text-[#241D18] placeholder:text-[rgba(36,29,24,0.68)]"
                    placeholder="Adınız"
                  />
                </label>
                <label className="grid gap-2 text-xs font-extrabold tracking-normal text-[rgba(36,29,24,0.68)]">
                  Telefon Numaranız
                  <input
                    name="phone"
                    required
                    inputMode="tel"
                    className="min-h-13 w-full min-w-0 rounded-[18px] border border-[var(--line)] bg-[#FEF9F5] px-4 text-[16px] font-bold normal-case tracking-normal text-[#241D18] placeholder:text-[rgba(36,29,24,0.68)]"
                    placeholder="05XX XXX XX XX"
                  />
                </label>
                <label className="grid gap-2 text-xs font-extrabold tracking-normal text-[rgba(36,29,24,0.68)]">
                  Çocuğunuzun Yaşı
                  <input
                    name="childAge"
                    required
                    inputMode="numeric"
                    className="min-h-13 w-full min-w-0 rounded-[18px] border border-[var(--line)] bg-[#FEF9F5] px-4 text-[16px] font-bold normal-case tracking-normal text-[#241D18] placeholder:text-[rgba(36,29,24,0.68)]"
                    placeholder="Örn. 10"
                  />
                </label>
                <label className="grid gap-2 text-xs font-extrabold tracking-normal text-[rgba(36,29,24,0.68)] sm:col-span-2">
                  Mesajınız / Notunuz
                  <textarea
                    name="note"
                    className="min-h-28 w-full min-w-0 rounded-[18px] border border-[var(--line)] bg-[#FEF9F5] px-4 py-3 text-[16px] font-bold normal-case tracking-normal text-[#241D18] placeholder:text-[rgba(36,29,24,0.68)]"
                    placeholder="Eklemek istediğiniz özel bir durum veya sorunuz varsa buraya yazabilirsiniz."
                  />
                </label>
              </div>

              <input type="hidden" name="concern" value={selectedConcern} />

              <button
                type="submit"
                disabled={submitState === "submitting"}
                className="arrow-shift mt-5 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-[#164C35] px-6 text-[15px] font-extrabold text-white shadow-[0_18px_36px_rgba(22,76,53,0.24)] transition hover:-translate-y-1 hover:bg-[#1E5F44] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitState === "submitting" ? "Mesajınız İletiliyor..." : "Bilgi Almak İstiyorum"}
                <ArrowUpRight size={18} />
              </button>

              {message ? (
                <p
                  className={`mt-4 rounded-[18px] px-4 py-3 text-[14px] font-extrabold leading-6 ${
                    submitState === "success"
                      ? "bg-[#F0F7F2] text-[#164C35]"
                      : "bg-[#FFF0D7] text-[#8C5038]"
                  }`}
                  role="status"
                >
                  {message}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
