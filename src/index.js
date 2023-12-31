import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import Stay from "./components/Stay";
import About from "./components/About";
import Home from "./components/Home";
import RoomDetails from './components/RoomDetails';
import HandleError from './components/handleErrors';
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile"
import ChangeInfo from "./components/ChangeInfo"
import {Provider} from 'react-redux';
import {store} from './store';
import {BookedRoomsProvider} from "./bookedRoomsContext";
import './firebase';
import { UserProvider} from "./UserContext";





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
        element: <RoomDetails/>,
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
      },
      {
        path: "profile",
        element: <Profile/>,
      },
      {
        path: "change-info",
        element: <ChangeInfo/>,
      },

    ]
  } 

])
root.render(
    <BookedRoomsProvider>
      <UserProvider>
          <Provider store={store}>
            <RouterProvider router = {router} />
          </Provider>
      </UserProvider>
    </BookedRoomsProvider>
);

