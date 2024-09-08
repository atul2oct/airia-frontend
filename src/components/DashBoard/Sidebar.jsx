import React from 'react'
import FilterComponent from './FilterComponent'
import SortingComponent from './SortingComponent'

const Sidebar = () => {
  return (
    <div className='flex min-w-[222px] xs:flex-col xs:justify-center justify-evenly gap-10 border-r-[1px] xs:h-[calc(100vh-3.5rem)] py-10'>
      <FilterComponent/>
      <SortingComponent/>
    </div>
  )
}

export default Sidebar