import logoUrl from "../../../attached_assets/trasnparentbg.png";

export default function IMELogo({ className = "h-8 w-auto object-contain" }: { className?: string }) {
  return (
    // Replace inline SVG with the provided PNG asset via Vite static import
    <img src={logoUrl} alt="IME logo" className={className} />
  );
}