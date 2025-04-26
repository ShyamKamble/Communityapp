import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById('root')).render(
   
  <StrictMode>
     <Auth0Provider
      domain="dev-pjse1qortrswhsnm.us.auth0.com"
      clientId="6TfPdFQzHJowmadWLmWcRpOVoHiBowKi"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
    <App />
    </Auth0Provider>
  </StrictMode>,
  
)
