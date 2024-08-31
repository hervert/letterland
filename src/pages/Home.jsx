import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 p-4">
      <h1 className="text-4xl font-bold text-white mb-8">LetterLand</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
        <Button 
          className="h-24 text-xl font-bold"
          onClick={() => navigate('/play/alphabetical-lower')}
        >
          Alphabet (lower case)
        </Button>
        <Button 
          className="h-24 text-xl font-bold"
          onClick={() => navigate('/play/random-lower')}
        >
          Random Letters (lower case)
        </Button>
        <Button 
          className="h-24 text-xl font-bold"
          onClick={() => navigate('/play/alphabetical-upper')}
        >
          Alphabet (upper case)
        </Button>
        <Button 
          className="h-24 text-xl font-bold"
          onClick={() => navigate('/play/random-upper')}
        >
          Random Letters (upper case)
        </Button>
        <Button 
          className="h-24 text-xl font-bold"
          onClick={() => navigate('/play/digits')}
        >
          Digits 0-9
        </Button>
        <Button 
          className="h-24 text-xl font-bold"
          onClick={() => navigate('/play/random-digits')}
        >
          Random Digits
        </Button>
      </div>
    </div>
  );
};

export default Home;
