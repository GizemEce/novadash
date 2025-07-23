import React from 'react'
import { FaTachometerAlt } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className='bg-gray-100 text-gray-900 h-screen'>
        <h1>NovaDash</h1>
        <ul>
            <li>
                <FaTachometerAlt/>
                <span>Dashboard</span>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar