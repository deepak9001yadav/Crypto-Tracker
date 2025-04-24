A simple React app that tracks real-time cryptocurrency prices using Redux for state management.

📦 Tech Stack
React: To build the app's UI.

Redux Toolkit: To manage the state of the app.

Tailwind CSS: For styling the app and making it responsive.

CoinGecko API (or sample data): To get real-time cryptocurrency data.

🏗️ Project Structure

/src/components → Contains reusable components like the table that shows crypto data.

/src/pages → Main pages of the app (like the Dashboard).

/src/redux → Redux files to manage and update the state of the app.

/src/App.js → The main file where everything is put together.

/src/store.js → The file where Redux is set up.

🧠 Redux State Management
Redux Toolkit is used to store and manage the data (like price, market cap, volume).

It updates the state every few seconds to simulate real-time data changes.

📊 Crypto Table
The table displays 5 cryptocurrencies (like Bitcoin, Ethereum, etc.) with the following details:

Logo, Name, Symbol, Price, 1-hour %, 24-hour %, 7-day %, Market Cap, 24-hour Volume, Circulating Supply, Max Supply.

Color-coded percentages: Green for increases, red for decreases.

The table is responsive and works on mobile devices too.

🔄 Real-Time Updates
The app simulates real-time updates by changing the crypto data (like price and percentage) every few seconds.

The data is updated using Redux actions to reflect the changes on the UI.
