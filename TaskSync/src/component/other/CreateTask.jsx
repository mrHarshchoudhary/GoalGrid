import React from 'react'
import  { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = (e) => {
  const [userData,setUserData]=useContext(AuthContext)
  const [taskTitle,setTaskTitle]=useState('')
  const [taskDescription,setTaskDescription]=useState('')
  const [taskDate,setTaskDate]=useState('')
  const [category,setCategory]=useState('')
  const [asignTo,setAsignTo]=useState('')
  const [newtask ,setNewTask]=useState({})
  const submithanlder = (e) => {
    e.preventDefault();
  
    setNewTask({
      taskTitle,
      taskDate,
      taskDescription,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });
  
    if (!userData || !userData.employees) {
      console.error("User data or employees not found!");
      return;
    }
  
    // Access employees array from userData
    const employees = userData.employees;
  
    const updatedEmployees = employees.map((employee) => {
      if (asignTo === employee.firstName) {
        return {
          ...employee,
          tasks: [...employee.tasks, newtask],
          taskNumbers: {
            ...employee.taskNumbers,
            newTask: employee.taskNumbers.newTask + 1,
          },
        };
      }
      return employee;
    });
  
    // Update the context with the modified employees array
    setUserData({ ...userData, employees: updatedEmployees });
  
    console.log(updatedEmployees);
  
    setTaskTitle("");
    setAsignTo("");
    setCategory("");
    setTaskDate("");
    setTaskDescription("");
  };
  
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
    <form onSubmit={(e)=>{
      submithanlder(e)
    }}
    className='flex flex-wrap w-full  items-start justify-between' >
      <div className='w-1/2'>
      <div> 
     <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
     <input  value={taskTitle} 
     onChange={(e)=>{
      setTaskTitle(e.target.value)
     }}
      className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
     </div>
      <div>
      <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
      <input value={taskDate} 
     onChange={(e)=>{
      setTaskDate(e.target.value)
     }}
       className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
      </div>
      <div>
      <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
      <input value={asignTo} 
     onChange={(e)=>{
      setAsignTo(e.target.value)
     }}
        
       className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
      </div>
     <div>
     <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
     <input  value={category} 
     onChange={(e)=>{
      setCategory(e.target.value)
     }}
      className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design,dev, etc' />
     </div>
      </div>
     
      <div className='w-2/5 flex flex-col items-start'>
      <h3 >Description</h3>
      <textarea value={taskDescription} 
     onChange={(e)=>{
      setTaskDescription(e.target.value)
     }}
       className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name="" id="" cols="30" rows="10"></textarea>
      <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
      </div>
      
     
    </form>
  </div>
  )
}

export default CreateTask
