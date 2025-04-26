import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { usePalette } from 'color-thief-react';

const popularMovies = [
  "Naruto",
  "One Piece",
  "Suzume",
  "Grave of the Fireflies",
  "Howl's Moving Castle",
  "Princess Mononoke",
  "Attack on Titan",
  "I Want to Eat Your Pancreas",
  "Demon Slayer: Kimetsu no Yaiba",
  "Whisper of the Heart",
  "Your Name.",
  "Dragon Ball",
  "Bleach",
  "Death Note",
  "Solo Leveling",
];

const MovieCarousel = () => {
  const [movies, setMovies] = useState([]);
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(1);
  const [direction, setDirection] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currswipe, setcurr] = useState(0);
  const maxswipe = 5;

  useEffect(() => {
    async function fetchMovies() {
      setIsLoading(true);
      try {
        const moviePromises = popularMovies.map(async (title) => {
          const response = await axios.get(
            `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=9808a55d`
          );
          return {
            id: response.data.imdbID || title,
            title: response.data.Title || title,
            image: response.data.Poster !== "N/A" ? response.data.Poster : "/placeholder.svg",
            year: response.data.Year || "Unknown Year",
            rating: response.data.imdbRating || "N/A",
            plot: response.data.Plot || "NA"
          };
        });

        const movieData = await Promise.all(moviePromises);
        movieData.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
        setMovies(movieData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();
  }, []);

  const nextMovie = (clickedCard) => {
    if (currswipe <= maxswipe) {
      setDirection(clickedCard);
      setTimeout(() => {
        if (clickedCard === "left") {
          setLeftIndex((prev) => (prev + 2) % movies.length);
        } else {
          setRightIndex((prev) => (prev + 2) % movies.length);
        }
        setDirection(null);
      }, 500);
      setcurr((prev) => prev + 1);
    } else {
      console.log("max limit reached");
    }
  };

  // Get color palettes for both left and right cards
  const leftPalette = usePalette(movies[leftIndex]?.image, 5, 'hex', { crossOrigin: 'anonymous', quality: 10 });
  const rightPalette = usePalette(movies[rightIndex]?.image, 5, 'hex', { crossOrigin: 'anonymous', quality: 10 });

  // Create a gradient background using extracted colors
  const createGradientStyle = () => {
    if (leftPalette.data && rightPalette.data) {
      return {
        background: `linear-gradient(135deg, ${leftPalette.data[0]}90 0%, ${rightPalette.data[0]}90 100%)`,
        minHeight: '100vh',
        transition: 'background 0.5s ease-in-out'
      };
    }
    return { minHeight: '100vh', background: '#121212' };
  };

  if (isLoading) {
    return <div className="text-center p-8">Loading anime...</div>;
  }

  return (
    <div style={createGradientStyle()} className="relative py-8 px-4">
      <div className="flex justify-center items-center gap-8 py-8 px-4">
        {[leftIndex, rightIndex].map((index, i) => {
          const movieData = movies[index];
          
          
          const palette = i === 0 ? leftPalette : rightPalette;
          const dominantColor = palette.data ? palette.data[0] : null;
          
          return (
            <motion.div
              key={movieData?.id || index}
              className="w-[325px] cursor-pointer relative"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              onClick={() => nextMovie(i === 0 ? "left" : "right")}
            >
              <div className="relative w-[325px] h-[450px] rounded-[18px] overflow-hidden shadow-lg bg-black group">
                <div className="relative w-full h-full overflow-hidden">
                  <motion.img
                    src={movieData?.image}
                    alt={movieData?.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    crossOrigin="anonymous"
                  />
                </div>
                <div 
                  className="absolute bottom-0 left-0 w-full p-6 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-[2] text-white"
                  style={{ 
                    backgroundColor: dominantColor ? `${dominantColor}99` : 'rgba(0,0,0,0.7)'
                  }}
                >
                  <h1 className="text-xl font-bold mb-1 line-clamp-1">{movieData?.title}</h1>
                  <h2 className="text-sm font-normal opacity-60">Year: {movieData?.year}</h2>
                  <h3 className="text-sm font-bold opacity-80">IMDb: {movieData?.rating}</h3>
                  <h2 className="text-sm font-normal opacity-60">Plot: {movieData?.plot}</h2>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCarousel;
