import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookCarousel = () => {
  const [books, setBooks] = useState([]);
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(1);
  const [direction, setDirection] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchBooks() {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=books&maxResults=40&orderBy=newest"
        );
        const bookData = response.data.items.map((book) => ({
          id: book.id,
          title: book.volumeInfo.title || "No title available",
          image: book.volumeInfo.imageLinks?.thumbnail || "/placeholder.svg",
          author: book.volumeInfo.authors?.join(", ") || "Unknown Author",
          description: book.volumeInfo.description || "No description available",
        }));
        setBooks(bookData);
      } catch (error) {
        console.error("Error fetching books:", error);
        setBooks([
          {
            id: "1",
            title: "The Great Gatsby",
            image: "/placeholder.svg",
            author: "F. Scott Fitzgerald",
            description: "A story of wealth, love, and tragedy in the Roaring Twenties.",
          },
          {
            id: "2",
            title: "To Kill a Mockingbird",
            image: "/placeholder.svg",
            author: "Harper Lee",
            description: "A novel about racial inequality and moral growth in the American South.",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    }
    fetchBooks();
  }, []);

  const nextBook = (clickedCard) => {
    setDirection(clickedCard);
    setTimeout(() => {
      if (clickedCard === "left") {
        setLeftIndex((prev) => (prev + 2) % books.length);
      } else {
        setRightIndex((prev) => (prev + 2) % books.length);
      }
      setDirection(null);
    }, 500);
  };

  if (isLoading) {
    return <div className="text-center p-8">Loading books...</div>;
  }

  return (
    <div className="relative">
      <div className="flex justify-center items-center gap-8 py-8 px-4">
        {[leftIndex, rightIndex].map((index, i) => (
          <motion.div
            key={books[index]?.id || index}
            className="w-[325px] cursor-pointer relative"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            onClick={() => nextBook(i === 0 ? "left" : "right")}
          >
            <div className="relative w-[325px] h-[450px] rounded-[18px] overflow-hidden shadow-lg bg-black group">
              <div className="relative w-full h-full overflow-hidden">
                <motion.img
                  src={books[index]?.image}
                  alt={books[index]?.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-black/70 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-[2] text-white">
                <h1 className="text-xl font-bold mb-1 line-clamp-1">{books[index]?.title}</h1>
                <h2 className="text-sm font-normal mb-2 opacity-60">by {books[index]?.author}</h2>
                <p className="text-sm opacity-80 line-clamp-3 mb-4">{books[index]?.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    
    </div>
  );
};

export default BookCarousel;
