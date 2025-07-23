import React from 'react'
import Card from './Card'
import { FaBox, FaShoppingCart, FaCog, FaUsers } from 'react-icons/fa'

const Dashboard = () => {

     const dashboardItems = [
            { 
                title: 'Orders', 
                icon: <FaShoppingCart />,
                value: "140"
            },
            { 
                title: 'Users', 
                icon: <FaUsers />,
                value: "30"

            },
            { 
                title: 'Products', 
                icon: <FaBox /> ,
                value: "120"
            },
            { 
                title: 'Settings', 
                icon: <FaCog /> ,
                value: "11"
            },
        ];

    return (
        <div className="grow p-8">
            <h2 className='text-2xl mb-4'>Dashboard</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
                {dashboardItems.map((item, index) => (
                    <Card 
                        key={index}
                        title={item.title}
                        icon={item.icon}
                        value={item.value}
                    />
                ))}
            </div>
        </div>
    )
}

export default Dashboard