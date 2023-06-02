import React from 'react';
import Hero from './components/Hero';
import Meaning from './components/Meaning';
import Management from './components/Management';
import Limitations from './components/Limitations';

const App: React.FC = () => {
  return (
    // Parent Container
    <div className='font-Inter relative'>
      {/* Hero Section */}
      <Hero />
      {/* Meaning section */}
      <Meaning />
      {/* Management section */}
      <Management />
      {/* Limitations section */}
      <Limitations />
    </div>
  );
};

export default App;
