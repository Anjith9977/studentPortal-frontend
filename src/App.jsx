import { Route, Routes } from 'react-router'
import './App.css'
import Landingpage from './pages/Landingpage'
import Add from './pages/Add'
import Edit from './pages/Edit'
import ViewDetails from './pages/ViewDetails'
import StudentList from './pages/StudentList'
import Course from './pages/Course'



function App() {


  return (
    <>
    
     <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/add' element={<Add/>}/>
      <Route path='/students' element={<StudentList/>}/>
      <Route path='/Course' element={<Course/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
      <Route path='/view/:id' element={<ViewDetails/>}/>
      
     </Routes>
    
    </>
  )
}

export default App
