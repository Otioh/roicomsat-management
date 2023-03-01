import { faBars,  faDashboard, faDollar, faEnvelope,  faGear, faMoneyBill, faMoneyCheck, faPeopleCarryBox, faPeopleGroup, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Config from '../Config/Config';
import {sum} from '../flamejs';

function Dashboard() {
    let navigate=useNavigate()
    const [students, setStudents]=useState([]);
    const [staff, setStaff]=useState([]);
    const [payments, setpayments] = useState([{amount:0}, {amount:0}]);
    useEffect(() => {
        axios.get(Config.backend.endPoint.root+'students.php').then((response)=>{
          setStudents(response.data)
        })

        axios.get(Config.backend.endPoint.root+'staff.php').then((response)=>{
            setStaff(response.data)
          })
        });

        useEffect(() => {
            axios.get(Config.backend.endPoint.root+'payments.php').then((response)=>{
             
                setpayments(response.data)
          
            
            })
            });
            
        
  return (
    <div>
          <div id="wrapper">
        <nav className="navbar navbar-default navbar-cls-top " role="navigation" style={{marginBottom: 0}}>
           
             
                <i className="navbar-brand" >Roicomsat</i>
    

            <div className="header-right">

                <a href="message-task.html" className="btn btn-info" title="New Message"><b> </b> <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a>
                <a href="message-task.html" className="btn btn-primary" title="New Task"><b> </b>  <FontAwesomeIcon icon={faBars}></FontAwesomeIcon></a>
                <a href="login.html" className="btn btn-danger" title="Logout">  <FontAwesomeIcon icon={faPowerOff}></FontAwesomeIcon> </a>

            </div>
        </nav>
        
        <nav className="navbar-default navbar-side" role="navigation">
            <div className="sidebar-collapse">
                <ul className="nav list-group clickable" id="main-menu">
                    


                    <li className='list-group-item active ' onClick={()=>{
                        navigate('/dashboard');
                    }}>
                        <FontAwesomeIcon icon={faDashboard}></FontAwesomeIcon> <span>Dashboard</span>
                    </li>
                    <li className='list-group-item bg-dark text-light  ' onClick={()=>{
                        navigate('/staff');
                    }}>
                    <FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon> <span>Staff</span>
                    </li>
                    <li className='list-group-item bg-dark text-light  'onClick={()=>{
                        navigate('/payroll');
                    }}>
                        <FontAwesomeIcon icon={faMoneyCheck}></FontAwesomeIcon> <span>Staff Payroll</span>
                    </li>
                    <li className='list-group-item bg-dark text-light  ' onClick={()=>{
                        navigate('/students');
                    }}>
                        <FontAwesomeIcon icon={faPeopleCarryBox}></FontAwesomeIcon> <span>Students</span>
                    </li>
                    <li className='list-group-item bg-dark text-light  ' onClick={()=>{
                        navigate('/payments');
                    }}>
                        <FontAwesomeIcon icon={faDollar}></FontAwesomeIcon> <span>Payments</span>
                    </li>
                    <li className='list-group-item bg-dark text-light  ' onClick={()=>{
                        navigate('/settings');
                    }}>
                        <FontAwesomeIcon icon={faGear}></FontAwesomeIcon> <span>Settings</span>
                    </li>
                    <li className='list-group-item bg-dark text-light  'onClick={()=>{
                        navigate('/login');
                    }}>
                        <FontAwesomeIcon icon={faPowerOff}></FontAwesomeIcon> <span>Logout</span>
                    </li>
                  
                   
                </ul>

            </div>

        </nav>
        
        <div id="page-wrapper">
            <div id="page-inner">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="page-head-line">DASHBOARD</h1>
                      
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-4">
<div className='card padding '>


                        <div className="main-box mb-red flex center " style={{display:'flex', justifyContent:'center', alignItems:'center'}} >
                            <a href="/#/staff">
                              <span style={{fontSize:'xxx-large'}}> <FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon> { staff.length}</span>
                                <h5>Staff Enrolled</h5>
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className='card padding '>
                        <div className="main-box mb-dull flex center" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <a href="/#/students">
                            <span style={{fontSize:'xxx-large'}}> <FontAwesomeIcon icon={faPeopleCarryBox}></FontAwesomeIcon> {students.length}</span>
                                <h5>Students</h5>
                            </a>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                        <div className="main-box mb-pink" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <a href="/#/payments">
                            <span style={{fontSize:'xxx-large'}}> <FontAwesomeIcon icon={faDollar}></FontAwesomeIcon> {
                            sum([...payments, (i)=>payments[i].amount]).sum  
                            
                            }
                            
                            
                            </span>
                              
                                <h5>Revenue</h5>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div className='card padding '>
                        <div className="main-box mb-dull flex center" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <a href="/#/payroll">
                            <span style={{fontSize:'xxx-large'}}> <FontAwesomeIcon icon={faMoneyBill}></FontAwesomeIcon> {
                                   sum([...staff, (i)=>staff[i].salary]).sum  
                            }</span>
                                <h5>Monthly Salary Budget</h5>
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
                

                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-12">

                     

                            </div>

                        </div>
                        
                        <hr />

                        <div className="panel panel-default">

                            <div id="carousel-example" className="carousel slide" data-ride="carousel" style={{border: '5px solid #000'}}>

                                <div className="carousel-inner">
                                    <div className="item active">

                                        <img src="assets/img/slideshow/1.jpg" alt="" />

                                    </div>
                                    <div className="item">
                                        <img src="assets/img/slideshow/2.jpg" alt="" />

                                    </div>
                                    <div className="item">
                                        <img src="assets/img/slideshow/3.jpg" alt="" />

                                    </div>
                                </div>
                                
                                <ol className="carousel-indicators">
                                    <li data-target="#carousel-example" data-slide-to="0" className="active"></li>
                                    <li data-target="#carousel-example" data-slide-to="1"></li>
                                    <li data-target="#carousel-example" data-slide-to="2"></li>
                                </ol>
                                
                                <a className="left carousel-control" href="#carousel-example" data-slide="prev">
                                    <span className="glyphicon glyphicon-chevron-left"></span>
                                </a>
                                <a className="right carousel-control" href="#carousel-example" data-slide="next">
                                    <span className="glyphicon glyphicon-chevron-right"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4">

         


                    </div>
                    
                </div>
                


            
                
                <hr />
     
                <hr />
              

            </div>
            
        </div>
        
    </div>
    

    <div id="footer-sec">
        &copy; 2023 Roicomsat Management System | Design By : <a href="http://www.roicomsat.com/" rel='noreferrer' target="_blank">Roicomsat</a>
    </div>

    </div>
  )
}

export default Dashboard
