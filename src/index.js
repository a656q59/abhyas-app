import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from './routing/routes';
import {  RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

