const cryptoData = [
    { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', price: 63500, change24h: 2.5, marketCap: 1235000000000, volume24h: 32500000000, lastUpdated: new Date().toISOString() },
    { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', price: 3400, change24h: 1.8, marketCap: 408000000000, volume24h: 18700000000, lastUpdated: new Date().toISOString() },
    { id: 'binancecoin', name: 'Binance Coin', symbol: 'BNB', price: 520, change24h: -0.7, marketCap: 85000000000, volume24h: 2100000000, lastUpdated: new Date().toISOString() },
    { id: 'cardano', name: 'Cardano', symbol: 'ADA', price: 1.2, change24h: 3.2, marketCap: 42000000000, volume24h: 1800000000, lastUpdated: new Date().toISOString() },
    { id: 'solana', name: 'Solana', symbol: 'SOL', price: 110, change24h: 4.1, marketCap: 46500000000, volume24h: 2300000000, lastUpdated: new Date().toISOString() },
    { id: 'polkadot', name: 'Polkadot', symbol: 'DOT', price: 18.5, change24h: -1.2, marketCap: 22000000000, volume24h: 950000000, lastUpdated: new Date().toISOString() },
    { id: 'ripple', name: 'XRP', symbol: 'XRP', price: 0.58, change24h: 0.9, marketCap: 29000000000, volume24h: 1500000000, lastUpdated: new Date().toISOString() },
    { id: 'dogecoin', name: 'Dogecoin', symbol: 'DOGE', price: 0.12, change24h: -2.3, marketCap: 16500000000, volume24h: 980000000, lastUpdated: new Date().toISOString() },
  ];
  
  // Simulate fetching initial data
  export const fetchCryptoData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...cryptoData]);
      }, 1000);
    });
  };
  
  // Simulate WebSocket connection for real-time updates
  export class CryptoWebSocket {
    constructor(onUpdate) {
      this.onUpdate = onUpdate;
      this.interval = null;
    }
  
    connect() {
      console.log('WebSocket connected');
      this.interval = setInterval(() => {
        // Randomly update 1-3 cryptocurrencies
        const updateCount = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < updateCount; i++) {
          const randomIndex = Math.floor(Math.random() * cryptoData.length);
          const currency = cryptoData[randomIndex];
          
          // Generate random price change (-2% to +2%)
          const changePercent = (Math.random() * 4) - 2;
          const newPrice = currency.price * (1 + changePercent / 100);
          
          // Update change24h (-5% to +5% from current)
          const new24hChange = currency.change24h + ((Math.random() * 0.5) - 0.25);
          
          this.onUpdate({
            id: currency.id,
            price: parseFloat(newPrice.toFixed(2)),
            change24h: parseFloat(new24hChange.toFixed(2))
          });
        }
      }, 3000); // Update every 3 seconds
    }
  
    disconnect() {
      if (this.interval) {
        clearInterval(this.interval);
        this.interval = null;
        console.log('WebSocket disconnected');
      }
    }
  }