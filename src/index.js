import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import Stay from "./components/Stay";
import About from "./components/About";
import Home from "./components/Home";
import Header from './components/Header';
import HandleError from './components/handleErrors';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <HandleError/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "home",
        element: <Home/>,
      }, 
      {
        path: "stay",
        element: <Stay/>,
      },
      {
        path: "about",
        element: <About/>,
    }
    ]
  } 

])
root.render(
  <RouterProvider router = {router} />
);

