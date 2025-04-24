import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currencies: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setCurrencies: (state, action) => {
      state.currencies = action.payload;
      state.status = 'succeeded';
    },
    updateCurrency: (state, action) => {
      const { id, price, change24h } = action.payload;
      const currency = state.currencies.find(c => c.id === id);
      if (currency) {
        currency.price = price;
        currency.change24h = change24h;
        currency.lastUpdated = new Date().toISOString();
      }
    },
    setLoading: (state) => {
      state.status = 'loading';
    },
    setError: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    }
  },
});

export const { setCurrencies, updateCurrency, setLoading, setError } = cryptoSlice.actions;

export const selectAllCurrencies = (state) => state.crypto.currencies;
export const selectCryptoStatus = (state) => state.crypto.status;
export const selectCryptoError = (state) => state.crypto.error;

export default cryptoSlice.reducer;