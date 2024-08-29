import React, { useState, useEffect } from 'react';

const Index = () => {
  const [letter, setLetter] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const generateRandomLetter = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  };

  const generateRandomColor = () => {
    const brightColors = ['bg-yellow-400', 'bg-green-400', 'bg-blue-400', 'bg-red-400', 'bg-purple-400', 'bg-pink-400'];
    return brightColors[Math.floor(Math.random() * brightColors.length)];
  };

  const changeLetterAndColor = () => {
    setLetter(generateRandomLetter());
    setBackgroundColor(generateRandomColor());
  };

  useEffect(() => {
    changeLetterAndColor();
  }, []);

  return (
    <div 
      className={`h-screen flex items-center justify-center ${backgroundColor} cursor-pointer`}
      onClick={changeLetterAndColor}
    >
      <div className="h-[90%] flex items-center justify-center">
        <h1 className="text-black text-[90%] font-bold leading-none">{letter}</h1>
      </div>
    </div>
  );
};

export default Index;
