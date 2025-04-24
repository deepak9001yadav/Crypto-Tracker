import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrencies, updateCurrency, setLoading, setError } from './features/crypto/cryptoSlice';
import { fetchCryptoData, CryptoWebSocket } from './services/cryptoService';
import Header from './components/Header';
import CryptoTable from './components/CryptoTable';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let cryptoSocket;

    const fetchData = async () => {
      try {
        dispatch(setLoading());
        const data = await fetchCryptoData();
        dispatch(setCurrencies(data));
        
        // Set up WebSocket connection for real-time updates
        cryptoSocket = new CryptoWebSocket((update) => {
          dispatch(updateCurrency(update));
        });
        cryptoSocket.connect();
      } catch (err) {
        dispatch(setError(err.message || 'Failed to fetch cryptocurrency data'));
      }
    };

    fetchData();

    // Clean up WebSocket connection
    return () => {
      if (cryptoSocket) {
        cryptoSocket.disconnect();
      }
    };
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <CryptoTable />
    </div>
  );
}

export default App;
