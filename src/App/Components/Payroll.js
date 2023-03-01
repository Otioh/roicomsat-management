import {  faBars,   faCheck,   faDashboard,  faDollar,  faEdit,  faEnvelope,    faGear, faMoneyCheck, faPeopleCarryBox, faPeopleGroup, faPowerOff, faRemove, faSave, faSearch, faTimes,   } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Config from '../Config/Config';
import GlobalContext from '../Context/Api';
import pro from '../Assets/Images/pro.png';
import logo from '../Assets/Images/logo.png';
import { useReactToPrint } from 'react-to-print';
import {sum} from '../flamejs';

function Payroll() {
    let navigate=useNavigate();
    const [staff, setStaff]=useState([]);
    const [searchTeerm, setsearchTeerm] = useState('');

    const {setmsg, setFooter, setTitle, handleShow}=useContext(GlobalContext);
const [salary, setsalary] = useState(0);
    useEffect(() => {
        axios.get(Config.backend.endPoint.root+'staff.php').then((response)=>{
          setStaff(response.data)
        })
        });

        const componentRef = useRef();
        const handlePrint = useReactToPrint({
          content: () => componentRef.current,
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
                    <li className='list-group-item active  'onClick={()=>{
                        navigate('/payroll');
                    }}>
                        <FontAwesomeIcon icon={faMoneyCheck}></FontAwesomeIcon> <span>Staff Payroll</span>
                    </li>
                    <li className='list-group-item bg-dark text-light   ' onClick={()=>{
                        navigate('/students');
                    }}>
                        <FontAwesomeIcon icon={faPeopleCarryBox}></FontAwesomeIcon> <span>Students</span>
                    </li>
                    <li className='list-group-item  bg-dark text-light  ' onClick={()=>{
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
                        <h1 className="page-head-line">Payroll</h1>
                      
                    </div>
                </div>
                
                <div class="panel-body">
                        <div class="col-sm-12">
                        <div className="col-lg-12">
                        <div class="col-sm-12">
                         

                            </div>
          <div className="row">

         
                <div className="col-12">
              <div className=" recent-sales overflow-auto">

                <div className="filter">
                  <a className="icon" href="/#/payments" data-bs-toggle="dropdown"><FontAwesomeIcon icon={faMoneyCheck} className="bi bi-three-dots"></FontAwesomeIcon></a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a className="dropdown-item" href="/#/login">Today</a></li>
                    <li><a className="dropdown-item" href="/#/login">This Month</a></li>
                    <li><a className="dropdown-item" href="/#/login">This Year</a></li>
                  </ul>
                </div>

                <div className="card-body">
                  <h5 className="card-title">Staff <span>| Payroll</span></h5>
                  <div id="dataTables-example_filter" className="col-sm-11" style={{display:'flex', justifyContent:'right'}}>
                            <div><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon><input type="search" className="form-control input-sm" placeholder='Search' aria-controls="dataTables-example" onChange={(e)=>{
                                setsearchTeerm(e.target.value)
                            }} /></div></div><br/><br/>

<div className="table-responsive">
                            <ul className='list-group' style={{fontSize:'small', padding:'10px'}} ref={componentRef}>
                    
                    <h4 className=' text-danger'> <img alt='logo' src={logo} style={{height:'40px', width:'50px'}} /> Roicomsat  Staff {new Date().getFullYear()}</h4>
                    <h4 className='badge bg-dark text-light'>Staff Management System</h4>
                    <h2 style={{float:'right'}}>Monthly Budget: NGN {sum([...staff, (i)=>staff[i].salary]).sum} </h2>
                    
                                     {
                                            staff.filter((sta)=>{
                                                if(searchTeerm===''){
return sta
                                                }
                                           else if(sta.first_name.toLowerCase().includes(searchTeerm.toLowerCase()) || sta.surname.toLowerCase().includes(searchTeerm.toLowerCase()) || sta.other_names.toLowerCase().includes(searchTeerm.toLowerCase())|| sta.email.toLowerCase().includes(searchTeerm.toLowerCase()) || sta.phone.toLowerCase().includes(searchTeerm.toLowerCase()) || sta.accname.toLowerCase().includes(searchTeerm.toLowerCase()) || sta.accno.toLowerCase().includes(searchTeerm.toLowerCase())){
                                                    return sta
                                                }else{
                                                    return null
                                                }
                                            }).map((staf, key)=>{
                                                return          <li key={key} className='list-group-item d-flex justify-content-between align-items-center' style={{marginBottom:'25px'}}>
                                                <span><img style={{height:'70px', borderRadius:'50%'}} alt={staf.first_name} src={staf.image}/></span> <span>{staf.staff_id}</span> <span>{staf.accname} </span>   <span>{staf.accno}</span> <span>{staf.bank}</span> <span> NGN <input type={'number'}  placeholder={`${staf.salary}`} style={{border:'none', padding:'5px'}} onChange={(e)=>setsalary(e.target.value)} /> <button className='btn btn-outline-primary' onClick={()=>{
                                                  axios.get(Config.backend.endPoint.root+'staff.php?email='+staf.email+'&&salary='+salary).then((response)=>{
                                                    console.log(response.data)
                                                    if(response.data.toLowerCase().includes('success')){
                                                      handleShow();
          setFooter(<></>)
          setTitle(<>
  Alert
   </>);   
   setmsg(<>
    <div className='alert alert-success'>
     <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> {response.data}
    </div>
               </>
             
               );
                                                    }else{
                                                      handleShow();
                                                      setFooter(<></>)
                                                      setTitle(<>
                                              Alert
                                               </>);   
                                               setmsg(<>
                                                <div className='alert alert-danger'>
                                                 <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon> {response.data}
                                                </div>
                                                           </>
                                                           );

                                                    }
                                                  })
                                                }}>
                                                <FontAwesomeIcon icon={faSave}></FontAwesomeIcon>
                                              </button>
                               </span>
                                                                    </li>
                                            })
                                        }
                                       
                                 </ul>
                            </div>
                            

                </div>

              </div>
            </div>
         
          </div>
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

export default Payroll