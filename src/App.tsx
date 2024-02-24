import { Route, Routes } from "react-router-dom";
import Homepage from "./features/homepage/Homepage";
import Rules from "./ui/Rules";

function App() {
  return (
    <main className=" min-h-[100dvh]">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="rules" element={<Rules />} />
      </Routes>
    </main>
  );
}

export default App;
