import React from 'react';
import StationList from './components/StationList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-center text-blue-600">iCharge Mobile - Charging Stations</h1>
      </header>
      <main>
        <StationList />
      </main>
    </div>
  );
}

export default App;
