import React from 'react'
import ProductDashboard from './ProductDashboard'
import Sidebar from '../components/DashBoard/Sidebar'

const Dashboard = () => {
  return (
    <div className='xs:relative flex flex-col xs:flex-row xs:min-h-[calc(100vh-3.5rem)] '>
        <Sidebar/>
        <div className='xs:h-[calc(100vh-3.5rem)] xs:flex-1 overflow-auto'>
            <>
                <ProductDashboard/>
            </>
        </div>
    </div>
  )
}

export default Dashboard