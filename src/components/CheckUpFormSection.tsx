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
        "Talebiniz alındı. BrainFit Karşıyaka ekibi randevu için sizinle iletişime geçecek.",
      );
      event.currentTarget.reset();
    } catch {
      setSubmitState("error");
      setMessage("Şu anda gönderemedik. Lütfen telefon numaranızı kontrol edip tekrar deneyin.");
    }
  }

  return (
    <section
      id="checkup-form"
      className="relative overflow-hidden bg-[#F05A38] py-[74px] text-[#160A08] md:py-[116px]"
    >
      <div
        className="pointer-events-none absolute right-[-7%] top-[-14%] h-64 w-64 rounded-full border-[34px] border-white/18"
        aria-hidden="true"
      />
      <div className="inner grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <Reveal>
          <div className="badge border-[#160A08]/40 bg-white/20 text-[#160A08]">
            Check-Up
          </div>
          <h2 className="mt-7 max-w-[700px] font-[var(--display)] text-[clamp(44px,7vw,86px)] font-bold leading-[0.94] tracking-normal">
            Çocuğunuz için ilk adımı bugün netleştirin.
          </h2>
          <p className="mt-7 max-w-[560px] text-[17px] font-semibold leading-8 text-[#160A08]/78">
            Formu doldurun, BrainFit Karşıyaka ekibi size ulaşsın.
            Paylaştığınız bilgiler yalnızca randevu planlaması için kullanılır.
          </p>

          <motion.div
            layout
            className="mt-8 inline-flex max-w-full items-center gap-3 rounded-full bg-white px-4 py-3 text-[14px] font-extrabold shadow-[0_16px_40px_rgba(22,10,8,0.12)]"
          >
            <CheckCircle2 size={18} className="shrink-0 text-[#50B748]" />
            <span className="truncate">{selectedConcern}</span>
          </motion.div>
        </Reveal>

        <Reveal delay={0.12}>
          <form
            onSubmit={handleSubmit}
            method="post"
            action="/api/checkup-request"
            className="rounded-[30px] bg-white p-5 shadow-[0_30px_80px_rgba(22,10,8,0.18)] md:p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-[13px] font-extrabold uppercase tracking-[0.08em] text-[rgba(36,29,24,0.58)]">
                Adınız Soyadınız
                <input
                  name="parentName"
                  required
                  className="min-h-13 rounded-[18px] border border-[var(--line)] bg-[#FEF9F5] px-4 text-[16px] font-bold normal-case tracking-normal text-[#241D18]"
                  placeholder="Adınız"
                />
              </label>
              <label className="grid gap-2 text-[13px] font-extrabold uppercase tracking-[0.08em] text-[rgba(36,29,24,0.58)]">
                Telefon
                <input
                  name="phone"
                  required
                  inputMode="tel"
                  className="min-h-13 rounded-[18px] border border-[var(--line)] bg-[#FEF9F5] px-4 text-[16px] font-bold normal-case tracking-normal text-[#241D18]"
                  placeholder="05xx xxx xx xx"
                />
              </label>
              <label className="grid gap-2 text-[13px] font-extrabold uppercase tracking-[0.08em] text-[rgba(36,29,24,0.58)]">
                Çocuğunuzun Yaşı
                <input
                  name="childAge"
                  required
                  inputMode="numeric"
                  className="min-h-13 rounded-[18px] border border-[var(--line)] bg-[#FEF9F5] px-4 text-[16px] font-bold normal-case tracking-normal text-[#241D18]"
                  placeholder="Örn. 9"
                />
              </label>
              <label className="grid gap-2 text-[13px] font-extrabold uppercase tracking-[0.08em] text-[rgba(36,29,24,0.58)] sm:col-span-2">
                Notunuz
                <textarea
                  name="note"
                  className="min-h-28 rounded-[18px] border border-[var(--line)] bg-[#FEF9F5] px-4 py-3 text-[16px] font-bold normal-case tracking-normal text-[#241D18]"
                  placeholder="Paylaşmak istediğiniz kısa bir not varsa yazabilirsiniz."
                />
              </label>
            </div>

            <input type="hidden" name="concern" value={selectedConcern} />

            <button
              type="submit"
              disabled={submitState === "submitting"}
              className="arrow-shift mt-5 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-[#F05A38] px-6 text-[15px] font-extrabold text-white transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitState === "submitting" ? "Gönderiliyor..." : "Beni Arayın"}
              <ArrowUpRight size={18} />
            </button>

            {message ? (
              <p
                className={`mt-4 rounded-[18px] px-4 py-3 text-[14px] font-extrabold leading-6 ${
                  submitState === "success"
                    ? "bg-[#F0F7F2] text-[#1B4332]"
                    : "bg-[#FFF0D7] text-[#7A3B1C]"
                }`}
                role="status"
              >
                {message}
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
