import { useState } from "react";

export default function App() {
  const [stars, setStars] = useState([]);

  // Función para agregar una estrella en la posición clicada
  const addStar = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setStars([...stars, { x, y }]);
  };

  // Función para generar nombre aleatorio de constelación
  const getRandomName = () => {
    const names = [
      "Orionis",
      "LyraNova",
      "AquilaX",
      "Zentar",
      "Nebula Prime",
      "Altairis",
      "Vega Minor",
      "Cetus Nova"
    ];
    return names[Math.floor(Math.random() * names.length)];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black to-indigo-900 text-white">
      <h1 className="text-2xl font-bold mb-2">✨ Constelaciones Interactivas</h1>
      <p className="mb-4 text-sm opacity-80">Toca la pantalla para crear estrellas y unir tu propia constelación.</p>
      
      <div
        className="relative w-80 h-96 bg-black rounded-2xl shadow-lg border border-gray-700"
        onClick={addStar}
      >
        {/* Dibujar estrellas */}
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full shadow-md"
            style={{ left: star.x - 4, top: star.y - 4 }}
          ></div>
        ))}

        {/* Dibujar líneas entre estrellas */}
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {stars.map((star, i) =>
            i > 0 ? (
              <line
                key={i}
                x1={stars[i - 1].x}
                y1={stars[i - 1].y}
                x2={star.x}
                y2={star.y}
                stroke="white"
                strokeWidth="1"
              />
            ) : null
          )}
        </svg>
      </div>

      {/* Mostrar nombre aleatorio de constelación */}
      {stars.length > 2 && (
        <p className="mt-4 text-lg font-semibold text-yellow-300">
          🌌 Has creado la constelación: {getRandomName()}
        </p>
      )}

      <footer className="mt-6 text-xs opacity-60">
        Creado por [juanito] – V.1.0.0
      </footer>
    </div>
  );
}
