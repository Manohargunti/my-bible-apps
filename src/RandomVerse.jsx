import React, { useState } from 'react';

const RandomVerse = () => {
  const [verseText, setVerseText] = useState('');

  const fetchRandomVerse = async () => {
    try {
      const response = await fetch('https://labs.bible.org/api/?passage=random');
      if (!response.ok) {
        const errorText = await response.text(); // Get error text for debugging
        throw new Error(`HTTP error! Status: ${response.status}, Response: ${errorText}`);
      }
      const textData = await response.text(); // Get the response as text
      console.log('Raw Response:', textData); // Log the raw response for inspection
      setVerseText(textData); // Set the verse text state
    } catch (error) {
      console.error('Error fetching random verse:', error.message);
    }
  };

  return (
    <div>
      <h2>Random Bible Verse</h2>
      <button onClick={fetchRandomVerse}>Get Random Verse</button>
      {verseText && (
        <div style={{ marginTop: '20px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}>
          <p>{verseText}</p> {/* Display the fetched verse text */}
        </div>
      )}
    </div>
  );
};

export default RandomVerse;
