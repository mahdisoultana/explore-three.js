import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes.tsx';
import Context from './context/index.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={routes} />
    </Context>
  </React.StrictMode>,
);
