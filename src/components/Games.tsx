import React, { useState } from 'react';
import { Star, Gamepad2, Monitor, Smartphone } from 'lucide-react';

interface GamesProps {
  mode: 'developer' | 'gaming';
}

interface Game {
  id: number;
  title: string;
  cover: string;
  platforms: string[];
  rating: number;
  favoriteCharacter: string;
  review: string;
  genre: string;
}

const Games: React.FC<GamesProps> = ({ mode }) => {
  const [hoveredGame, setHoveredGame] = useState<number | null>(null);

  const games: Game[] = [
    {
      id: 1,
      title: "Valorant",
      cover: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
      platforms: ["PC"],
      rating: 5,
      favoriteCharacter: "Sage",
      review: "Tactical FPS perfection. The agent abilities add incredible depth to traditional shooting mechanics.",
      genre: "Tactical FPS"
    },
    {
      id: 2,
      title: "Civilization VI",
      cover: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg",
      platforms: ["PC", "Console"],
      rating: 5,
      favoriteCharacter: "Cleopatra",
      review: "The ultimate strategy experience. Every decision matters across thousands of years of civilization.",
      genre: "Turn-based Strategy"
    },
    {
      id: 3,
      title: "Counter-Strike 2",
      cover: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
      platforms: ["PC"],
      rating: 4,
      favoriteCharacter: "AWPer",
      review: "Classic competitive shooter refined to perfection. Every match is a lesson in precision and teamwork.",
      genre: "Competitive FPS"
    },
    {
      id: 4,
      title: "The Witcher 3",
      cover: "https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg",
      platforms: ["PC", "Console"],
      rating: 5,
      favoriteCharacter: "Geralt",
      review: "Storytelling masterpiece with incredible world-building. Every quest feels meaningful and engaging.",
      genre: "Action RPG"
    },
    {
      id: 5,
      title: "Rocket League",
      cover: "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg",
      platforms: ["PC", "Console", "Mobile"],
      rating: 4,
      favoriteCharacter: "Octane",
      review: "Simple concept, infinite skill ceiling. The perfect blend of soccer and high-speed racing.",
      genre: "Sports/Racing"
    },
    {
      id: 6,
      title: "Apex Legends",
      cover: "https://images.pexels.com/photos/4009599/pexels-photo-4009599.jpeg",
      platforms: ["PC", "Console", "Mobile"],
      rating: 4,
      favoriteCharacter: "Wraith",
      review: "Fast-paced battle royale with unique legend abilities. Great team coordination mechanics.",
      genre: "Battle Royale"
    },
    {
      id: 7,
      title: "Chess.com",
      cover: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg",
      platforms: ["PC", "Mobile"],
      rating: 5,
      favoriteCharacter: "Queen",
      review: "The ultimate strategy game. Every match sharpens tactical thinking and pattern recognition.",
      genre: "Strategy/Board"
    },
    {
      id: 8,
      title: "Minecraft",
      cover: "https://images.pexels.com/photos/1557937/pexels-photo-1557937.jpeg",
      platforms: ["PC", "Console", "Mobile"],
      rating: 4,
      favoriteCharacter: "Steve",
      review: "Infinite creativity meets survival mechanics. Perfect for both relaxation and complex builds.",
      genre: "Sandbox/Survival"
    }
  ];

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'PC': return <Monitor size={16} />;
      case 'Console': return <Gamepad2 size={16} />;
      case 'Mobile': return <Smartphone size={16} />;
      default: return <Monitor size={16} />;
    }
  };

  if (mode !== 'gaming') return null;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Games I Play
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((game, index) => (
              <div
                key={game.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredGame(game.id)}
                onMouseLeave={() => setHoveredGame(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gray-800 rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={game.cover}
                      alt={game.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    
                    {/* Game Info Overlay */}
                    <div className={`absolute inset-0 bg-black bg-opacity-90 p-4 flex flex-col justify-center transition-all duration-300 ${
                      hoveredGame === game.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                      <p className="text-purple-300 text-sm mb-2">{game.genre}</p>
                      
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={`${
                              i < game.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>

                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-purple-300">Platforms:</span>
                          <div className="flex gap-2 mt-1">
                            {game.platforms.map((platform) => (
                              <div key={platform} className="flex items-center gap-1 text-gray-300">
                                {getPlatformIcon(platform)}
                                <span className="text-xs">{platform}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <span className="text-purple-300">Favorite:</span>
                          <span className="text-white ml-1">{game.favoriteCharacter}</span>
                        </div>
                        
                        <p className="text-gray-300 text-xs leading-relaxed mt-2">
                          {game.review}
                        </p>
                      </div>
                    </div>

                    {/* Title at bottom when not hovered */}
                    <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
                      hoveredGame === game.id ? 'opacity-0' : 'opacity-100'
                    }`}>
                      <h3 className="text-lg font-semibold text-white">{game.title}</h3>
                      <p className="text-purple-300 text-sm">{game.genre}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold">
              <Gamepad2 className="mr-2" size={20} />
              <span>Always looking for new gaming adventures!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;