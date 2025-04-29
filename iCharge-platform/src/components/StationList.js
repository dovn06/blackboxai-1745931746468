import React, { useState } from 'react';

const initialStations = [
  { id: 1, name: 'Station A', location: 'Hanoi', status: 'Active' },
  { id: 2, name: 'Station B', location: 'Ho Chi Minh City', status: 'Inactive' },
  { id: 3, name: 'Station C', location: 'Da Nang', status: 'Active' },
];

function StationList() {
  const [stations, setStations] = useState(initialStations);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Charging Stations</h2>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Location</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {stations.map((station) => (
            <tr key={station.id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{station.name}</td>
              <td className="border border-gray-300 px-4 py-2">{station.location}</td>
              <td className={`border border-gray-300 px-4 py-2 font-semibold ${station.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                {station.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StationList;
