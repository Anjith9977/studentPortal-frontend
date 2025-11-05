import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchStudents } from '../Redux/Student.slice'

function ViewDetails() {

  const { id } = useParams()
  console.log(id);

  useEffect(() => {
   fetchStudents()
  }, [])

    const {loading,allstudents,error}=useSelector(state=>state.studentDetails)

    const selectedStudents = allstudents.find(item=>String(item.id)===id)
    


  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-2xl p-8">
        {/* Back Button */}
        <Link to={'/students'}><div className="text-blue-600 flex items-center mb-6 cursor-pointer hover:underline">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back to Students
        </div></Link>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Student Details
        </h1>

        {/* Student Info Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          <div>
            <p className="text-sm text-gray-500">Student ID</p>
            <p className="font-medium">{selectedStudents.id}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-medium">{selectedStudents.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Age</p>
            <p className="font-medium">{selectedStudents.age}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Date of Birth</p>
            <p className="font-medium">{selectedStudents.dob}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Gender</p>
            <p className="font-medium">{selectedStudents.gender}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium break-words">{selectedStudents.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium">{selectedStudents.phone}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Course</p>
            <p className="font-medium">{selectedStudents.course}</p>
          </div>
          <div className="sm:col-span-2">
            <p className="text-sm text-gray-500">Address</p>
            <p className="font-medium">
              {selectedStudents.address}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewDetails
