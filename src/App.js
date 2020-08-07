import React from 'react';
import 'react-router-dom';
import './global.css';
import Routes from './routes';
import Header from './Components/header';
import Footer from './Components/footer';


function App() {

  return(
    <div>
    <Header/>
    <Routes/>
    <Footer/>
    </div>
  );

}
  
export default App;
