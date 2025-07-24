import React from 'react'
import { FaCog, FaShoppingCart, FaTachometerAlt, FaUsers } from 'react-icons/fa'
import { FaBox } from 'react-icons/fa6'

const Sidebar = () => {

    const menuItems = [
        { 
            label: 'Dashboard', 
            icon: <FaTachometerAlt /> 
        },
        { 
            label: 'Orders', 
            icon: <FaShoppingCart /> 
        },
        { 
            label: 'Users', 
            icon: <FaUsers /> 
        },
        { 
            label: 'Products', 
            icon: <FaBox /> 
        },
        { 
            label: 'Settings', 
            icon: <FaCog /> 
        },
    ];

    return (
        <div className='bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white'>
            <h1 className='text-2xl font-bold hidden md:block mt-4 text-center italic'>NovaDash</h1>

            <ul className='flex flex-col mt-5 text-xl'>
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                        <div className='text-xl'>{item.icon}</div>
                        <span className='hidden md:inline'>{item.label}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar