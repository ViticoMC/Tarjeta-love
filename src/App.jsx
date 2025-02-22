import  { useEffect, useState } from "react";
import { RomanticCard } from "./components/RomanticCard";
import "./index.css"

export function App() {
  const [cards, setCards] = useState(Array(10).fill(false)); // Estado para las cartas
  const [lovedCardIndex, setLovedCardIndex] = useState(null); // Índice de la carta con "Te amo"

  // Selecciona una carta aleatoria para mostrar "Te amo"
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 10); // Número aleatorio entre 0 y 9
    setLovedCardIndex(randomIndex);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-pink-100 gap-5">
      {/* Fila de arriba (5 cartas) */}
      <div className="flex justify-center gap-4 mb-8">
        {cards.slice(0, 5).map((_, index) => (
          <RomanticCard
            key={index}
            position={index}
            isLoved={index === lovedCardIndex}
            animation="left"
          />
        ))}
      </div>

      {/* Fila de abajo (5 cartas) */}
      <div className="flex justify-center gap-4">
        {cards.slice(5, 10).map((_, index) => (
          <RomanticCard
            key={index + 5}
            position={index + 5}
            isLoved={index + 5 === lovedCardIndex}
            animation="right"
          />
        ))}
      </div>
    </div>
  );
}


