import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Card from './components/card';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import User from './components/User/User';
import Github, { githubInfoLoader }  from './components/Github/Github';
const router= createBrowserRouter(
  [
{
  path:'',
  element:<App/>,
  children:[{
    path:'',
    element:<Home/>,
  },
  {
    path:'about',
    element:<About/>,
  },
  {
    path:'User/:id',
    element:<User/>,
  },
  {
    path:'Github',
    loader:githubInfoLoader,
    element:<Github/>,
  },
]
}
  ]
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>

 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
