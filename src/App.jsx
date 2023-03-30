import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Projects, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
