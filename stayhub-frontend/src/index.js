import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './routes/home/Homepage';
import Login from './routes/login/Login';
import Error from './routes/error/Error';
import Register from './routes/register/Register';




const router = createBrowserRouter([
  {
      path: "/",
      element: <Homepage />,
      errorElement: <Error/>,
  },
  { path: "home"    , element: <Homepage /> },
  
  { path: "login"   , element: <Login /> },

  { path: "register"   , element: <Register /> },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



