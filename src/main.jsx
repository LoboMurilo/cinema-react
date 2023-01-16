import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom';

//páginas
import Home from './routes/Home';
import NewPost from './routes/NewPost';
import Update from './routes/Update';

import './index.css'


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path:"/",
        element: <Home />,
      },
      {
        path: "/new",
        element: <NewPost />,
      },
      {
        path: "/update/:id",
        element: <Update />,
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
