/* eslint-disable react/jsx-no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  RouterProvider,
  createBrowserRouter,
 
} from "react-router-dom";
import Phones from './components/Phones.jsx';
import Main from './components/Main';
import Phone from './components/phone';


// eslint-disable-next-line no-unused-vars
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    
    children: [
      {
        path:'/phones',
        element:<Phones></Phones>,
        loader: () => fetch('http://localhost:3000/phone')
      },
      {
        path:'/phone/:id',
        element:<Phone></Phone>,
        loader: ({params}) =>fetch(`http://localhost:3000/phone/${params.id}`)

      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
