import React from 'react'
import DashHeader from '../dash-header/DashHeader'
import Sidenav from '../sidenav/Sidenav'
import { Route, Routes } from 'react-router-dom'
import AddEmployee from '../../modules/admin/add-employee/AddEmployee'
import ViewEmployee from '../../modules/admin/view-employee/ViewEmployee'
import Billing from '../../modules/centerhead/billing/Billing'
import Delivery from '../../modules/centerhead/delivery/Delivery'
import Inventory from '../../modules/centerhead/inventory/Inventory'
import Invoice from '../../modules/centerhead/invoice/Invoice'
import Order from '../../modules/centerhead/order/Order'
import Payment from '../../modules/centerhead/payment/Payment'
import Purchase from '../../modules/centerhead/purchase/Purchase'
import AddCow from '../../modules/farmer/cow/AddCow'
import ViewCow from '../../modules/farmer/cow/ViewCow'
import AddBuffalo from '../../modules/farmer/buffalo/AddBuffalo'
import ViewBuffalo from '../../modules/farmer/buffalo/ViewBuffalo'
import AddFarmer from '../../modules/centerhead/addfarmer/AddFarmer'

function Dashboard() {
  return (
    <div>
         <DashHeader/>
    <div className='row w-100 m-0 '>
    
   
    <div className='col col-3 '>
        <Sidenav/>
    </div>
       <div className='col col-9 '>
        <Routes >< Route path="Add-Farmer" element={<AddFarmer/>}/>
          <Route path="Add-Employee"  element={<AddEmployee/>} />
          <Route path="view-Employee"  element={<ViewEmployee/>}/>
          <Route path="billing"  element={<Billing/>}/>
          <Route path="delivery"  element={<Delivery/>}/>
          <Route path="inventory"  element={<Inventory/>}/>
          <Route path="invoice"  element={<Invoice/>}/>
          <Route path="view-Employee"  element={<ViewEmployee/>}/>
          <Route path="order"  element={<Order/>}/>
          <Route path="payment"  element={<Payment/>}/>
          <Route path="purchase"  element={<Purchase/>}/>
          <Route path="add-cow"  element={<AddCow/>}/>
          <Route path="view-cow"  element={<ViewCow/>}/>
          <Route path="add-buffalo"  element={<AddBuffalo/>}/>
          <Route path="view-buffalo"  element={<ViewBuffalo/>}/>
        </Routes>
       </div>
    </div>
    </div>
  )
}

export default Dashboard