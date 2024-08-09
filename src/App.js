// import logo from './logo.svg';
// import './App.css';
import Banner from './components/Banner';
import ContentOne from './components/ContentOne';
import FirstContent from './components/FirstContent';
import Navbar from './components/Navbar';
import NavigationBar from './components/NavigationBar';
import Section from './components/Section';
// import './style.css';
import './CSS/Navbar.css';
import './CSS/contentone.css';
import './CSS/contenttwo.css';
import './CSS/iconbar.css';

import ContentTwo from './components/ContentTwo';
import FloatingSocialBar from './components/FloatingSocialBar';

const bearPicture = new URL("./images/keyboard.jpg", import.meta.url)
function App() {

  return (
    <div className="App">
     <Navbar />
     <div className="banner" id= "skewOne">
     <img className="thumbnail" src={bearPicture}/>
     </div>
     <ContentOne />
     <ContentTwo />
     <FloatingSocialBar />
     <ContentOne />
    </div>
  );
}

export default App;
