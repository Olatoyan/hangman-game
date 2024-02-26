import { motion } from "framer-motion";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <section className="mobile:px-8 flex min-h-[100dvh] flex-col items-center justify-center">
      <img src="./logo.svg" alt="hangman logo" className="z-[3] -mb-24" />
      <div className="to-[rgba(0, 20, 121, 0.83)] mobile:px-28 mobile:w-full flex flex-col items-center justify-center gap-24 rounded-[7.2rem] bg-gradient-to-b from-[#344aba] px-52 py-44 shadow-menu-sh">
        <Link to="/game">
          <Button type="big">
            <img src="./icon-play.svg" alt="play icon" />
          </Button>
        </Link>

        <Link to="/rules">
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="mobile:px-8 rounded-[4rem] bg-[#2463FF] from-[rgba(255,255,255,0.25)] to-[rgba(255,255,255,0.25)] px-[6.4rem] py-[1.2rem] text-[3.2rem] uppercase leading-[120%] tracking-[0.16rem] text-white shadow-purple-sh hover:bg-gradient-to-r"
          >
            How to play
          </motion.button>
        </Link>
      </div>
    </section>
  );
}

export default Homepage;
