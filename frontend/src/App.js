import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Catnavbar from "./Components/Catnavbar";
import Learnpage from "./pages/Learnpage";
import Ratedpage from "./pages/Ratedpage";
import Courses from "./pages/Courses";
import Career from "./pages/Career";
import Earnpage from "./pages/Earnpage";
import Apptitude from "./pages/Apptitude";
import Verbaltest from "./pages/Verbaltest";
import Personality from "./pages/Personality";
import Faq from "./pages/Faq";
import Coursepage from "./pages/Coursepage";
import Affiliates from "./pages/Affiliates";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './Components/Home';
import Testpage from './pages/Testpage';
import Profile from './pages/Profile';
import Abstracttest from './pages/Abstracttest';
import Numericaltest from './pages/Numericaltest';
import Coursedetailpage from './pages/Coursedetailpage';
import Emailpage from './pages/Emailpage';
import Resetpassword from './pages/Resetpassword';
import Scorepage from './pages/Scorepage';
import Singlecoursepage from './pages/Singlecoursepage';
import Enrollmentpage from './pages/Enrollmentpage';
import Scoretable from './pages/Scoretable';


function App() {
  return (
    <div className="App">
         <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/apptitudepage" element={<Apptitude/>}/>
        <Route path="/careerPage" element={<Career/>}/>
        <Route path="/earnPage" element={<Earnpage/>}/>
        <Route path="/itcoursepage/:category" element={<Coursepage/>}/>
        <Route path="/login" element={<Login/>}/> 
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/personality" element={<Personality/>}/>
        <Route path="/programme" element={ <Affiliates/>}/>
        <Route path="/verbaltest" element={  <Verbaltest/>}/>
        <Route path="/abstracttest" element={  <Abstracttest/>}/>
        <Route path="/numericaltest" element={  <Numericaltest/>}/>
        <Route path="/testpage" element={  <Testpage/>}/>
        <Route path="/profile" element={  <Profile/>}/>
        <Route path="/cousedetailpage" element={<Coursedetailpage/>}/>
        <Route path="/emaipassword" element={<Emailpage/>}/>
        <Route path="/reset-password/:token" element={<Resetpassword/>}/>
        {/* <Route path="/scorepage/:category" element={<Scorepage/>}/> */}
        <Route path="/scorepage" element={<Scorepage/>}/>
        {/* <Route path="/maincourse" element={<Singlecoursepage/>} /> */}
          <Route path="/coursepage/:id" element={<Singlecoursepage/>}/>
          <Route path="/enrollmentform" element={<Enrollmentpage/>}/>
          <Route parh="/itcoursepage" element={<Courses/>}/>
          <Route path="/scoretable" element={<Scoretable/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
