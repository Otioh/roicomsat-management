import { faAdd, faArrowRight, faBars,  faCheck, faDashboard, faDatabase, faDollar, faEdit, faEnvelope,  faFile, faFilePdf, faGear, faMoneyCheck, faPeopleCarryBox, faPeopleGroup, faPowerOff, faPrint, faRemove, faSave, faSearch, faShare, faShareAlt,  faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Config from '../Config/Config';
import GlobalContext from '../Context/Api';

function Payments() {
    let navigate=useNavigate();
  const {setmsg, setFooter, setTitle, handleShow, handleClose}=useContext(GlobalContext);
  
const [payer, setpayer] = useState('');
const [amount, setamount] = useState(0);
const [description, setdescription] = useState('');
  const [payments, setpayments]=useState([]);
    const [searchTeerm, setsearchTeerm] = useState('');
  
    const [programmes, setprogrammes] = useState([]);
  useEffect(() => {
  axios.get(Config.backend.endPoint.root+'payments.php').then((response)=>{
   
      setpayments(response.data)

 
  })
  axios.get(Config.backend.endPoint.root+'programmes.php').then((response)=>{
    setprogrammes(response.data)
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
                    <li className='list-group-item  active  ' onClick={()=>{
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
                        <h1 className="page-head-line">Payments</h1>
                      
                    </div>
                </div>
                
                <div class="panel-body">
                        <div class="col-sm-12">
                        <div className="col-lg-12">
                        <div class="col-sm-12">
                          <span className='badge bg-light'>
                            <button className='btn text-dark' onClick={()=>{
                             setTitle(<h3>Make Payment</h3>);
                             setmsg(<>
                             <div className='row'>
<div className='col-sm-6'>
<input className='form-control' placeholder='Payer Reg No' onChange={(e)=>{
setpayer(e.target.value)
}} />
</div>
<div className='col-sm-6'>
<select class="form-select" onChange={(e)=>{
                    setdescription("Payment for "+e.target.value.split('---')[0]+ "training");
                    setamount(e.target.value.split('---')[2]);
                 
                  }}>
                    <option>
Select Programme
                    </option>
                   
                    {
                      programmes.map((pro)=>{
                        return  <option value={`${pro.title} --- ${pro.id} --- ${pro.fee}`}>
                       {pro.title} --- {pro.id}
                      </option>
                      })
                    }
                   
                    </select>
</div>

                             </div>
                             
                             </>)
                            setFooter(<>
                            <button className='btn btn-primary' onClick={()=>{
                              handleClose();
                              setmsg(<>
                              <div className='row'>
                                <div className='col-sm-2'>

                                </div>
                                <div className='col-sm-8'>
                                  {
                                    description
                                  }
                                  <h4>
                                    {
                                      amount
                                    }
                                  </h4>

</div>
<div className='col-sm-2'>

</div>
                              </div>
                              </>);

                              setFooter(<>
                              <button className='btn btn-primary' id='pay'  onClick={()=>{
                                document.getElementById('pay').disabled=true;
                                axios.post(Config.backend.endPoint.root+'payments.php', {payer, description, amount, status:'Approved', tran_id:'T'+parseInt(Math.random(0,1)*200000), pay:'pay'}, {
                                  headers:{
                                    "Content-Type":"multipart/form-data"
                                  }
                                }).then((response)=>{
                                  console.log(response.data)
                                  if(response.data.toLowerCase().includes('success')){
                                    setTitle(<>
                                    <h3>Completed</h3> 
                                    </>);
                                    setmsg(<>
                                    <div className='alert alert-success'>{
                                  response.data
                                  }</div>
                                    </>);
                                    setFooter(<></>);
                                  }else{
                                    setTitle(<>
                                      <h3>Error</h3>
                                      </>);
                                      setmsg(<>
                                      <div className='alert alert-danger'>{
                                    response.data
                                    }</div>
                                      </>);
                                      setFooter(<></>)
                                  }
                                })
                              }}>
                                Pay NGN{amount}
                              </button>
                              </>);
                              handleShow()
                            }}>Continue <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                            </>);
                            handleShow();
                            }}> <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon> </button>

<button className='btn text-danger' > <FontAwesomeIcon icon={faShareAlt}></FontAwesomeIcon> </button>


<button className='btn text-primary' onClick={()=>{
                              
                            }}> <FontAwesomeIcon icon={faPrint}></FontAwesomeIcon> </button>
</span>


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
                  <h5 className="card-title">Payments <span>| History</span></h5>

                  <ul className='list-group'>
                  

{
  payments.map((pay, key)=>{
    return   <li key={key} className='list-group-item d-flex justify-content-between align-items-center'>
    <span>{pay.transaction_id}</span> <span>{pay.payer}</span> <span>{pay.description}</span> <span>{pay.amount}</span>  <button className='btn text-primary'><FontAwesomeIcon icon={faPrint}></FontAwesomeIcon> Receipt</button>
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

export default Payments