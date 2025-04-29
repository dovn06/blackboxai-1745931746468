import React, { useState } from 'react';

const initialStations = [
  { id: 1, name: 'Station A', location: 'Hanoi', status: 'Active' },
  { id: 2, name: 'Station B', location: 'Ho Chi Minh City', status: 'Inactive' },
  { id: 3, name: 'Station C', location: 'Da Nang', status: 'Active' },
];

function StationList() {
  const [stations, setStations] = useState(initialStations);

  return (
    <div className="max-w-md mx-auto bg-white rounded shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Nearby Charging Stations</h2>
      <ul>
        {stations.map((station) => (
          <li key={station.id} className="mb-4 p-4 border border-gray-300 rounded hover:shadow">
            <h3 className="text-lg font-bold">{station.name}</h3>
            <p className="text-gray-600">{station.location}</p>
            <p className={`font-semibold ${station.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
              {station.status}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StationList;
