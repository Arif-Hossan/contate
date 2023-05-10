import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ErrorPage from './error-page';
import {
  createBrowserRouter,
  RouterProvider,
  } from "react-router-dom";
import Root ,
  {
    loader as rootLoader,
    action as rootAction,
  }from './routes/root';
import Contact,{
   loader as contactLoader,
  } from './routes/contacts';
import EditContact,{
  action as editAction
  } from './routes/edit';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    loader: rootLoader,
    action:rootAction,
    children :[
      {
        path:'contacts/:contactId',
        element: <Contact></Contact>,
        loader:contactLoader,
      },
      {
        path :'contacts/:contactId/edit',
        element : <EditContact></EditContact>,
        loader : contactLoader,
        action : editAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
