import React, { useState } from 'react';

const Results = ({ contract }) => {
  const [parties, setParties] = useState([]);
  const [message, setMessage] = useState('');

  const getResults = async () => {
    try {
      const results = await contract.getResults();
      const partiesList = results.map((party, index) => ({
        id: index,
        name: party.name,
        votes: party.voteCount.toString(),
      }));
      setParties(partiesList);
      setMessage('');
    } catch (error) {
      console.error('Error fetching results:', error);
      setMessage('Failed to fetch results.');
    }
  };

  return (
    <div className="container">
      <h2>Election Results</h2>
      <button onClick={getResults}>Get Results</button>
      {message && <p>{message}</p>}
      <ul>
        {parties.map((party) => (
          <li key={party.id}>
            ID: {party.id} | Name: {party.name} | Votes: {party.votes}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
