import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"
export default function Section2() {
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    navigate("/movies-swipe");
  };
  return (
    
    <div className="relative min-h-[700px] w-full flex items-center justify-center">
      {/* Single Box - Positioned to the right of the center */}
      <div className=' text-black absolute top-3 left-100 '>
        <h1 className="text-4xl  font-bold w-40">

          Community for story lovers
        </h1>
        <p className='w-62 mt-6'>Join clubs or share posts to rabbit hole with fellow book and TV fans.</p>
        

        <button onClick={handleButtonClick} className='bg-black  text-white rounded-3xl w-35 h-12 mt-5'>Explore Clubs</button>
        <div  className='flex flex-row mt-3'>
        <div className='w-[270px] h-[370px] bg-amber-50 rounded-2xl mt-5 '>
          <h3 className=' ml-15 text-xl w-40 justify-center'>Dedicated Book and tv feed</h3>

        <img src="https://images.ctfassets.net/005nulnwwll2/6FNkCm6R9YIh9oTgIroLSg/862a1691f83548912cedf17b13f64d93/cameron-capello-anime-post.webp?fm=webp" alt="" />
        </div>
        <div className='w-[270px] h-[350px] bg-amber-50 rounded-2xl mt-20 ml-2.5'>
          <h3 className=' ml-15 text-xl w-40 justify-center'>Dedicated Book and tv feed</h3>

        <img  className ="mt-3"src="https://images.ctfassets.net/005nulnwwll2/4RsOpbNfAe71QbIUzTpkoE/366548c14d25fa38d9ac375ddccfff8c/group-chat-preview-featured.webp?fm=webp" alt="" />
        </div>
        </div>
        </div>
        
      <div
        className="absolute bg-gradient-to-br from-purple-500/30 to-purple-600/30 backdrop-blur-lg rounded-2xl p-8 w-80 md:w-96 shadow-xl top-100 "
        style={{
          top: '50%',
          left: '75%', // Adjusted to the right of center
          transform: 'translateY(-50%) translateX(-50%)', // Center vertically and slightly offset horizontally
          zIndex: 10
        }}
      >
      
       
        <h3 className="text-white text-2xl font-semibold mb-4">Join Our Community</h3>
        <p className="text-white/80 leading-relaxed">
          Connect with fellow book lovers and movie enthusiasts. Share your thoughts,
          discover new stories, and be part of something special.
        </p>
        
        {/* You can include any additional content here */}
      </div>
      <img className='h-100 absolute left-265.5 bottom-69 ' src="https://images.ctfassets.net/005nulnwwll2/3smdwTwU6DHhTo9tyOAElT/b5ac8699890d874a7fd32efe82af0cff/person-sitting-looking-at-phone.png?fm=webp&w=1600" alt="" />
    </div>
  );
}
