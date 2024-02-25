import { Route, Routes } from "react-router-dom";
import Homepage from "./features/homepage/Homepage";
import Rules from "./ui/Rules";
import CategorySection from "./features/category/CategorySection";
import GameSection from "./features/game/GameSection";
import { GameProvider } from "./features/contexts/gameContext";

function App() {
  return (
    <GameProvider>
      <main className=" min-h-[100dvh]">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="rules" element={<Rules />} />
          <Route path="game" element={<CategorySection />} />
          <Route path="game/:category" element={<GameSection />} />
        </Routes>
      </main>
    </GameProvider>
  );
}

export default App;
