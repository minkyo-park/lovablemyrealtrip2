import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CouponCopyButtonProps {
  code: string;
  label?: string;
}

const CouponCopyButton = ({ code, label }: CouponCopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
      <div className="coupon-code-box flex-1 text-center sm:text-left text-base sm:text-lg break-all">
        {code}
      </div>
      <button
        onClick={handleCopy}
        className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all ${
          copied
            ? "bg-success text-success-foreground"
            : "bg-primary text-primary-foreground hover:opacity-90"
        }`}
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        {copied ? "복사됨!" : label || "코드 복사"}
      </button>
    </div>
  );
};

export default CouponCopyButton;
