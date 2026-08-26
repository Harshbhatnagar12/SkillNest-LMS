import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './pages/students/Home'
import CourseList from './pages/students/CoursesList'
import CourseDetail from './pages/students/CourseDetail'
import MyEnrollments from './pages/students/MyEnrollments'
import Player from './pages/students/Player'
import Loading from './components/student/Loading'
import Educator from './pages/educators/Educator'
import Dashboard from './pages/educators/Dashboard'
import AddCourse from './pages/educators/AddCourse'
import MyCourse from './pages/educators/MyCourse'
import StudentsEnrolled from './pages/educators/StudentsEnrolled'
import Navbar from './components/student/Navbar'


const App = () => {

  const isEducatorRoute = useMatch('/educator/*') 

  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute &&  <Navbar/> }
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course-list' element={<CourseList/>}/>
        <Route path='/course-list/:input' element={<CourseList/>}/>
        <Route path='/course/:id' element={<CourseDetail/>}/>
        <Route path='/my-enrollments' element={<MyEnrollments/>}/>
        <Route path='/player/:courseId' element={<Player/>}/>
        <Route path='/loading/:path' element={<Loading/>}/>

        <Route path='/educator' element={<Educator/>}>
        <Route path='educator' element={<Dashboard/>}/>
        <Route path='add-course' element={<AddCourse/>}/>
        <Route path='my-courses' element={<MyCourse/>}/>
        <Route path='student-enrolled' element={<StudentsEnrolled/>}/>
 
        </Route>
        </Routes>     
    </div>
  )
}

export default App
