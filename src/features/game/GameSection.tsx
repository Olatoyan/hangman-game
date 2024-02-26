import { useState } from "react";
import DisplayWordContainer from "./DisplayWordContainer";
import GameHeader from "./GameHeader";
import GameKeyboard from "./GameKeyboard";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";

function GameSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="desktop:px-24 mobile:px-10 relative flex min-h-[100dvh] flex-col gap-[6.4rem] bg-opacity-75 bg-gradient-to-b from-[#1a043a] to-[#151278] px-44 py-8">
      <GameHeader setIsModalOpen={setIsModalOpen} />
      <DisplayWordContainer />
      <GameKeyboard setIsModalOpen={setIsModalOpen} />

      <AnimatePresence mode="wait">
        {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      </AnimatePresence>
    </section>
  );
}

export default GameSection;
