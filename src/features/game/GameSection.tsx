import DisplayWordContainer from "./DisplayWordContainer";
import GameHeader from "./GameHeader";
import GameKeyboard from "./GameKeyboard";

function GameSection() {
  return (
    <section className="flex flex-col gap-[6.4rem] bg-opacity-75 bg-gradient-to-b from-[#1a043a] to-[#151278] px-44 py-8">
      <GameHeader />
      <DisplayWordContainer />
      <GameKeyboard />
    </section>
  );
}

export default GameSection;
