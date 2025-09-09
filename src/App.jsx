
import './App.css'
import HeroBanner from './Components/HeroBanner/HeroBanner'
import AboutUS from './Components/AboutUS/AboutUS'  
import CleaningProcess from './Components/CleaningProcess/CleaningProcess'
import CommonButton from './Components/CommonButton/CommonButton'  

function App() {

  return (
    <>
      <CommonButton href="https://remote-labs.io/" text="Get Started" variant="solidbtn" />
      <HeroBanner />
      <AboutUS/>
      <CleaningProcess/>
    </>
  )
}

export default App
