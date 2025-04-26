import React from "react";
import Section2 from "./Section2";
import "./Main.css";
import "./Scroll.css";
import Footer from "./Footer"
import { useNavigate } from "react-router-dom";


export default function Main({user}) {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    navigate("/book-swipe");
  };

  return (
    <div className="main min-h-screen overflow-x-hidden">
      {/* Hero section with responsive padding and layout */}
      <div className="p-4 md:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto text-center md:text-left flex flex-col md:flex-row w-full relative md:pt-12 lg:pt-16">
          <div className="md:max-w-xl">
            <span className="text-lg md:text-xl font-semibold text-white font-amatic-sc">
              Welcome home {user ? user.name:"guest"}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4">
              Bookworms and binge-watchers
            </h1>
            <span className="text-base md:text-lg text-white mt-4 block max-w-lg">
              Join a community of good people to discuss great stories on Fable.
            </span>
            <button
              onClick={handleButtonClick}
              className="mx-auto md:mx-0 w-full max-w-[160px] h-[52px] mt-6 bg-white text-[#161015] rounded-[60px] border-2 border-white text-sm font-semibold cursor-pointer flex justify-center items-center transition ease-in-out duration-200 hover:border-gray-300 hover:bg-gray-100"
            >
              Get the app
            </button>
          </div>
        </div>
      </div>

      {/* Image scroll containers with responsive sizing */}
      <div className="mt-20 md:mt-32 lg:mt-40 w-full overflow-hidden">
        <div className="photos flex space-x-3 md:space-x-4 animate-scroll">
          {[...Array(9)].map((_, i) => (
            <img
              key={`top-${i}`}
              src={`https://images.unsplash.com/photo-${[
                '1512820790803-83ca734da794',
                '1524578271613-d550eacf6090',
                '1513001900722-370f803f498d',
                '1519681393784-d120267933ba',
                '1516541196182-6bdb0516ed27',
                '1506880018603-83d5b814b5a6',
                '1495446815901-a7297e633e8d',
                '1518373714866-3f1478910cc0',
                '1509021436665-8f07dbf5bf1d'
              ][i]}?w=195&h=250&fit=crop`}
              className="w-[150px] md:w-[195px] h-[200px] md:h-[250px] rounded-3xl object-cover flex-shrink-0"
              alt={`Book collection ${i + 1}`}
            />
          ))}
          {/* Duplicate set for infinite scroll */}
          {[...Array(9)].map((_, i) => (
            <img
              key={`top-duplicate-${i}`}
              src={`https://images.unsplash.com/photo-${[
                '1512820790803-83ca734da794',
                '1524578271613-d550eacf6090',
                '1513001900722-370f803f498d',
                '1519681393784-d120267933ba',
                '1516541196182-6bdb0516ed27',
                '1506880018603-83d5b814b5a6',
                '1495446815901-a7297e633e8d',
                '1518373714866-3f1478910cc0',
                '1509021436665-8f07dbf5bf1d'
              ][i]}?w=195&h=250&fit=crop`}
              className="w-[150px] md:w-[195px] h-[200px] md:h-[250px] rounded-3xl object-cover flex-shrink-0"
              alt={`Book collection ${i + 10}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 md:mt-6 w-full overflow-hidden">
        <div className="photos-reverse flex space-x-3 md:space-x-4 animate-scroll-reverse">
          {[...Array(9)].map((_, i) => (
            <img
              key={`bottom-${i}`}
              src={`https://images.unsplash.com/photo-${[
                '1512820790803-83ca734da794',
                '1524578271613-d550eacf6090',
                '1513001900722-370f803f498d',
                '1519681393784-d120267933ba',
                '1516541196182-6bdb0516ed27',
                '1506880018603-83d5b814b5a6',
                '1495446815901-a7297e633e8d',
                '1518373714866-3f1478910cc0',
                '1509021436665-8f07dbf5bf1d'
              ][i]}?w=195&h=250&fit=crop`}
              className="w-[150px] md:w-[195px] h-[200px] md:h-[250px] rounded-3xl object-cover flex-shrink-0"
              alt={`Book collection ${i + 19}`}
            />
          ))}
          {/* Duplicate set for infinite scroll */}
          {[...Array(9)].map((_, i) => (
            <img
              key={`bottom-duplicate-${i}`}
              src={`https://images.unsplash.com/photo-${[
                '1512820790803-83ca734da794',
                '1524578271613-d550eacf6090',
                '1513001900722-370f803f498d',
                '1519681393784-d120267933ba',
                '1516541196182-6bdb0516ed27',
                '1506880018603-83d5b814b5a6',
                '1495446815901-a7297e633e8d',
                '1518373714866-3f1478910cc0',
                '1509021436665-8f07dbf5bf1d'
              ][i]}?w=195&h=250&fit=crop`}
              className="w-[150px] md:w-[195px] h-[200px] md:h-[250px] rounded-3xl object-cover flex-shrink-0"
              alt={`Book collection ${i + 28}`}
            />
          ))}
        </div>
      </div>

      {/* Updated Section2 container with responsive margins */}
      <div className="mt-40 md:mt-60 lg:mt-80 mx-4 md:mx-6 lg:mx-8 rounded-lg overflow-hidden">
        <div className="bg-[#F2D63F] p-4 md:p-6 lg:p-8 rounded-lg text-black">
          <Section2 />
        </div>
      </div>

      <div className="mt-20 md:mt-40 lg:mt-60">
        <Footer />
      </div>
    </div>
  );
}