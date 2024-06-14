// src/pages/PaymentConfirmation.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/components/PaymentConfirmation.css'; // Ruta actualizada

const PaymentConfirmation = () => {
  const navigate = useNavigate();
  const mp = new window.MercadoPago('YOUR_PUBLIC_KEY', {
    locale: "es-AR"
  });

  useEffect(() => {
    const checkoutButton = document.getElementById("checkout-btn");
    const handleClick = async () => {
      try {
        const orderData = {
          title: document.querySelector('.archiveImprint').innerText,
          quantity: 1,
          price: 100,
        };

        const response = await fetch("http://localhost:3000/create_preference", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        });

        const preference = await response.json();
        createCheckoutButton(preference.id);
      } catch (error) {
        console.error("Error creating preference:", error);
      }
    };

    checkoutButton.addEventListener("click", handleClick);

    return () => {
      checkoutButton.removeEventListener("click", handleClick);
    };
  }, []);

  const createCheckoutButton = (preferenceId) => {
    const bricksBuilder = mp.bricks();

    const renderComponent = async () => {
      if (window.CheckoutButton) window.CheckoutButton.unmount();

      await bricksBuilder.create("wallet", "wallet_container", {
        initialization: {
          preferenceId: preferenceId,
        },
        customization: {
          texts: {
            valueProp: 'smart_option',
          },
        },
      });
    };

    renderComponent();
  };

  return (
    <div>
      <h1>Payment Confirmation</h1>
      <button id="checkout-btn">Checkout</button>
      <div id="wallet_container"></div>
    </div>
  );
};

export default PaymentConfirmation;
