import { createSlice } from '@reduxjs/toolkit';

// Load orders from localStorage
const loadOrdersFromStorage = () => {
  try {
    const ordersData = localStorage.getItem('orders');
    return ordersData ? JSON.parse(ordersData) : [];
  } catch (error) {
    console.error('Error loading orders from localStorage:', error);
    return [];
  }
};

// Save orders to localStorage
const saveOrdersToStorage = (orders) => {
  try {
    localStorage.setItem('orders', JSON.stringify(orders));
  } catch (error) {
    console.error('Error saving orders to localStorage:', error);
  }
};

// Generate order ID
const generateOrderId = () => {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substr(2, 5);
  return `ORD-${timestamp}-${random}`.toUpperCase();
};

const initialState = {
  orders: loadOrdersFromStorage(),
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    placeOrder: (state, action) => {
      const newOrder = {
        id: generateOrderId(),
        items: action.payload.items,
        totalAmount: action.payload.totalAmount,
        status: 'pending',
        createdAt: new Date().toISOString(),
        customerName: action.payload.customerName || 'Guest',
        orderType: action.payload.orderType || 'dine-in', // dine-in, takeout, delivery
      };
      
      state.orders.unshift(newOrder);
      saveOrdersToStorage(state.orders);
    },
    
    updateOrderStatus: (state, action) => {
      const { orderId, status } = action.payload;
      const order = state.orders.find(o => o.id === orderId);
      
      if (order) {
        order.status = status;
        saveOrdersToStorage(state.orders);
      }
    },
    
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter(o => o.id !== action.payload);
      saveOrdersToStorage(state.orders);
    },
    
    clearCompletedOrders: (state) => {
      state.orders = state.orders.filter(o => o.status !== 'completed');
      saveOrdersToStorage(state.orders);
    },
    
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  placeOrder,
  updateOrderStatus,
  deleteOrder,
  clearCompletedOrders,
  setLoading,
  setError,
} = orderSlice.actions;

export default orderSlice.reducer;
