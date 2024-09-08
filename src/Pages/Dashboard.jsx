import React from 'react'
import ProductDashboard from './ProductDashboard'
import Sidebar from '../components/DashBoard/Sidebar'

const Dashboard = () => {
  return (
    <div className='relative flex min-h-[calc(100vh-3.5rem)] '>
        <Sidebar/>
        <div className='h-[calc(100vh-3.5rem)] flex-1 overflow-auto'>
            <>
                <ProductDashboard/>
            </>
        </div>
    </div>
  )
}

export default Dashboard