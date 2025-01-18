import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  
  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5  mt-10'>
   {data.tasks.map((elem, index) => {
        if (elem.active) {
          return <AcceptTask key={`accept-${index}`} data={elem}/>;
        }
        if (elem.newTask) {
          return <NewTask key={`new-${index}`} data={elem}/>;
        }
        if (elem.completed) {
          return <CompleteTask key={`completed-${index}`} data={elem}/>;
        }
        if (elem.failed) {
          return <FailedTask key={`failed-${index}`} data={elem}/>;
        }
   })}
    
    
     
    
     
      
    </div>
  )
}

export default TaskList
