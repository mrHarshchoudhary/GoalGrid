import React, { useContext, useEffect, useState } from 'react'
import Login from './component/Auth/login'
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard'
import AdminDashboard from './component/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user,setUser]=useState(null)
  const [LoggedInUserData,setLoggedInUserData]=useState(null)
  const [userData,setUserData]=useContext(AuthContext)
useEffect(()=>{

  const loggedInUser=localStorage.getItem("loggedInUser")
  if(loggedInUser){
    const userData=JSON.parse(loggedInUser)
    setUser(userData.role)
    setLoggedInUserData(userData.data)
    
  }

}
,[])
  const handleLogin =(email,password)=>{
    if(email=='admin@example.com'&&password=='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      
      
    }
    else if(userData){
      const employee=userData.employees.find((e)=>email==e.email && e.password==password)
      if(employee){
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
    
      }
    }
    else{
      alert("invalid")
    }
  }

  // useEffect(()=>{
  //   // setLocalStorage()
  //   getLocalStorage()
  // },)

  return (
  <>
  {!user ?<Login handleLogin={handleLogin}/>:''}
  
  {user=='admin'? <AdminDashboard changeUser={setUser}/> : (user=='employee'? <EmployeeDashboard changeUser={setUser} data={LoggedInUserData}/>:null) }
 
  </>
  )
}

export default App
