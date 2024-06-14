import React from 'react';
import AppRouter from './routes/AppRouter';
import { OrderProvider } from './context/OrderContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <OrderProvider>
        <div className="App">
          <AppRouter />
        </div>
      </OrderProvider>
    </AuthProvider>
  );
}

export default App;
