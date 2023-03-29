import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from './components/landingpage/landingPage';
import BitskillSolutions from './components/bitskillSolutions/bitskillSolutions';
import InstitutionalUse from './components/institutionalUse/institutionInformation/institutionalUse';
import InstitutionCreateAccount from './components/institutionalUse/institutionCreateAccount/institutionCreateAccount';
import AddSchool from './components/institutionalUse/addSchool/addSchool';
import Introduction from './components/institutionalUse/introduction/introduction';
import AddCourse from './components/institutionalUse/addCourse/addCourse';
import AddUnit from './components/institutionalUse/addUnit/addUnit';
import InstitutionLogin from './components/institutionalUse/institutionLoginPage/institutionlogin';
import StaffLogin from './components/institutionalUse/staffLogin/staffLogin';
import SignInCheck from './components/signInCheck/signInCheck';
import InstitutionDashboard from './components/institutionalUse/institutionDashboard/institutionDashboard';
import InstitutionStaff from './components/institutionalUse/institutionStaff/institutionStaff';
import AddStaff from './components/institutionalUse/addStaff/addStaff';
import AddStaffAccount from './components/institutionalUse/addStaffAccount/addStaffAccount';
import Grade from './components/institutionalUse/grade/grade';
import GradeUnit from './components/institutionalUse/grade/gradeUnit';
import StaffDashboard from './components/institutionalUse/staffDashboard/staffDashboard';
import PersonalAccountSignUP from './components/personalUse/personalAccountSignUp/personalAccountSignUp';

function App() {
    return ( 
        <div className = "container-fluid" >
            <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<LandingPage/>}/>
                    <Route exact path='/bitskillSolutions' element={<BitskillSolutions/>}/>
                    <Route exact path='/institutionalUse' element={<InstitutionalUse/>}/>
                    <Route exact path='/institutionCreateAccount' element={<InstitutionCreateAccount/>}/>
                    <Route exact path='/institutionLogin' element={<InstitutionLogin/>}/>
                    <Route exact path='/staffLogin' element={<StaffLogin/>}/>
                    <Route exact path='/addSchool' element={<AddSchool/>}/>
                    <Route exact path='/addUnit' element={<AddUnit/>}/>
                    <Route exact path='/introduction' element={<Introduction/>}/>
                    <Route exact path='/addCourse' element={<AddCourse/>}/>
                    <Route exact path='/signInCheck' element={<SignInCheck/>}/>
                    <Route exact path='/institutionDashboard' element={<InstitutionDashboard/>}/>
                    <Route exact path='/institutionStaff' element={<InstitutionStaff/>}/>
                    <Route exact path='/addStaff' element={<AddStaff/>}/>
                    <Route exact path='/addStaffAccount' element={<AddStaffAccount/>}/>
                    <Route exact path='/grade' element={<Grade/>}/>
                    <Route exact path='/gradeUnit' element={<GradeUnit/>}/>
                    <Route exact path='/staffDashboard' element={<StaffDashboard/>}/>
                    <Route exact path='/personalAccountSignUp' element={<PersonalAccountSignUP/>}/>
                </Routes>
            </Router>
            
            </>
        </div>
    );
}

export default App;