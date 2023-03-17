import React from 'react'
import Dashboard from './Dashboard'
import Login from './Login';
import {

  RouterProvider,
  createHashRouter
} from "react-router-dom";
import Staff from './Staff';
import Students from './Students';
import Payments from './Payments';
import Payroll from './Payroll';

import Alert from './Alert';
import { ContextProvider } from '../Context/Api';
import Settings from './Settings';
import StudentUpdate from './StudentUpdate';
import StudentLogin from './StudentLogin';
import StudentWait from './StudentWait';
import StaffTable from './StaffTable';
import StudentTable from './StudentTable';
import Attendance from './Attendance';


function Index() {

  const router=createHashRouter(
    [
  
      {path:'/', element:<Login/>},
      {path:'/login', element:<Login/>},
      {path:'/dashboard', element:<Dashboard/>},
      {path:'/staff', element:<Staff/>},
      {path:'/students', element:<Students/>},
      {path:'/payments', element:<Payments/>},
      {path:'/payroll', element:<Payroll/>},
      {path:'/settings', element:<Settings/>},
      {path:'/updatestudent', element:<StudentUpdate/>},
      {path:'/studentlogin', element:<StudentLogin/>},
      {path:'/wait', element:<StudentWait/>},
      {path:'/stafftable', element:<StaffTable/>},
      {path:'/studenttable', element:<StudentTable/>},
      {path:'/attendance', element:<Attendance/>},
     
      
      
    
    ]
    
    )
  
  
  return (
    <>
     <ContextProvider>
<RouterProvider router={router}/>
    <Alert />
    </ContextProvider>
    </>
  )
}

export default Index
