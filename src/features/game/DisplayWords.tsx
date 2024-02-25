import { motion } from "framer-motion";

function DisplayWords({ letter }: { letter: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 300 }}
      key={letter}
      className="flex h-[12.9rem] w-[8.8rem] justify-center rounded-[4rem] bg-[#2463FF] px-[4.4rem] py-[1.2rem] text-[8.8rem] uppercase leading-[120%] text-white shadow-purple-sh"
    >
      {letter}
    </motion.div>
  );
}

export default DisplayWords;
