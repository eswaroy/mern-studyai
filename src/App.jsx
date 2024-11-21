import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about'
import Profile from './pages/profile'
import SignIn from './pages/signin'
import StudyX from './pages/studyX'
export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/sign-in" element={<SignIn/>}/>
    <Route path="/studyx" element={<StudyX/>}/>

  </Routes>
   
  </BrowserRouter>
}