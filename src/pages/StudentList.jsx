import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPenToSquare, faTrash, faEye } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { deleteStudents, fetchStudents, searchStudents } from '../Redux/Student.slice'
import { Spinner } from 'react-bootstrap'

function StudentList() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchStudents())
  }, [])

  const { loading, allstudents, error } = useSelector(state => state.studentDetails)
  console.log(loading, allstudents, error);


  return (
    <div>
      <Header />

      <div className="mx-auto px-6 py-10 flex flex-col items-center justify-center">

        {/* Add Button */}
        <div className="w-full text-right mb-6">
          <Link to={'/add'}>
            <button className="bg-blue-900 text-white font-medium px-5 py-2 rounded-lg shadow hover:bg-blue-800 transition">
              Add Students +
            </button>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-5xl mb-6 relative">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-3 top-3 text-gray-500"
          />
          <input
          onChange={(e)=>dispatch(searchStudents(e.target.value.toLowerCase()))}
            type="text"
            placeholder="Search by student name or roll no..."
            className="placeholder-gray-500 w-full border border-black rounded-2xl px-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>

        {/* Table */}
        <div className="w-full max-w-6xl overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-blue-900 text-white text-sm">
              <tr>
                <th className="py-3 px-4 text-left whitespace-nowrap">id</th>
                <th className="py-3 px-4 text-left whitespace-nowrap">Name</th>
                <th className="py-3 px-4 text-left whitespace-nowrap">Age</th>
                <th className="py-3 px-4 text-left whitespace-nowrap">DOB</th>
                <th className="py-3 px-4 text-left whitespace-nowrap">Gender</th>
                <th className="py-3 px-4 text-left whitespace-nowrap">Course</th>
                <th className="py-3 px-4 text-left whitespace-nowrap">Email</th>
                <th className="py-3 px-4 text-left whitespace-nowrap">Phone</th>
                <th className="py-3 px-4 text-left whitespace-nowrap">Address</th>
                <th className="py-3 px-4 text-left whitespace-nowrap">Actions</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200 text-sm">
              {
                loading ? (
                  <div className="container">
                    <div className="text-center my-5 mx-120">
                      <Spinner animation="border" variant="success"></Spinner>
                    </div>
                  </div>
                ) : (

                  allstudents.length > 0 ?
                    allstudents?.map(stu => (
                      <tr className="hover:bg-gray-50 transition">
                        <td className="py-3 px-4 whitespace-nowrap">{stu.id}</td>
                        <td className="py-3 px-4 whitespace-nowrap">{stu.name}</td>
                        <td className="py-3 px-4 whitespace-nowrap">{stu.age}</td>
                        <td className="py-3 px-4 whitespace-nowrap">{stu.dob}</td>
                        <td className="py-3 px-4 whitespace-nowrap">{stu.gender}</td>
                        <td className="py-3 px-4 whitespace-nowrap">{stu.course}</td>
                        <td className="py-3 px-4 whitespace-nowrap">{stu.email}</td>
                        <td className="py-3 px-4 whitespace-nowrap">{stu.phone}</td>
                        <td className="py-3 px-4 whitespace-nowrap">{stu.address}</td>
                        <td className="py-3 px-4 flex items-center space-x-4">
                          <Link to={`/view/${stu.id}`}>
                            <FontAwesomeIcon icon={faEye} className="text-green-600 hover:text-green-700" />
                          </Link>
                          <Link to={`/edit/${stu.id}`}>
                            <FontAwesomeIcon icon={faPenToSquare} />
                          </Link>
                          <button onClick={()=>dispatch(deleteStudents(stu.id))} type="button" className="text-red-500 cursor-pointer">
                            <FontAwesomeIcon icon={faTrash} />
                          </button>

                        </td>
                      </tr>
                    ))
                    :
                    <div>
                      <p>No students</p>
                    </div>

                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default StudentList
