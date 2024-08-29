import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Index = () => {
  const [letter, setLetter] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const { mode } = useParams();
  const navigate = useNavigate();

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const generateRandomLetter = () => {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  };

  const generateRandomColor = () => {
    const brightColors = ['bg-yellow-400', 'bg-green-400', 'bg-blue-400', 'bg-red-400', 'bg-purple-400', 'bg-pink-400'];
    return brightColors[Math.floor(Math.random() * brightColors.length)];
  };

  const changeLetterAndColor = () => {
    if (mode === 'alphabetical') {
      setLetter(alphabet[currentIndex]);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % alphabet.length);
    } else {
      setLetter(generateRandomLetter());
    }
    setBackgroundColor(generateRandomColor());
  };

  useEffect(() => {
    changeLetterAndColor();
  }, [mode]);

  return (
    <div 
      className={`h-screen flex flex-col ${backgroundColor}`}
    >
      <Button
        variant="ghost"
        className="absolute top-4 left-4 text-black"
        onClick={() => navigate('/')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>
      <div className="flex-grow flex items-center justify-center cursor-pointer" onClick={changeLetterAndColor}>
        <div className="h-[90%] flex items-center justify-center">
          <h1 className="text-black text-[90vh] font-bold leading-none">{letter}</h1>
        </div>
      </div>
    </div>
  );
};

export default Index;
