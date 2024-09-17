import './App.css';
import Navbar from './components/Navbar'
import Logo from './components/Logo'
import CoverLetter from './components/CoverLetter'
import Resume from './components/Resume'
import WebApps from './components/WebApps'
import Designs from './components/Designs'
import HeaderInfo from './components/HeaderInfo'

function App() {
  return (
    <div className="App">
      <img className="background--image" src="../assets/Binary-Background.png"/>
      <div className='comp--container'>
        <Logo />
        <HeaderInfo />
        <WebApps />
        <div className="top--div">

          {/* <CoverLetter /> */}
          <Resume />
        </div>
        <Designs />
        </div>
    </div>
  );
}

export default App;
