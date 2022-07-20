import {ImCalendar} from 'react-icons/im'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Contact from './pages/contact/Contact';
import Faq from './pages/faq/Faq';
import Home from './pages/home/Home';
import Tasks from './pages/tasks/Tasks';
import { Context } from './context';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={ <Home/> } />
          <Route exact path='/faq' element={ <Faq/> } />
          <Route exact path='/contact' element={ <Contact/> } />
          <Route exact path='/tasks' element={ <Tasks/> } />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
