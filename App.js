import React from "react";
import NeuralGrid from "./components/NeuralGrid";
import Hero from "./components/Hero";
import Ecosystem from "./components/Ecosystem";

function App() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">
      {/* Arka plan katmanı */}
      <NeuralGrid />

      {/* İçerik katmanı */}
      <div className="relative z-10">
        <Hero />
        <Ecosystem />
      </div>
    </main>
  );
}
export default App;
