import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from './components/landingpage/landingPage';
import BitskillSolutions from './components/bitskillSolutions/bitskillSolutions';
import InstitutionalUse from './components/institutionalUse/institutionInformation/institutionalUse';
import CreateAccount from './components/createAccount/createAccount.';
import AddSchool from './components/institutionalUse/addSchool/addSchool';
import ViewSchool from './components/institutionalUse/viewSchools/viewSchool';
import Introduction from './components/institutionalUse/introduction/introduction';
import AddCourse from './components/institutionalUse/addCourse/addCourse';
import AddUnit from './components/institutionalUse/addUnit/addUnit';

function App() {
    return ( 
        <div className = "container-fluid" >
            <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<LandingPage/>}/>
                    <Route exact path='/bitskillSolutions' element={<BitskillSolutions/>}/>
                    <Route exact path='/institutionalUse' element={<InstitutionalUse/>}/>
                    <Route exact path='/createAccount' element={<CreateAccount/>}/>
                    <Route exact path='/addSchool' element={<AddSchool/>}/>
                    <Route exact path='/addUnit' element={<AddUnit/>}/>
                    <Route exact path='/introduction' element={<Introduction/>}/>
                    <Route exact path='/addCourse' element={<AddCourse/>}/>

                </Routes>
            </Router>
            
            </>
        </div>
    );
}

export default App;