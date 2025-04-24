import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllCurrencies, selectCryptoStatus, selectCryptoError } from '../features/crypto/cryptoSlice';
import CryptoCurrency from './CryptoCurrency';

const CryptoTable = () => {
  const currencies = useSelector(selectAllCurrencies);
  const status = useSelector(selectCryptoStatus);
  const error = useSelector(selectCryptoError);

  if (status === 'loading') {
    return <div className="text-center py-10">Loading cryptocurrencies...</div>;
  }

  if (status === 'failed') {
    return <div className="text-center py-10 text-red-600">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Name</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Price</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">24h %</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 hidden md:table-cell">Market Cap</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 hidden lg:table-cell">Volume (24h)</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 hidden sm:table-cell">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {currencies.map(currency => (
              <CryptoCurrency key={currency.id} currency={currency} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoTable;
