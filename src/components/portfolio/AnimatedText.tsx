import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

type AnimatedTextProps = {
  text: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function AnimatedText({ text, className = "", style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");

   return (
    <p
      ref={ref}
      className={className}
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", ...style }}
    >
      {chars.map((char, i) => (
        <Char
          key={i}
          progress={scrollYProgress}
          range={[i / chars.length, (i + 1) / chars.length]}
        >
          {char === " " ? "\u00A0" : char}
        </Char>
      ))}
    </p>
  );
}

function Char({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span style={{ position: "relative" }}>
      <span style={{ opacity: 0.2 }}>{children}</span>
      <motion.span style={{ position: "absolute", left: 0, top: 0, opacity }}>{children}</motion.span>
    </span>
  );
}