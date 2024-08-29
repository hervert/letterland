import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Index = () => {
  const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [backgroundColor, setBackgroundColor] = useState('');
  const { mode } = useParams();
  const navigate = useNavigate();

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const digits = '0123456789';

  const generateRandom = (set) => {
    return set[Math.floor(Math.random() * set.length)];
  };

  const generateRandomColor = () => {
    const brightColors = ['bg-yellow-400', 'bg-green-400', 'bg-blue-400', 'bg-red-400', 'bg-purple-400', 'bg-pink-400'];
    return brightColors[Math.floor(Math.random() * brightColors.length)];
  };

  // Explanation:
  // 1. We define an array of bright Tailwind CSS background color classes.
  // 2. We use Math.random() to generate a random index within the array length.
  // 3. We return a randomly selected color class from the array.

  const changeCharAndColor = useCallback(() => {
    let newChar;
    switch (mode) {
      case 'alphabetical':
        newChar = alphabet[(currentIndex + 1) % alphabet.length];
        break;
      case 'random':
        newChar = generateRandom(alphabet);
        break;
      case 'digits':
        newChar = digits[(currentIndex + 1) % digits.length];
        break;
      case 'random-digits':
        newChar = generateRandom(digits);
        break;
      default:
        newChar = generateRandom(alphabet);
    }
    setHistory(prev => [...prev.slice(0, currentIndex + 1), newChar]);
    setCurrentIndex(prev => prev + 1);
    setBackgroundColor(generateRandomColor());
  }, [mode, currentIndex]);

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setBackgroundColor(generateRandomColor());
    }
  }, [currentIndex]);

  const goToNext = useCallback(() => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setBackgroundColor(generateRandomColor());
    } else {
      changeCharAndColor();
    }
  }, [currentIndex, history.length, changeCharAndColor]);

  useEffect(() => {
    changeCharAndColor();
  }, [mode]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToPrevious, goToNext]);

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
      <div className="flex-grow flex items-center justify-center cursor-pointer" onClick={goToNext}>
        <div className="h-[90%] flex items-center justify-center">
          <h1 className="text-black text-[90vh] font-bold leading-none">{history[currentIndex]}</h1>
        </div>
      </div>
    </div>
  );
};

export default Index;
