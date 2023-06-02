import React from 'react';
import Hero from './components/Hero';
import Meaning from './components/Meaning';
import Management from './components/Management';
import Limitations from './components/Limitations';

const App: React.FC = () => {
  return (
    <div className='font-Inter relative'>
      <Hero />
      <Meaning />
      <Management />
      <Limitations />
    </div>
  );
};

export default App;
