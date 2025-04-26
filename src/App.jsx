import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./assets/Components/Navbar";
import "./App.css";
import Main from "./assets/Components/Main";
import "./assets/Components/Main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookSwipe from "./assets/Components/BookSwipe";
import Movies from "./assets/Components/Movies";
import { Button } from "./components/ui/button";
import { CardWithForm } from "./assets/Components/Scard";
import LoginForm from "./assets/Components/Login";
import Amime from"./assets/Components/Anime";


function App() {
  const [user, setUser] = useState(null);
  return (
    
    <>
      {/* <CardWithForm/> */}
        
    
      <Router>
        <Navbar setUser={setUser} />
        <Routes>
          <Route path="/" element={<Main user={user} />} />
          <Route path="/book-swipe" element={<BookSwipe />} />
          <Route path="/movies-swipe" element={<Movies />} />
          <Route path="/Anime-page" element={<Amime/>}/>
          <Route
            path="/login-page"
            element={
              <div className="container mx-auto flex items-center justify-center min-h-screen py-8">
                <LoginForm />
              </div>
            }
          />
          
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
