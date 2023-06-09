import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Service from './components/Service';
import Footer from './components/Footer';
import Photo from './components/Photo';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route  path='/about' element={<About/>}/>
      <Route  path='/contact' element={<Contact/>}/>
      <Route  path='/service' element={<Service/>}/>
      <Route path='/photo' element={<Photo />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
