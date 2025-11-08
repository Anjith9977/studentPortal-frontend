import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom' // ✅ should be 'react-router-dom', not 'react-router'

function Header() {
  const [listStatus, setListStatus] = useState(false)

  return (
    <header className="bg-slate-800 p-3 relative shadow-md">
      {/* Grid layout for logo, title, and menu icon */}
      <div className="grid grid-cols-3 items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img className="w-12 md:w-16" src="/logo.png" alt="logo" />
          <h2 className="ms-2 text-lg md:hidden text-white font-semibold">
            STUDENT PORTAL
          </h2>
        </div>

        {/* Center title (hidden on small screens) */}
        <div className="hidden md:flex items-center justify-center">
          <h2 className="text-white text-xl font-semibold">
            STUDENT MANAGEMENT PORTAL
          </h2>
        </div>

        {/* Desktop links / Mobile menu button */}
        <div className="flex items-center justify-end">
          {/* Desktop Links */}
          <ul className="hidden md:flex items-center justify-end font-medium">
            <Link to="/" className="mx-3 text-white no-underline hover:text-gray-300">
              Home
            </Link>
            <Link to="/add" className="mx-3 text-white no-underline hover:text-gray-300">
              Add Students
            </Link>
            <Link to="/students" className="mx-3 text-white no-underline hover:text-gray-300">
              Students
            </Link>
          </ul>


          {/* Mobile Menu Icon */}
          <button
            onClick={() => setListStatus(!listStatus)}
            className="md:hidden text-white text-2xl"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {listStatus && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-700 text-white font-medium flex flex-col items-start p-4 space-y-3 shadow-lg animate-slideDown z-50">
          <Link
            to="/"
            className="w-full hover:bg-slate-600 p-2 rounded transition"
            onClick={() => setListStatus(false)}
          >
            Home
          </Link>
          <Link
            to="/add"
            className="w-full hover:bg-slate-600 p-2 rounded transition"
            onClick={() => setListStatus(false)}
          >
            Add Students
          </Link>
          <Link
            to="/students"
            className="w-full hover:bg-slate-600 p-2 rounded transition"
            onClick={() => setListStatus(false)}
          >
            Students
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
