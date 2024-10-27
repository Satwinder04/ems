import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <>
    <div className=' h-screen px-10'>

    <Header/> 
    <TaskListNumbers/>
    <TaskList/>
    </div>
    </>
  )
}

export default EmployeeDashboard