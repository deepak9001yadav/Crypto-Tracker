import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllCurrencies } from '../features/crypto/cryptoSlice';

const Header = () => {
  const currencies = useSelector(selectAllCurrencies);
  const totalMarketCap = currencies.reduce((sum, currency) => sum + currency.marketCap, 0);
  const formattedMarketCap = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 2
  }).format(totalMarketCap);

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-2">Crypto Price Tracker</h1>
        <div className="flex flex-wrap">
          <div className="mr-6">
            <span className="text-sm opacity-80">Total Market Cap:</span>
            <p className="font-semibold">{formattedMarketCap}</p>
          </div>
          <div>
            <span className="text-sm opacity-80">Cryptocurrencies:</span>
            <p className="font-semibold">{currencies.length}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;