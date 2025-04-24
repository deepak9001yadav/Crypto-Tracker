import React from 'react';

const CryptoCurrency = ({ currency }) => {
  const { name, symbol, price, change24h, marketCap, volume24h, lastUpdated } = currency;
  
  const priceFormatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: price >= 1 ? 2 : 4,
  }).format(price);
  
  const marketCapFormatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 2
  }).format(marketCap);
  
  const volumeFormatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    maximumFractionDigits: 2
  }).format(volume24h);
  
  const updateTime = new Date(lastUpdated).toLocaleTimeString();
  
  return (
    <tr className="border-b hover:bg-gray-50 transition-colors">
      <td className="px-4 py-3">
        <div className="flex items-center">
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-gray-500 text-sm">{symbol}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 font-medium">
        {priceFormatted}
      </td>
      <td className={`px-4 py-3 ${change24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
        {change24h >= 0 ? `+${change24h}%` : `${change24h}%`}
      </td>
      <td className="px-4 py-3 hidden md:table-cell">
        {marketCapFormatted}
      </td>
      <td className="px-4 py-3 hidden lg:table-cell">
        {volumeFormatted}
      </td>
      <td className="px-4 py-3 text-xs text-gray-500 hidden sm:table-cell">
        {updateTime}
      </td>
    </tr>
  );
};

export default CryptoCurrency;