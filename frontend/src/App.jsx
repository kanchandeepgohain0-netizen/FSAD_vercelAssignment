import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Weather from './pages/Weather';

function App(){
    return(
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Contact' element={<Contact/>}/>
                    <Route path='/Education' element={<Education/>}/>
                    <Route path='/Skills' element={<Skills/>}/>
                    <Route path='/Weather' element={<Weather/>}/>
                </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;