
export function RomanticCard({ isLoved, animation }) {


    return (
      <div
        className={`group relative w-32 h-48 perspective transform transition-transform duration-500 ${
          animation === "left" ? "-translate-x-96" : "translate-x-96"
        } animate-slide-in`}
      >
        {/* Frente de la carta */}
        <div className="absolute w-full h-full bg-pink-400 rounded-lg shadow-lg transform transition-transform duration-500 group-hover:rotate-y-180">
          <div className="flex flex-col items-center justify-center h-full p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-pink-700 mb-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18.35l-1.45-1.32C5.4 14.25 2 11.28 2 7.5 2 4.42 4.42 2 7.5 2c1.74 0 3.41.81 4.5 2.09C13.09 2.81 14.76 2 16.5 2 19.58 2 22 4.42 22 7.5c0 3.78-3.4 6.75-6.55 9.53L10 18.35z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-white text-sm font-semibold text-center">
              Para mi amor
            </p>
          </div>
        </div>
  
        {/* Parte posterior de la carta */}
        <div className="absolute w-full h-full bg-pink-500 rounded-lg shadow-lg transform transition-transform duration-500 rotate-y-180 backface-hidden group-hover:rotate-y-0">
          <div className="flex items-center justify-center h-full">
            {isLoved && (
              <p className="text-white text-lg font-bold text-center">
                Te amo mucho ❤️
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

