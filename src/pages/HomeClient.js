// src/pages/HomeClient.js
import React from 'react';
import NavbarClient from '../components/navbar/NavbarClient'; 
import { useNavigate } from 'react-router-dom'; 
import { navigateToOrderPage, navigateToProductList } from '../routes/RoutesPages';
import '../assets/styles/components/homeClient.css';

function HomeClient() {
  const navigate = useNavigate();

  const handleNavigateToOrderPage = () => {
    const orderPagePath = navigateToOrderPage();
    navigate(orderPagePath);
  };

  const handleNavigateToProductList = () => {
    const productListPath = navigateToProductList();
    navigate(productListPath);
  };

  return (
    <div className="contentHomeClient">
      <NavbarClient />

      <h1 className="titleHomeClient">Welcome to the Home Page Client</h1>

      <div className="contentHome">
        <section className="CP1 catalogo-precios">
          <div className="container">
            <h2 className="titleCP1">Catálogo de Precios</h2>
            <div className="listado-precios">
              <article className="article">$300</article>
              <article className="article">$300</article>
              <article className="article">$300</article>
              <article className="article">$300</article>
            </div>
          </div>
        </section>

        <section className="PPI2 cards panel-pedido-impresion" onClick={handleNavigateToOrderPage}>
          <h2>Panel de Pedido de Impresión</h2>
          <p>Aquí irá el contenido del panel de pedido de impresión.</p>
        </section>

        <section className="PPP3 cards panel-pedido-productos" onClick={handleNavigateToProductList}>
          <h2>Panel de Pedido de Productos</h2>
          <p>Aquí irá el contenido del panel de pedido de productos.</p>
        </section>

        <section className="IA4">
          <h2>Información Adicional</h2>
          <p>Aquí irá la información adicional.</p>
        </section>
      </div>
    </div>
  );
}

export default HomeClient;
