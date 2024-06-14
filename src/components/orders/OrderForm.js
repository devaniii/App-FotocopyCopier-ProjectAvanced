// src/components/orders/OrderForm.js
import React, { useState } from 'react';
import NavbarClient from '../navbar/NavbarClient';
import { useNavigate } from 'react-router-dom'; 
import { navigateToOrderPage, navigateToProductList } from '../../routes/RoutesPages';
import '../../assets/styles/components/OrderForm.css';

function OrderForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    usuario: 'Usuario',
    legajo: 'Legajo',
    comision: 'Comision',
    archivos: null,
    cantidadHojas: 'Total de hoja',
    dobleFaz: false,
    simple: false,
    color: false,
    blancoNegro: false,
    precio: 'Total a pagar'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      archivos: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para calcular el precio y enviar el pedido
    // Aquí podrías realizar una petición a tu API para enviar los datos del pedido
    navigate('/payment-confirmation'); // Redirigir a la página de confirmación de pago
  };

  return (
    <div className='contentOrdersForm'>
      <NavbarClient />
      <h1 className='titleOF'>Welcome to the Order Form page.</h1>
      <div className='contentOF'>
        <div className='contentFormulario'>
          <form className='Form' onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="usuario"
                value={formData.usuario}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="legajo"
                value={formData.legajo}
                onChange={handleChange}
                readOnly
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="comision"
                value={formData.comision}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                className='archiveImprint'
                type="file"
                name="archiveImprint"
                onChange={handleFileChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                name="cantidadHojas"
                value={formData.cantidadHojas}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="dobleFaz"
                  checked={formData.dobleFaz}
                  onChange={handleChange}
                />
                Doble faz
              </label>
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="simple"
                  checked={formData.simple}
                  onChange={handleChange}
                />
                Simple
              </label>
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="color"
                  checked={formData.color}
                  onChange={handleChange}
                />
                Color
              </label>
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="blancoNegro"
                  checked={formData.blancoNegro}
                  onChange={handleChange}
                />
                Blanco y negro
              </label>
            </div>
            <div className="form-group">
              <input
                className='precio'
                type="text"
                name="precio"
                value={formData.precio}
                onChange={handleChange}
                readOnly
              />
            </div>
            <button  id='checkout-btn'>Hacer Pedido</button>
            <div id="wallet_container"></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OrderForm;
