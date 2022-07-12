import {ImCalendar} from 'react-icons/im'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Contact from './pages/contact/Contact';
import Faq from './pages/faq/Faq';
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <Home/> } />
        <Route exact path='/faq' element={ <Faq/> } />
        <Route exact path='/contact' element={ <Contact/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
