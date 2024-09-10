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
      <Logo />
      <HeaderInfo />
      <Navbar />
      <div className="top--div">
        <CoverLetter />
        <Resume />
      </div>
      <WebApps />
      <Designs />
    </div>
  );
}

export default App;
