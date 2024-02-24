import { Link } from "react-router-dom";
import Button from "./Button";
import RuleBox from "./RuleBox";

function Rules() {
  return (
    <section className="flex flex-col gap-[6.4rem] bg-opacity-75 bg-gradient-to-b from-[#1a043a] to-[#151278] px-44 py-8">
      <header className="flex items-center ">
        <Link to="/">
          <Button type="small">
            <img src="./icon-back.svg" alt="back icon" />
          </Button>
        </Link>
        <h1 className="w-full bg-gradient-to-b from-[#67b6ff] to-white bg-clip-text stroke-[#243041] stroke-[8] text-center text-[13.6rem] leading-[120%] tracking-[-0.068rem] text-transparent">
          How to Play
        </h1>
      </header>
      <div className="grid grid-cols-3 gap-[3.2rem]">
        <RuleBox
          number="01"
          title="Pick a category"
          text="First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word."
        />
        <RuleBox
          number="02"
          title="Guess letters"
          text="Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses."
        />
        <RuleBox
          number="03"
          title="win or lose"
          text="You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose."
        />
      </div>
    </section>
  );
}

export default Rules;
