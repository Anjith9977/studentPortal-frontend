import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router'
import { editStudent, fetchEditId } from '../Redux/Student.slice';
import Header from '../components/Header';

function Edit() {

  const [editInput, setEditInput] = useState({
    name: "",
    age: "",
    dob: "",
    gender: "",
    course: "",
    email: "",
    phone: "",
    address: ""
  })

  const { id } = useParams()
  console.log(id);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchEditId(id))
  }, [])

  const { loading, selectedStudents } = useSelector(state => state.studentDetails)


  useEffect(() => {
     if (selectedStudents) {
    setEditInput(selectedStudents)
  }
  }, [selectedStudents])


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
              value={editInput?.name}
              onChange={(e) => setEditInput({ ...editInput, name: e.target.value })}
              type="text"
              className="form-control border border-2 border-dark"
              placeholder="Student Name"
            />
          </div>

          {/* Date */}
          <div className="d-flex flex-column">
            <label className="form-label fw-semibold">Date of Birth</label>
            <input
              value={editInput.dob}
              onChange={(e) => setEditInput({ ...editInput, dob: e.target.value })}
              type="date"
              className="form-control border border-2 border-dark"
            />
          </div>

          {/* age */}

          <div className="d-flex flex-column">
            <label className="form-label fw-semibold">Age</label>
            <input
              value={editInput.age}
              onChange={(e) => setEditInput({ ...editInput, age: e.target.value })}
              type="number"
              className="form-control border border-2 border-dark"
            />
          </div>

          {/* gender */}

          <div className="d-flex flex-column">
            <label className="form-label fw-semibold">Gender</label>
            <select className="form-control border border-2 border-dark"
              value={editInput.gender} onChange={(e) => setEditInput({ ...editInput, gender: e.target.value })}>
              <option value="">choose</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Phone number */}

          <div className="d-flex flex-column">
            <label className="form-label fw-semibold">Ph Number</label>
            <input
              value={editInput.phone}
              onChange={(e) => setEditInput({ ...editInput, phone: e.target.value })}
              type="text"
              className="form-control border border-2 border-dark"
              placeholder="ph number"
            />
          </div>

          {/* email */}
          <div className="d-flex flex-column">
            <label className="form-label fw-semibold">Email</label>
            <input
              value={editInput.email}
              onChange={(e) => setEditInput({ ...editInput, email: e.target.value })}
              type="email"
              className="form-control border border-2 border-dark"
            />
          </div>

          {/* course */}
          <div className="d-flex flex-column">
            <label className="form-label fw-semibold">Course</label>
            <select className="form-control border border-2 border-dark"
              value={editInput.course} onChange={(e) => setEditInput({ ...editInput, course: e.target.value })}>
              <option value="">Select type</option>
              <option value="MEARN">MEARN</option>
              <option value="Python Data Science">Python Data Science</option>
              <option value="Asp.net">Asp.net</option>
              <option value="Flutter">Flutter</option>
            </select>
          </div>

          {/* Address */}

          <div className="d-flex flex-column">
            <label className="form-label fw-semibold">Address</label>
            <input
              value={editInput.address}
              onChange={(e) => setEditInput({ ...editInput, address: e.target.value })}
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
          <button onClick={() => { dispatch(editStudent({ id, data: editInput })); alert("student updated successfully") }} className="bg-blue-900 text-white font-medium px-6 py-2 rounded-lg w-32 h-10 hover:bg-blue-800 transition">
            Update Student
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

export default Edit