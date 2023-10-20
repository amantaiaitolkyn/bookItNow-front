import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Stay from "./components/Stay";
import About from "./components/About";
import HandleError from './components/handleErrors';
import Login from "./components/Login";
import Register from "./components/Register";
import RoomDetail from "./components/RoomDetail";
import {Provider} from 'react-redux';
import {store} from './store';
import './firebase';


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
        path: "rooms",
        element: <Stay/>,
      },
      {
        path: "rooms/:id",
        element: <RoomDetail/>,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "register",
        element: <Register/>,
      }

    ]
  } 

])
root.render(
    <Provider store={store}>
      <RouterProvider router = {router} />
    </Provider>
);

