// src/components/orders/OrderList.js
import React from 'react';
import { useOrders } from '../../hooks/UseOrders';

const OrderList = () => {
    const { orders } = useOrders();

    return (
        <div>
            <h2>Pedidos Pendientes</h2>
            <ul>
                {orders.map((order) => (
                    <li key={order.id}>
                        <p>Detalles: {order.details}</p>
                        <p>Precio: {order.price}</p>
                        <p>Estado: {order.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderList;
