import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SideNav from './components/leftsideNav/SideNav';
import Main from './components/main/Main';
import Nav from './components/nav/Nav';

import Quotes from './components/favquotes/Quotes';
import Window from './components/window/Window';

function App() {
  return (
      <div className='container'>
        
          <div>
            <Nav/>
          </div>
          
          <div className='main' id='main'> 
              <Header/>
              <div className='content'>
                  <SideNav/>
                  <Main/>
              </div>
          </div>

          <div className='quotes' id='quotes'> 
              <Quotes/>
          </div>

          <div className='window' id='window'> 
              <Window/>
          </div>

          <div className='footer-section' id='footer'>
            <Footer/>
          </div>

      </div>
  );
}

export default App;
