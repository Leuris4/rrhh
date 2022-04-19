import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/login';
import './index.css';
import { CookiesProvider } from 'react-cookie';






ReactDOM.createRoot(document.getElementById('root')).render(
   <CookiesProvider>
   <Login  />
   </CookiesProvider>
   );


