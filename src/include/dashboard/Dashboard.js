import React from 'react'
import DashHeader from '../dash-header/DashHeader'
import Sidenav from '../sidenav/Sidenav'
import { Route, Routes } from 'react-router-dom'
import AddEmployee from '../../modules/admin/add-employee/AddEmployee'
import ViewEmployee from '../../modules/admin/view-employee/ViewEmployee'

function Dashboard() {
  return (
    <div>
         <DashHeader/>
    <div className='row w-100 m-0 '>
    
   
    <div className='col col-3 '>
        <Sidenav/>
    </div>
       <div className='col col-9 '>
        <Routes >
          <Route path="Add-Employee"  element={<AddEmployee/>} />
          <Route path="view-Employee"  element={<ViewEmployee/>}/>
        </Routes>
       </div>
    </div>
    </div>
  )
}

export default Dashboard