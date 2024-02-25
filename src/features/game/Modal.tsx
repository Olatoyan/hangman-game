import { motion } from "framer-motion";
import { useGame } from "../contexts/gameContext";
import { Dispatch, SetStateAction } from "react";

function Modal({
  setIsModalOpen,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { gameStatus, handlePlayAgain, handleNewCategory, handleQuitGame } =
    useGame();

  function closeModal() {
    if (gameStatus === "playing") setIsModalOpen(false);
  }

  function onPlayAgain() {
    handlePlayAgain();
    setIsModalOpen(false);
  }

  function onNewCategory() {
    handleNewCategory();
    setIsModalOpen(false);
  }

  function onQuitGame() {
    handleQuitGame();
    setIsModalOpen(false);
  }

  return (
    <motion.div
      className="absolute left-0 top-0 flex h-full w-full items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="z-[10]"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1] }}
        exit={{ scale: 0 }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      >
        <h3 className="relative z-[5] -mb-20 w-full bg-gradient-to-b from-[#67b6ff] to-white bg-clip-text stroke-[#243041] stroke-[8] text-center text-[13.6rem] leading-[120%] tracking-[-0.068rem] text-transparent">
          {gameStatus === "playing"
            ? "Paused"
            : gameStatus === "win"
              ? "You Win"
              : "You Lose"}
        </h3>
        <div className="to-[rgba(0, 20, 121, 0.83)] flex max-w-[60rem] flex-col items-center justify-center gap-24 rounded-[7.2rem] bg-gradient-to-b from-[#344aba] px-52 py-44 shadow-menu-sh">
          {(gameStatus === "win" || gameStatus === "lose") && (
            <motion.button
              initial={{ scale: 1, y: 0 }}
              whileHover={{ scale: 1.1, y: 10 }}
              whileTap={{ scale: 1.1, y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="rounded-[4rem] bg-[#2463ff] from-[rgba(255,255,255,0.25)] to-[rgba(255,255,255,0.25)] px-[6.4rem] py-[1.2rem] text-[3.2rem] uppercase leading-[120%] tracking-[0.16rem] text-white shadow-purple-sh hover:bg-gradient-to-r"
              onClick={onPlayAgain}
            >
              Play again
            </motion.button>
          )}
          {gameStatus === "playing" && (
            <motion.button
              initial={{ scale: 1, y: 0 }}
              whileHover={{ scale: 1.1, y: 10 }}
              whileTap={{ scale: 1.1, y: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="rounded-[4rem] bg-[#2463ff] from-[rgba(255,255,255,0.25)] to-[rgba(255,255,255,0.25)] px-[6.4rem] py-[1.2rem] text-[3.2rem] uppercase leading-[120%] tracking-[0.16rem] text-white shadow-purple-sh hover:bg-gradient-to-r"
              onClick={closeModal}
            >
              Continue
            </motion.button>
          )}
          <motion.button
            initial={{ scale: 1, y: 0 }}
            whileHover={{ scale: 1.1, y: 10 }}
            whileTap={{ scale: 1.1, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="rounded-[4rem] bg-[#2463ff] from-[rgba(255,255,255,0.25)] to-[rgba(255,255,255,0.25)] px-[6.4rem] py-[1.2rem] text-[3.2rem] uppercase leading-[120%] tracking-[0.16rem] text-white shadow-purple-sh hover:bg-gradient-to-r"
            onClick={onNewCategory}
          >
            New Category
          </motion.button>

          <motion.button
            initial={{ scale: 1, y: 0 }}
            whileHover={{ scale: 1.1, y: 10 }}
            whileTap={{ scale: 1.1, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="rounded-[4rem] bg-gradient-to-b from-[#fe71fe] to-[#7199ff] px-[6.4rem] py-[1.2rem] text-[3.2rem] uppercase leading-[120%] tracking-[0.16rem] text-white shadow-pink-sh"
            onClick={onQuitGame}
          >
            Quit game
          </motion.button>
        </div>
      </motion.div>

      <div
        className="absolute top-0 h-full w-full bg-gradient-to-b from-[#1a043a] via-[#151278] to-[#2b1677] opacity-75"
        onClick={closeModal}
      ></div>
    </motion.div>
  );
}

export default Modal;
