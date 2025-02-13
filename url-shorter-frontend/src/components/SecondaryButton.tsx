interface Props {
  text: string;
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function SecondaryButton({
  text,
  icon,
  className = "",
  onClick,
}: Props) {
  return (
    <button
      className={
        "px-4 py-3 rounded-xl text-base bg-[#DDD] hover:bg-[#c9c8c8] dark:text-white dark:bg-[#434343] dark:hover:bg-[#292929]" +
        ` ${className}`
      }
      onClick={onClick}
    >
      <div className="flex gap-4 items-center">
        <span className="font-semibold">{text}</span>
        <span className="text-[#D68E29] dark:text-[#6F69DC]">{icon}</span>
      </div>
    </button>
  );
}
