import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      <h1 className="text-4xl font-bold text-white mb-8">LetterLand</h1>
      <div className="flex flex-col space-y-4 w-full max-w-md">
        <Button 
          className="w-full h-24 text-2xl font-bold"
          onClick={() => navigate('/play/alphabetical')}
        >
          Alphabet
        </Button>
        <Button 
          className="w-full h-24 text-2xl font-bold"
          onClick={() => navigate('/play/random')}
        >
          Random Letters
        </Button>
        <Button 
          className="w-full h-24 text-2xl font-bold"
          onClick={() => navigate('/play/digits')}
        >
          Digits 0-9
        </Button>
        <Button 
          className="w-full h-24 text-2xl font-bold"
          onClick={() => navigate('/play/random-digits')}
        >
          Random Digits
        </Button>
      </div>
    </div>
  );
};

export default Home;
