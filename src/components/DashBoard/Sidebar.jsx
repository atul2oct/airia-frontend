import React from 'react'
import FilterComponent from './FilterComponent'
import SortingComponent from './SortingComponent'

const Sidebar = () => {
  return (
    <div className='flex min-w-[222px] flex-col justify-center gap-10 border-r-[1px] h-[calc(100vh-3.5rem)]  py-10'>
      <FilterComponent/>
      <SortingComponent/>
    </div>
  )
}

export default Sidebar