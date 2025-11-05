import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router'
import { addStudents } from '../Redux/Student.slice'
import Header from '../components/Header'

function Add() {

  const [input, setinput] = useState({
    name: "",
    age: "",
    dob: "",
    gender: "",
    course: "",
    email: "",
    phone: "",
    address: ""

  })
  const dispatch = useDispatch()


  return (
    <div>
      <Header/>
    <div className="d-flex justify-content-center mt-5 flex-col items-center">
      <div className='add-box' style={{
        border: '2px solid #004080',
        borderRadius: '10px',
        padding: '30px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        backgroundColor: '#ffffff',
        width: '400px',
        height: '500px',
        overflowY: 'auto',
      }}>
        <div className='input-feild d-flex flex-column gap-3'>

          {/* Name */}
          <div className="d-flex flex-column">
            <label className="form-label fw-semibold">Name</label>
            <input
              onChange={(e) => setinput({ ...input, name: e.target.value })}
              type="text"
              className="form-control border border-2 border-dark"
              placeholder="Student Name"
            />
          </div>

          {/* age */}

          <div className="d-flex flex-column">
            <label className="form-label fw-semibold">Age</label>
            <input
              onChange={(e) => setinput({ ...input, age: e.target.value })}
              type="number"
              className="form-control border border-2 border-dark"
            />
          </div>

          {/* Date */}
          <div className="d-flex flex-column">
            <label className="form-label fw-semibold">Date of Birth</label>
            <input
              onChange={(e) => setinput({ ...input, dob: e.target.value })}
              type="date"
              className="form-control border border-2 border-dark"
            />
          </div>


          {/* gender */}

          <div className="d-flex flex-column">
            <label className="form-label fw-semibold">Gender</label>
            <select className="form-control border border-2 border-dark"
              onChange={(e) => setinput({ ...input, gender: e.target.value })}>
              <option >choose</option>
              <option value="Male">Male</option>
              <option value="Female" >Female</option>
            </select>
          </div>

          {/* course */}
          <div className="d-flex flex-column">
            <label className="form-label fw-semibold">Course</label>
            <select className="form-control border border-2 border-dark"
              onChange={(e) => setinput({ ...input, course: e.target.value })}>
              <option >Select type</option>
              <option value="MEARN">MEARN</option>
              <option value="Python Data Science">Python Data Science</option>
              <option value="Asp.net">Asp.net</option>
              <option value="Flutter">Flutter</option>
            </select>
          </div>

          {/* email */}
          <div className="d-flex flex-column">
            <label className="form-label fw-semibold">Email</label>
            <input
              onChange={(e) => setinput({ ...input, email: e.target.value })}
              type="email"
              className="form-control border border-2 border-dark"
            />
          </div>

          {/* Phone number */}

          <div className="d-flex flex-column">
            <label className="form-label fw-semibold">Ph Number</label>
            <input
              onChange={(e) => setinput({ ...input, phone: e.target.value })}
              type="text"
              className="form-control border border-2 border-dark"
              placeholder="ph number"
            />
          </div>


          {/* Address */}

          <div className="d-flex flex-column">
            <label className="form-label fw-semibold">Address</label>
            <input
              onChange={(e) => setinput({ ...input, address: e.target.value })}
              type="text"
              className="form-control border border-2 border-dark"
              placeholder="Address"
            />
          </div>

        </div>
      </div>


      {/* Submit Button */}
      <div className="flex space-x-4 mt-3">
        <Link to={'/students'}>
          <button onClick={() => {dispatch(addStudents(input));alert("student added")}} className="bg-blue-900 text-white font-medium px-6 py-2 rounded-lg w-32 h-10 hover:bg-blue-800 transition">
            Add Student
          </button>
        </Link>
        <Link to={'/'}>
          <button className="bg-gray-500 text-white font-medium px-6 py-2 rounded-lg w-32 h-10 hover:bg-gray-600 transition">
            Back
          </button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Add
