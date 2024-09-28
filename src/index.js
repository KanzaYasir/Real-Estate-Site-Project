import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Projects from './Components/NavBarItems/Projects';
import About from './Components/NavBarItems/About';
import Agent from './Components/NavBarItems/Agent';
import Services from './Components/NavBarItems/Services';
import Listings from './Components/NavBarItems/Listings';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Testimonials from './Components/NavBarItems/Testimonials';

const root = ReactDOM.createRoot(document.getElementById('root'));
let allroutes = createBrowserRouter(
  [
    {
      path: '/',
      element:<App/>
    },
    {
      path:'about',
      element:<About/>
    },
    {
      path:'projects',
      element:<Projects/>
    },
    {
      path:'agent',
      element:<Agent/>
    },
    {
      path:'services',
      element:<Services/>
    },
    {
      path:'listings',
      element:<Listings/>
    },
    {
      path:'testimonials',
      element:<Testimonials/>
    }
    
  ]
)
root.render(
  <React.StrictMode>
  <RouterProvider router = {allroutes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
