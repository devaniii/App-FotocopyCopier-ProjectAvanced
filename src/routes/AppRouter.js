// src/routes/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeClient from '../pages/HomeClient';
import HomeCopier from '../pages/HomeCopier';
import OrdersPage from '../pages/OrdersPage';
import PaymentsPage from '../pages/PaymentsPage';
import PrintingPage from '../pages/PrintingPage';
import ProductsPage from '../pages/ProductsPage';
import ReceiptsPage from '../pages/ReceiptsPage';
import StatisticsPage from '../pages/StatisticsPage';
import LoginPage from '../pages/LoginPage';
import OrderForm from '../components/orders/OrderForm';
import PaymentConfirmation from '../pages/PaymentConfirmation';
import ProductList from '../components/products/ProductList';
import { AuthProvider } from '../context/AuthContext';
import ProtectedRoute from './ProtectedRoute';

function AppRouter() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomeClient />} />

          {/* Rutas para clientes */}
          <Route
            path="/orders"
            element={
              <ProtectedRoute role="customer">
                <OrdersPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/payments"
            element={
              <ProtectedRoute role="customer">
                <PaymentsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/printing"
            element={
              <ProtectedRoute role="customer">
                <PrintingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoute role="customer">
                <ProductsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/receipts"
            element={
              <ProtectedRoute role="customer">
                <ReceiptsPage />
              </ProtectedRoute>
            }
          />

          {/* Rutas para el vendedor */}
          <Route
            path="/statistics"
            element={
              <ProtectedRoute role="vendor">
                <StatisticsPage />
              </ProtectedRoute>
            }
          />

          {/* Nuevas rutas añadidas */}
          <Route path="/order-form" element={<OrderForm />} />
          <Route path="/products-list" element={<ProductList />} />
          <Route path="/payment-confirmation" element={<PaymentConfirmation />} />    
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default AppRouter;
