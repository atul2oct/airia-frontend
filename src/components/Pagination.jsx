import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Pagination = () => {
    const { currentPage, totalPages, handlePageChange } = useContext(AppContext);
  return (
    <div className='w-full flex justify-center items-center border-2
    fixed bottom-0 bg-white py-2'>
        <div className='flex justify-between w-11/12 max-w-[670px]'>
            <div className='flex gap-x-4'>
                {   currentPage > 1 &&
                    (<button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className='rounded-md border-2 py-1 px-4'
                    >
                        Previous
                    </button>)
                }
                {   currentPage < totalPages &&
                    (<button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}
                        className='rounded-md border-2 py-1 px-4'
                    >
                        Next
                    </button>)
                }
            </div>
            <p className='font-bold text-sm'>
                Page {currentPage} of {totalPages}
            </p>
        </div>
    </div>
  )
}

export default Pagination