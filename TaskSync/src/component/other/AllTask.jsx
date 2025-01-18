import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData,setUserData]=useContext(AuthContext)
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded  '>
      <div className='bg-red-400 mb-2  py-2 px-4 flex justify-between'>
        <h2 className='w-1/5 text-lg font-medium '>Employee Name</h2>
        <h3 className='w-1/5 text-lg font-medium '>New Task</h3>
        <h5 className='w-1/5 text-lg font-medium '>Acive Task</h5>
        <h5 className='w-1/5 text-lg font-medium '>Completed</h5>
        <h5 className='w-1/5 text-lg font-medium '>Failed</h5>
      </div>
      <div className=''>
      {userData.employees.map(function(elem,idx){
        return   <div key={idx} className='border-2 mb-2  py-2 px-4 flex justify-between'>
        <h2 className='text-lg font-medium w-1/5 bg-white-600'>{elem.firstName}</h2>
        <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskNumbers.active}</h3>
        <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskNumbers.newTask}</h5>
        <h5 className='text-lg font-medium w-1/5 text-white-600'>{elem.taskNumbers.completed}</h5>
        <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskNumbers.failed}</h5>
      </div>
    
      })}
      </div>
      
      

    </div>
  )
}

export default AllTask
