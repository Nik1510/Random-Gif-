import React, { useState } from 'react';
import useGif from '../hooks/UseGif';

function Input() {
  const [rating, setRating] = useState('g');

  const gifUrl = useGif({rating });

  return (
    <div className="flex flex-col items-center space-y-6 p-4">
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={() => setRating('pg')}
        >
          Click for PG
        </button>
        <button
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
          onClick={() => setRating('pg-13')}
        >
          Click for PG-13
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          onClick={() => setRating('g')}
        >
          Click for G
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          onClick={() => setRating('r')}
        >
          Click for R
        </button>
      </div>

      <div className="flex items-center justify-center w-full">
        {gifUrl ? (
          <img
            src={gifUrl}
            alt="Random GIF"
            className="max-w-xs rounded shadow-lg"
          />
        ) : (
          <p className="text-gray-600">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Input;
