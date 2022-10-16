import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SideNav from './components/leftsideNav/SideNav';
import Main from './components/main/Main';

function App() {
  return (
    <>
    <div className='container'> 
        <Header/>
        <div className='content'>
            <SideNav/>
            <Main/>
        </div>
    </div>

    {/* <div className='container2'> 
        
    </div> */}

    <Footer/>
    </>


  );
}

export default App;
