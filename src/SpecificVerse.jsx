import React, { useState } from 'react';

const SpecificVerse = () => {
  const [reference, setReference] = useState(''); // Default reference
  const [verseText, setVerseText] = useState('');

  const fetchSpecificVerse = async () => {
    try {
      const response = await fetch(`https://labs.bible.org/api/?passage=${encodeURIComponent(reference)}`);
      if (!response.ok) {
        const errorText = await response.text(); // Get error text for debugging
        throw new Error(`HTTP error! Status: ${response.status}, Response: ${errorText}`);
      }
      const textData = await response.text(); // Get the response as text
      console.log('Raw Response:', textData); // Log the raw response for inspection
      setVerseText(textData); // Set the verse text state
    } catch (error) {
      console.error('Error fetching specific verse:', error.message);
    }
  };

  return (
    <div>
      <h2>Get Specific Bible Verse</h2>
      <input
        type="text"
        value={reference}
        onChange={(e) => setReference(e.target.value)}
        placeholder="verse-reference (e.g., John 3:16)"
      />
      <button onClick={fetchSpecificVerse}>Get Verse</button>
      {verseText && (
        <div style={{ marginTop: '20px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}>
          <p>{verseText}</p> {/* Display the fetched verse text */}
        </div>
      )}
    </div>
  );
};

export default SpecificVerse;
