import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import HeroeSection from './components/landingpage/heroeSection/heroeSection';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
    return ( 
        <div className = "container-fluid" >
            <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<HeroeSection/>}/>
                </Routes>
            </Router>
            
            </>
        </div>
    );
}

export default App;