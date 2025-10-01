import { useState } from "react";

export default function App() {
  const [stars, setStars] = useState([]);

  const addStar = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setStars([...stars, { x, y }]);
  };

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
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black via-indigo-950 to-indigo-900 text-white">
      <h1 className="text-3xl font-extrabold mb-2 text-blue-400 drop-shadow-lg tracking-wide">
        ✨ StarLinker
      </h1>
      <p className="mb-4 text-sm opacity-80 italic">
        Toca la pantalla para crear estrellas y formar tu propia constelación.
      </p>

      <div
        className="relative w-80 h-96 bg-black/80 rounded-2xl shadow-[0_0_20px_rgba(0,0,255,0.4)] border border-indigo-600 overflow-hidden"
        onClick={addStar}
      >
        {/* Estrellas */}
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full star-glow"
            style={{ left: star.x - 4, top: star.y - 4 }}
          ></div>
        ))}

        {/* Líneas entre estrellas */}
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {stars.map((star, i) =>
            i > 0 ? (
              <line
                key={i}
                x1={stars[i - 1].x}
                y1={stars[i - 1].y}
                x2={star.x}
                y2={star.y}
                stroke="url(#neon)"
                strokeWidth="1.5"
              />
            ) : null
          )}

          {/* Definir gradiente neón */}
          <defs>
            <linearGradient id="neon" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3db2ff" />
              <stop offset="100%" stopColor="#ff4c60" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Nombre de la constelación */}
      {stars.length > 2 && (
        <p className="mt-4 text-lg font-semibold text-yellow-300 animate-pulse">
          🌌 Has creado la constelación: {getRandomName()}
        </p>
      )}

      <footer className="mt-6 text-xs opacity-70 tracking-wider">
        Creado por <span className="text-blue-400">Juan Sebastián Herrera</span> – V.1.0.0
      </footer>
    </div>
  );
}
