import { ContactActions } from "@/components/ContactActions";

export function FloatingCta({
  audience = "children",
}: {
  audience?: "children" | "adults";
}) {
  return (
    <aside
      aria-label="Hızlı iletişim"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-black/5 bg-white/94 px-3 pb-[calc(10px+env(safe-area-inset-bottom))] pt-2 shadow-[0_-12px_34px_rgba(36,29,24,0.12)] backdrop-blur-md md:hidden"
    >
      <ContactActions audience={audience} className="mx-auto max-w-[540px]" />
    </aside>
  );
}
