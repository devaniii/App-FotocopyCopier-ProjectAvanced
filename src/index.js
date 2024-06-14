// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './App';
import { AuthProvider } from './context/AuthContext'; // Importar el proveedor de contexto de autenticación
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider> {/* Envolver la aplicación con el proveedor de contexto de autenticación */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
