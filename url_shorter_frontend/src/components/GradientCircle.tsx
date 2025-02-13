interface Props {
  className?: string;
}

export default function GradientCircle({ className = "" }: Props) {
  return (
    <div
      className={
        "w-[240px] h-[240px] bg-gradient-to-t from-[#DA48FF] to-[#6F69DC] opacity-50 rounded-full" +
        ` ${className}`
      }
    />
  );
}
