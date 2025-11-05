import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router'
import { useSelector } from 'react-redux'


function Landingpage() {

   const{allstudents}=useSelector(state=>state.studentDetails)
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 bg-gradient-to-r from-blue-800 to-blue-600 text-white shadow-md">
        <h1 className="text-4xl font-bold mb-3">Welcome to Student Management</h1>
        <p className="text-lg text-blue-100 max-w-md">
          Manage your students, track their progress, and handle courses — all in one place.
        </p>
      </section>

       <div className="w-full text-center mt-4">
                <Link to={'/students'}>
                  <button className="bg-blue-900 text-white font-medium px-5 py-2 rounded-lg shadow hover:bg-blue-800 transition">
                    View Students
                  </button>
                </Link>
              </div>

      {/* Stats Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-10 py-16">

       <Link to={'/course'} style={{textDecoration:'none'}}> <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
          <h2 className="text-black text-lg font-semibold">Courses</h2>
          <p className="text-4xl font-bold text-blue-600 mt-2">4</p>
        </div></Link>

       <Link to={'/students'} style={{textDecoration:'none'}} > <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
          <h2 className="text-black text-lg font-semibold">Students</h2>
          <p className="text-4xl font-bold text-blue-600 mt-2">{allstudents.length}</p>
        </div></Link>

        <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
          <h2 className="text-blue-800 text-lg font-semibold">Teachers</h2>
          <p className="text-4xl font-bold text-blue-600 mt-2">8</p>
        </div>

      </section>
     
    </div>
  )
}

export default Landingpage
