import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import Context from './context/index.tsx';
import './index.css';
import routes from './routes/Routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={routes} />
    </Context>
  </React.StrictMode>,
);
