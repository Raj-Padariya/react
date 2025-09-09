export default function CommonButton({ href, text, className = "", variant = "solidbtn" }) {
  // Variants
  const baseStyles = "font-bold text-base leading-[22px] px-7 py-3.5 inline-block transition-all rounded-full duration-300";

  const variants = {
    solidbtn: "bg-radial text-white hover:transition-all",
    borderbtn: "bg-white border-1 border-[#000] text-[#000] hover:bg-[radial-gradient(88.37%_177.94%_at_98.37%_100%,_#E79F56_0%,_#E75658_100%)] hover:text-white hover:border-transparent",
  };

  return (
    <div className="inline-block">
      <a href={href || "#"} className={`${baseStyles} ${variants[variant]} ${className}`} >
        {text || "Instant Quote"}
      </a>
    </div>
      );
}