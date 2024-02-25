import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useGame } from "../contexts/gameContext";

function CategoryBox({ category }: { category: string }) {
  const { setCategory, setGameStatus } = useGame();

  function handleClick() {
    setCategory(category);
    setGameStatus("playing");
  }

  return (
    <Link to={`/game/${category}`} onClick={handleClick}>
      <motion.button
        initial={{ y: 0 }}
        whileHover={{ y: -10 }}
        whileTap={{ y: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="w-full rounded-[4rem] bg-[#2463FF] from-[rgba(255,255,255,0.25)] to-[rgba(255,255,255,0.25)] px-[6.4rem] py-[5rem] text-[4.8rem] uppercase leading-[120%] tracking-[0.24rem] text-white shadow-purple-sh hover:bg-gradient-to-t"
      >
        {category}
      </motion.button>
    </Link>
  );
}

export default CategoryBox;
