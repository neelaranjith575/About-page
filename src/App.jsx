import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import About from './pages/About'

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <About />
    </>
  )
}

export default App