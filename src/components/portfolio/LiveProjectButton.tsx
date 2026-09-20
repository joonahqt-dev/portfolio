type LiveProjectButtonProps = {
  label?: string;
  onClick?: () => void;
  className?: string;
};

export default function LiveProjectButton({
  label = "Live Project",
  onClick,
  className = "",
}: LiveProjectButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors hover:bg-[#D7E2EA]/10 ${className}`}
    >
      {label}
    </button>
  );
}