// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

import Header from './components/Header.jsx';
import { Root } from "./routes/Root.jsx";
import { About } from "./routes/About.jsx";
import { Work } from "./routes/Work.jsx";
import { Other } from "./routes/Other.jsx";
import { Contact } from "./routes/Contact.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Root /> },
  { path: "/about", element: <About /> },
  { path: "/work", element: <Work /> },
  { path: "/other", element: <Other /> },
  { path: "/contact", element: <Contact /> },
]);

const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
