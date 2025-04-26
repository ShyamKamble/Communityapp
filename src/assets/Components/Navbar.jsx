import React, { useEffect, useState } from "react";

import "./Navcss.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { User } from "lucide-react";

export default function Navbar({ setUser }) {
  const [username, setUserName ] = useState("");
  const navigate = useNavigate();
 const { user,loginWithRedirect,isAuthenticated,logout } = useAuth0();
  console.log(user)
  // const handlebuttonclick =async () => {
  //   // navigate("/login-page");
   
  // };
  console.log(username)
  useEffect(()=>{
    if (isAuthenticated && user) {
      setUser(user);
      setUserName(user.name);
    }
  },[isAuthenticated, user])
  

  const returntohome = () => {
    navigate("/");
  };
  return (
    <>
    
      <nav>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-center">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round" // Changed from stroke-linecap
                    strokeLinejoin="round" // Changed from stroke-linejoin
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5" // Changed from stroke-width
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round" // Changed from stroke-linecap
                    strokeLinejoin="round" // Changed from stroke-linejoin
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAIAAAD9b0jDAAABsklEQVR4AezSA2wlYQAE4D0FtW0tT7XtBmfbtlnbNqPaRpzUiGs7dqPXqe3GTeZh9e38IGg1+tBzhB6hO0dOgpIUpg4BlVekVJSpBTHBV7c83XDBJZUodXHN/aAQE28afrHThgurIEG/vcJE4BQF0dhG72XELfzZMyotT+U/Nun7bSMoQ65GlQm1zxmPEFUhjT2g8nKKWhij6lym3e2DLukTBLmA4o/tVTP/hi8G5roLTSk5xZ1RiImvg29aXiZEBFAWIlxBAWoJVflb/ApjR01wDGdg8DYMf3ZARSWlBmKaeBUzda65eAEhIIMZwOQuoLZPHFGTVtXUEuAHZ5c1bJ3UsXNTBB1db3zlZY8j/g/c7xtIoGxhlAFW/1/tx5tfLBibh7AgwoW+M6o1H3RE5aKviaiM4tgDmAGskv1lbVPvYnD4Rl9SWgzfyHYoOEctbjkGstIPDe1BYxJwdWFZ0E7b5Scrb80xF5cDd0tUVIXssrZanR4ri6DTLLbqIqqiqH3e0+46b11wfrum5prsuuiqM1qr7sFOYkmbdUHTned0XWaHpgZoBBoagkXfqKGjhgIAeECx5LUTzQ4AAAAASUVORK5CYII="
                  alt="Your Company"
                />
                <button
                  className="rounded-md px-3 py-2 text-sm font-medium text-black-300  hover:text-white hover:bg-green-700"
                  onClick={returntohome}
                >
                  <h3>Fable</h3>
                </button>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-black-300  hover:text-white hover:bg-green-700"
                  >
                    Join a club
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:text-white hover:bg-green-700"
                  >
                    Bookstore
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
                <div>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-black-300  hover:text-white hover:bg-green-700 "
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300  hover:text-white hover:bg-green-700 "
                  >
                    For Business
                  </a>
                  {
                    isAuthenticated ?(
                      <button
                      className="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:text-white hover:bg-red-700"
                      onClick={() => logout()}
                    >
                      Log out
                    </button>
                    ):( <button
                      className="rounded-md px-3 py-2 text-sm font-medium text-black-300  hover:text-white hover:bg-green-700 "
                      onClick={loginWithRedirect}
                    >
                      Login
                    </button>)
                  }
                 

                  <FontAwesomeIcon
                    className="mr-2.5   "
                    icon={faUser}
                    style={{ color: "green" }}
                  />
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    style={{ color: "green" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <a
              href="#"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Team
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Calendar
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
