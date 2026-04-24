import { motion } from 'framer-motion';

const SplitText = ({ text, className = "" }: { text: string; className?: string }) => {
  return (
    <div className={`${className} flex justify-center`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: i * 0.05,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default SplitText;
