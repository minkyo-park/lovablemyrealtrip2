import { ExternalLink } from "lucide-react";

interface AffiliateButtonProps {
  text?: string;
  className?: string;
  variant?: "primary" | "large";
}

const AffiliateButton = ({ text = "할인 적용하고 예약하기", className = "", variant = "primary" }: AffiliateButtonProps) => (
  <a
    href="https://myrealt.rip/XdC1f5"
    target="_blank"
    rel="noopener noreferrer"
    className={`cta-button ${variant === "large" ? "text-base px-8 py-4 animate-pulse-glow" : "text-sm"} ${className}`}
  >
    {text}
    <ExternalLink className="h-4 w-4" />
  </a>
);

export default AffiliateButton;
