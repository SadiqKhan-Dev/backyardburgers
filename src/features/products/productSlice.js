import { createSlice } from '@reduxjs/toolkit';
import { products as initialProducts, categories } from '../../data/products';

// Load products from localStorage (for admin modifications)
const loadProductsFromStorage = () => {
  try {
    const productsData = localStorage.getItem('products');
    return productsData ? JSON.parse(productsData) : initialProducts;
  } catch (error) {
    console.error('Error loading products from localStorage:', error);
    return initialProducts;
  }
};

// Save products to localStorage
const saveProductsToStorage = (products) => {
  try {
    localStorage.setItem('products', JSON.stringify(products));
  } catch (error) {
    console.error('Error saving products to localStorage:', error);
  }
};

const initialState = {
  products: loadProductsFromStorage(),
  categories: categories,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push({
        ...action.payload,
        id: Date.now(),
        featured: false,
      });
      saveProductsToStorage(state.products);
    },
    
    updateProduct: (state, action) => {
      const index = state.products.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
        saveProductsToStorage(state.products);
      }
    },
    
    deleteProduct: (state, action) => {
      state.products = state.products.filter(p => p.id !== action.payload);
      saveProductsToStorage(state.products);
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
  addProduct,
  updateProduct,
  deleteProduct,
  setLoading,
  setError,
} = productSlice.actions;

export default productSlice.reducer;
