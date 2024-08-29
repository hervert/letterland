import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <h1 className="text-4xl font-bold text-white mb-8">Letterland Journey</h1>
      <div className="flex flex-col space-y-4 items-center">
        <Button 
          className="w-64 h-64 text-2xl font-bold"
          onClick={() => navigate('/play/alphabetical')}
        >
          1. Alphabet
        </Button>
        <Button 
          className="w-64 h-64 text-2xl font-bold"
          onClick={() => navigate('/play/random')}
        >
          2. Random Letters
        </Button>
        <Button 
          className="w-64 h-64 text-2xl font-bold"
          onClick={() => navigate('/play/digits')}
        >
          3. Digits 0-9
        </Button>
        <Button 
          className="w-64 h-64 text-2xl font-bold"
          onClick={() => navigate('/play/random-digits')}
        >
          4. Random Digits
        </Button>
      </div>
    </div>
  );
};

export default Home;
