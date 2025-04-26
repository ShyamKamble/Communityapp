
import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from "react-router-dom";
import './Footer.css';

const posts = [
  {
    id: 1,
    user: {
      name: 'Jessica Smith',
      avatar: 'https://i.pravatar.cc/100?img=1',
      time: '3h'
    },
    content: 'Just finished reading an amazing book. Anyone has recommendations for what to read next?',
    likes: 234,
    comments: 42
  },
  {
    id: 2,
    user: {
      name: 'Michael Chen',
      avatar: 'https://i.pravatar.cc/100?img=3',
      time: '5h'
    },
    content: 'Morning hikes and mountain views. Nature is the best therapy.',
    likes: 542,
    comments: 78
  },
  {
    id: 3,
    user: {
      name: 'Sarah Parker',
      avatar: 'https://i.pravatar.cc/100?img=5',
      time: '8h'
    },
    content: 'New art exhibition opening tonight. So excited to share these pieces with everyone!',
    likes: 387,
    comments: 56
  },
  {
    id: 4,
    user: {
      name: 'David Wilson',
      avatar: 'https://i.pravatar.cc/100?img=7',
      time: '2h'
    },
    content: 'Finally mastered my grandma’s apple pie recipe—feeling like a pro baker!',
    likes: 308,
    comments: 25
  },
  {
    id: 5,
    user: {
      name: 'Emily Johnson',
      avatar: 'https://i.pravatar.cc/100?img=8',
      time: '6h'
    },
    content: 'Just got back from a solo camping trip—what an incredible experience!',
    likes: 475,
    comments: 62
  },
  {
    id: 6,
    user: {
      name: 'Chris Lopez',
      avatar: 'https://i.pravatar.cc/100?img=9',
      time: '9h'
    },
    content: 'Discovered a hidden coffee shop downtown—best latte I’ve ever had.',
    likes: 231,
    comments: 33
  },
  {
    id: 7,
    user: {
      name: 'Sophia Carter',
      avatar: 'https://i.pravatar.cc/100?img=10',
      time: '4h'
    },
    content: 'Starting a new watercolor project tonight. Any tips for beginners?',
    likes: 179,
    comments: 48
  },
  {
    id: 8,
    user: {
      name: 'Jason Lee',
      avatar: 'https://i.pravatar.cc/100?img=11',
      time: '11h'
    },
    content: 'Ran my first half-marathon today—absolutely exhausted but proud!',
    likes: 526,
    comments: 84
  }
];

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[600px] bg-black text-white flex flex-col items-center justify-center p-4">
      {/* Flower icon */}
      <div className="absolute top-5 left-5">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C9 2 7 4 7 7C7 10 9 12 12 12C15 12 17 10 17 7C17 4 15 2 12 2Z" fill="#f29bc1" />
          <path d="M12 22C15 22 17 20 17 17C17 14 15 12 12 12C9 12 7 14 7 17C7 20 9 22 12 22Z" fill="#f29bc1" />
          <path d="M17 12C20 12 22 10 22 7C22 4 20 2 17 2C14 2 12 4 12 7C12 10 14 12 17 12Z" fill="#f29bc1" />
          <path d="M7 12C4 12 2 14 2 17C2 20 4 22 7 22C10 22 12 20 12 17C12 14 10 12 7 12Z" fill="#f29bc1" />
          <path d="M2 7C2 10 4 12 7 12C10 12 12 10 12 7C12 4 10 2 7 2C4 2 2 4 2 7Z" fill="#f29bc1" />
          <path d="M22 17C22 14 20 12 17 12C14 12 12 14 12 17C12 20 14 22 17 22C20 22 22 20 22 17Z" fill="#f29bc1" />
        </svg>
      </div>
      
      <div className="max-w-5xl w-full flex flex-col items-center">
        {/* Logo and headline */}
        <div className="mb-8 flex flex-col items-center">
          <div className="w-16 h-16 bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center justify-center mb-6">
            <span className="text-pink-400 font-bold text-2xl">F</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-center leading-tight mb-2">
            "A more thoughtful—and<br />
            less toxic—social media app"
          </h1>
          <p className="text-zinc-500 mb-8">Fortune</p>
          
          <Button   className="bg-white text-black rounded-full px-8 hover:bg-zinc-200" 
           onClick={async () => {
           navigate("/Anime-page");}
            } >
            Get the app
          </Button>
        </div>

        {/* Post carousel */}
        <div className="scroll-container w-full overflow-hidden">
          <div className="scroll-content flex gap-4 animate-scroll">
            {/* First set of posts */}
            {posts.map(post => (
              <div key={post.id} className="w-[350px] flex-shrink-0 bg-zinc-950 rounded-3xl border border-zinc-900 p-5 flex flex-col">
                <div className="flex items-center mb-3">
                  <img src={post.user.avatar} alt={post.user.name} className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <h3 className="font-semibold">{post.user.name}</h3>
                    <p className="text-xs text-zinc-500">Shared a post · {post.user.time}</p>
                  </div>
                </div>
                
                <p className="text-sm mb-4">{post.content}</p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4" />
                    <span className="text-xs">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-xs">{post.comments}</span>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set of posts for seamless loop */}
            {posts.map(post => (
              <div key={`${post.id}-duplicate`} className="w-[350px] flex-shrink-0 bg-zinc-950 rounded-3xl border border-zinc-900 p-5 flex flex-col">
                <div className="flex items-center mb-3">
                  <img src={post.user.avatar} alt={post.user.name} className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <h3 className="font-semibold">{post.user.name}</h3>
                    <p className="text-xs text-zinc-500">Shared a post · {post.user.time}</p>
                  </div>
                </div>
                
                <p className="text-sm mb-4">{post.content}</p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4" />
                    <span className="text-xs">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-xs">{post.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Index;