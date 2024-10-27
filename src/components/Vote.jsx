import React, { useState } from 'react';

const Vote = ({ contract }) => {
  const [partyId, setPartyId] = useState('');
  const [message, setMessage] = useState('');

  const vote = async () => {
    if (partyId === '') {
      setMessage('Please enter a valid party ID.');
      return;
    }

    try {
      const tx = await contract.vote(partyId);
      await tx.wait();
      setMessage(`Voted for party ID: ${partyId} successfully.`);
      setPartyId(''); // Reset input field after voting
    } catch (error) {
      console.error('Error voting for party:', error);
      setMessage('Failed to vote.');
    }
  };

  return (
    <div className="container">
      <h2>Vote for a Party</h2>
      <input
        type="number"
        placeholder="Party ID"
        value={partyId}
        onChange={(e) => setPartyId(e.target.value)}
      />
      <button onClick={vote}>Vote</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Vote;
