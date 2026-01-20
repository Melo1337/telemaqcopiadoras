import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer'; 
import Body from './components/Body/Body'; 

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Body />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
