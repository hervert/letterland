import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Index = () => {
  const [letterHistory, setLetterHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [backgroundColor, setBackgroundColor] = useState('');
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

  const changeLetterAndColor = useCallback(() => {
    let newLetter;
    if (mode === 'alphabetical') {
      newLetter = alphabet[(currentIndex + 1) % alphabet.length];
    } else {
      newLetter = generateRandomLetter();
    }
    setLetterHistory(prev => [...prev.slice(0, currentIndex + 1), newLetter]);
    setCurrentIndex(prev => prev + 1);
    setBackgroundColor(generateRandomColor());
  }, [mode, currentIndex]);

  const goToPreviousLetter = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setBackgroundColor(generateRandomColor());
    }
  }, [currentIndex]);

  const goToNextLetter = useCallback(() => {
    if (currentIndex < letterHistory.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setBackgroundColor(generateRandomColor());
    } else {
      changeLetterAndColor();
    }
  }, [currentIndex, letterHistory.length, changeLetterAndColor]);

  useEffect(() => {
    changeLetterAndColor();
  }, [mode]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        goToPreviousLetter();
      } else if (event.key === 'ArrowRight') {
        goToNextLetter();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToPreviousLetter, goToNextLetter]);

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
      <div className="flex-grow flex items-center justify-center cursor-pointer" onClick={goToNextLetter}>
        <div className="h-[90%] flex items-center justify-center">
          <h1 className="text-black text-[90vh] font-bold leading-none">{letterHistory[currentIndex]}</h1>
        </div>
      </div>
    </div>
  );
};

export default Index;
