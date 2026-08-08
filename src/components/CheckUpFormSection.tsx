"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ContactActions } from "@/components/ContactActions";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function CheckUpFormSection() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      parentName: String(formData.get("parentName") || ""),
      phone: String(formData.get("phone") || ""),
      childAge: String(formData.get("childAge") || ""),
      note: String(formData.get("note") || ""),
    };

    try {
      const response = await fetch("/api/checkup-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) throw new Error(data.message || "Request failed");

      setSubmitState("success");
      setMessage("Talebiniz alındı. Ekibimiz sizinle iletişime geçecek.");
      form.reset();
    } catch {
      setSubmitState("error");
      setMessage("Mesaj gönderilemedi. Bilgilerinizi kontrol edip yeniden deneyin.");
    }
  }

  return (
    <section id="contact" className="section-pad section-surface relative scroll-mt-28 overflow-hidden">
      <div id="checkup-form" className="inner scroll-mt-28">
        <div className="section-cta-surface grid gap-9 rounded-[34px] px-5 py-8 sm:px-7 md:p-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <div className="badge border-[#160A08]/35 bg-white/20 text-[#160A08]">
              İletişime geçin
            </div>
            <h2 className="section-title mt-7 max-w-[660px] !text-[#160A08]">
              Önce yaşadığınız durumu konuşalım.
            </h2>
            <p className="mt-6 max-w-[560px] text-[16px] font-semibold leading-8 text-[#160A08]/76">
              WhatsApp&apos;tan yazabilir ya da numaranızı bırakabilirsiniz. Ekibimiz sizi dinler, Zihin Check-Up hakkında bilgi verir ve sorularınızı yanıtlar.
            </p>

            <ContactActions audience="children" className="mt-7 max-w-[560px]" />

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {["1 saatlik değerlendirme", "Bilişsel profil", "Kişisel egzersiz planı"].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-[18px] bg-white/24 p-3">
                  <CheckCircle2 size={17} className="shrink-0 text-[#164C35]" aria-hidden="true" />
                  <p className="text-[12px] font-extrabold leading-5 text-[#160A08]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <form
            id="callback-form"
            onSubmit={handleSubmit}
            method="post"
            action="/api/checkup-request"
            className="scroll-mt-28 rounded-[28px] bg-white p-5 shadow-[0_28px_80px_rgba(22,10,8,0.18)] md:p-7"
          >
            <h3 className="compact-title text-[#241D18]">Size Ulaşalım</h3>
            <p className="mt-2 text-[14px] font-semibold leading-6 text-[var(--text-support)]">
              İletişim bilgilerinizi bırakın; ekibimiz sorularınızı yanıtlasın.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-xs font-extrabold text-[rgba(36,29,24,0.68)]">
                Adınız Soyadınız
                <input
                  name="parentName"
                  autoComplete="name"
                  required
                  className="min-h-13 w-full rounded-[18px] border border-[var(--line)] bg-[#FEF9F5] px-4 text-[16px] font-bold text-[#241D18] outline-none transition duration-200 focus:border-[#164C35] focus:ring-3 focus:ring-[#164C35]/10"
                  placeholder="Adınız soyadınız"
                />
              </label>
              <label className="grid gap-2 text-xs font-extrabold text-[rgba(36,29,24,0.68)]">
                Telefon Numaranız
                <input
                  name="phone"
                  autoComplete="tel"
                  required
                  inputMode="tel"
                  className="min-h-13 w-full rounded-[18px] border border-[var(--line)] bg-[#FEF9F5] px-4 text-[16px] font-bold text-[#241D18] outline-none transition duration-200 focus:border-[#164C35] focus:ring-3 focus:ring-[#164C35]/10"
                  placeholder="05XX XXX XX XX"
                />
              </label>
              <label className="grid gap-2 text-xs font-extrabold text-[rgba(36,29,24,0.68)]">
                Çocuğunuzun Yaşı
                <input
                  name="childAge"
                  required
                  inputMode="numeric"
                  className="min-h-13 w-full rounded-[18px] border border-[var(--line)] bg-[#FEF9F5] px-4 text-[16px] font-bold text-[#241D18] outline-none transition duration-200 focus:border-[#164C35] focus:ring-3 focus:ring-[#164C35]/10"
                  placeholder="Örn. 10"
                />
              </label>
              <label className="grid gap-2 text-xs font-extrabold text-[rgba(36,29,24,0.68)] sm:col-span-2">
                Kısa Notunuz <span className="font-semibold text-[var(--text-muted)]">(isteğe bağlı)</span>
                <textarea
                  name="note"
                  className="min-h-28 w-full rounded-[18px] border border-[var(--line)] bg-[#FEF9F5] px-4 py-3 text-[16px] font-bold text-[#241D18] outline-none transition duration-200 focus:border-[#164C35] focus:ring-3 focus:ring-[#164C35]/10"
                  placeholder="Eklemek istediğiniz bir ayrıntı varsa yazabilirsiniz."
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={submitState === "submitting"}
              className="mt-5 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-[#164C35] px-6 text-[15px] font-extrabold text-white shadow-[0_16px_34px_rgba(22,76,53,0.24)] transition duration-150 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#164C35] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-65"
            >
              {submitState === "submitting" ? "İletiliyor..." : "Size Ulaşalım"}
              <ArrowUpRight size={18} aria-hidden="true" />
            </button>

            <p data-compliance-status="pending" className="mt-4 text-[11px] font-semibold leading-5 text-[var(--text-support)]">
              Aydınlatma ve veri işleme metni yayın öncesinde bu alana eklenecek.
            </p>

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
        </div>
      </div>
    </section>
  );
}
