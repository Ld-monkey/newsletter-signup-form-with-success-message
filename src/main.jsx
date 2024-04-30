import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SubscribePage from './pages/Subscribe/SubscribePage';
import './index.css';
import SuccessPage from './pages/Success/SuccessPage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <SubscribePage />,
    },
    {
      path: 'success',
      element: <SuccessPage />,
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
