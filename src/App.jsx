import { BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { About, Contact, Experience, Hero, Navbar, Tech, Projects } from "./components";
import Loading from './components/Loading';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2150);
  })
  return (
    <BrowserRouter>
      {isLoading===true?
      <Loading/>:
      <div className='relative z-100 bg-primary'>
      
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center bg-o'>
          <Navbar />
          <Hero />
          <Tech />
          
        </div>
        <About />
        <Experience />
        <Projects />
        
        <div className='relative z-0 bg-hero-pattern bg-cover bg-no-repeat bg-top bg-o flex flex-col py-6 justify-center'>
          <Contact />
          {/* <StarsCanvas /> */}
        </div>


      </div>
}
    </BrowserRouter>
  );
}

export default App;
