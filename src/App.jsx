import { Routes, Route } from 'react-router-dom';
import NavBar from './components/organisms/NavBar';
import Home from './pages/Home';
import Proyects from './pages/Proyects';
import ProyectsDetail from './pages/ProyectDetails';
import NotFound from './pages/NotFounds';
import Footer from './components/organisms/Footer';
import About from './pages/Abouts';
import News from './pages/News';
import NewsDetail from './pages/NewDetails';
import Contact from './pages/Contacts';
function App() {
 return (
   <>
     <NavBar />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/proyects' element={<Proyects />} />
       <Route path='/proyects/:id' element={<ProyectsDetail />} />
       <Route path='/news' element={<News />} />
       <Route path='/news/:id' element={<NewsDetail />} />
       <Route path='/abouts' element={<About />} />
       <Route path='/contacts' element={<Contact />} />
       <Route path='*' element={<NotFound />} />
     </Routes>
     <Footer />
   </>
 );
}


export default App;
