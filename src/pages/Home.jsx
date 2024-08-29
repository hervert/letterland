import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
      <h1 className="text-4xl font-bold text-white mb-8">Letterland Journey</h1>
      <div className="space-y-4">
        <Button 
          className="w-64 text-lg"
          onClick={() => navigate('/play/alphabetical')}
        >
          Alphabetical Order
        </Button>
        <Button 
          className="w-64 text-lg"
          onClick={() => navigate('/play/random')}
        >
          Random Letters
        </Button>
        <Button 
          className="w-64 text-lg"
          onClick={() => navigate('/play/digits')}
        >
          Digits 0-9
        </Button>
        <Button 
          className="w-64 text-lg"
          onClick={() => navigate('/play/random-digits')}
        >
          Random Digits
        </Button>
      </div>
    </div>
  );
};

export default Home;
