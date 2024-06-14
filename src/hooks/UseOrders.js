// src/hooks/UseOrders.js
import { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';

export const useOrders = () => {
    const { orders, setOrders } = useContext(OrderContext);

    const createOrder = async (orderData) => {
        try {
            const response = await fetch('/api/orders', {
                method: 'POST',
                body: orderData
            });
            const newOrder = await response.json();
            setOrders([...orders, newOrder]);
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    return {
        orders,
        createOrder
    };
};
