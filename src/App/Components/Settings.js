import { faAdd, faBars,  faCheck, faDashboard, faDatabase, faDollar, faEdit, faEnvelope,  faFile, faFilePdf, faGear, faMoneyCheck, faPeopleCarryBox, faPeopleGroup, faPowerOff, faPrint, faRemove, faSave, faSearch, faShare, faShareAlt,  faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Config from '../Config/Config';
import GlobalContext from '../Context/Api';

function Settings() {
    let navigate=useNavigate();
  const {setmsg, setFooter, setTitle, handleShow}=useContext(GlobalContext);
    




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
                    


                   
                <li className='list-group-item bg-dark text-light ' onClick={()=>{
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
                    <li className='list-group-item bg-dark text-light   ' onClick={()=>{
                        navigate('/students');
                    }}>
                        <FontAwesomeIcon icon={faPeopleCarryBox}></FontAwesomeIcon> <span>Students</span>
                    </li>
                    <li className='list-group-item bg-dark text-light  ' onClick={()=>{
                        navigate('/payments');
                    }}>
                        <FontAwesomeIcon icon={faDollar}></FontAwesomeIcon> <span>Payments</span>
                    </li>
                    <li className='list-group-item active   ' onClick={()=>{
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
                        <h1 className="page-head-line">SETTINGS</h1>
                      
                    </div>
                </div>
                
                <div class="panel-body">
                      
                <div className="card-body">
       

       <div class="row mb-3">
         <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Email Notifications</label>
         <div class="col-md-8 col-lg-9">
           <div class="form-check">
             <input class="form-check-input" type="checkbox" id="changesMade" checked/>
             <label class="form-check-label" for="changesMade">
               Changes made to your account
             </label>
           </div>
           <div class="form-check">
             <input class="form-check-input" type="checkbox" id="newProducts" checked/>
             <label class="form-check-label" for="newProducts">
               Information on new products and services
             </label>
           </div>
           <div class="form-check">
             <input class="form-check-input" type="checkbox" id="proOffers"/>
             <label class="form-check-label" for="proOffers">
               Marketing and promo offers
             </label>
           </div>
           <div class="form-check">
             <input class="form-check-input" type="checkbox" id="securityNotify" checked disabled/>
             <label class="form-check-label" for="securityNotify">
               Security alerts
             </label>
           </div>
         </div>
       </div>
       
       <div class="text-center">
         <button type="submit" class="btn btn-primary">Save Changes</button>
       </div>
       
       
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

export default Settings
