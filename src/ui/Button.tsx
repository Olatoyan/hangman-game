import { motion } from "framer-motion";
import { ReactNode } from "react";

function Button({ children, type }: { children: ReactNode; type: string }) {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={`flex items-center justify-center rounded-full bg-gradient-to-b from-[#FE71FE] to-[#7199FF] shadow-pink-sh hover:bg-gradient-to-b hover:from-[rgb(254,113,254,0.85)] hover:to-[rgb(113,153,255,0.70)] ${type === "small" ? "h-[6.5rem] w-[6.5rem]" : "p-16"}`}
    >
      {children}
    </motion.button>
  );
}

export default Button;
