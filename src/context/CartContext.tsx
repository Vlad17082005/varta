'use client';

import React, { createContext, useContext, useReducer, useEffect, type ReactNode } from 'react';

export interface CartItem {
  id: string;
  name: string;
  tagline: string;
  price: number;
  image: string;
  quantity: number;
  color: string;
}

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] };

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === action.payload.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return { items: [...state.items, { ...action.payload, quantity: 1 }] };
    }
    case 'REMOVE_ITEM':
      return { items: state.items.filter((i) => i.id !== action.payload) };
    case 'UPDATE_QUANTITY':
      if (action.payload.quantity <= 0) {
        return { items: state.items.filter((i) => i.id !== action.payload.id) };
      }
      return {
        items: state.items.map((i) =>
          i.id === action.payload.id
            ? { ...i, quantity: action.payload.quantity }
            : i
        ),
      };
    case 'CLEAR_CART':
      return { items: [] };
    case 'LOAD_CART':
      return { items: action.payload };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('dailyboost-cart');
      if (saved) {
        dispatch({ type: 'LOAD_CART', payload: JSON.parse(saved) });
      }
    } catch {
      // ignore
    }
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem('dailyboost-cart', JSON.stringify(state.items));
    } catch {
      // ignore
    }
  }, [state.items]);

  const addItem = (item: Omit<CartItem, 'quantity'>) =>
    dispatch({ type: 'ADD_ITEM', payload: item });

  const removeItem = (id: string) =>
    dispatch({ type: 'REMOVE_ITEM', payload: id });

  const updateQuantity = (id: string, quantity: number) =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = state.items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
