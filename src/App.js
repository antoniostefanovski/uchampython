import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './views/About';
import Lectures from './views/Lectures';
import Lecture from './views/Lecture';
import Compiler from './components/Compiler';
import Home from './views/Home';
import { Route, Routes } from 'react-router-dom';
import BackToTop from './components/BackToTop';

function App() {
  return (
    // <Home/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Home" element={ <Home/> } />
        <Route path="/About" element={ <About/> } /> 
        <Route path="/Footer" element={ <Footer/> } /> 
        <Route path="/Navbar" element={ <Navbar/> }/>
        <Route path="/Compiler" element={ <Compiler/> }/>
        <Route path="/Lectures" element={ <Lectures/> } /> 
        <Route path="/Lecture/:id" element={ <Lecture /> } /> 
        <Route path="/BackToTop" element= { <BackToTop/> }/>
      </Routes>
  );
}

export default App;
