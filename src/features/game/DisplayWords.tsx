import { motion } from "framer-motion";

function DisplayWords({ letter }: { letter: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 300 }}
      key={letter}
      className="flex h-[12.9rem] w-[8.8rem] justify-center rounded-[4rem] bg-[#2463FF] px-[4.4rem] py-[1.2rem] text-[8.8rem] uppercase leading-[120%] text-white shadow-purple-sh laptop:h-[9.9rem] laptop:w-[5.8rem] laptop:px-[3.4rem] laptop:text-[6.4rem] mobile:h-[6.9rem] mobile:w-[1.8rem] mobile:px-8 mobile:text-[4rem]"
    >
      {letter}
    </motion.div>
  );
}

export default DisplayWords;
