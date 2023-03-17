import { faAdd, faArrowAltCircleLeft, faBars, faBolt, faCheck, faDashboard, faDatabase, faDollar, faEdit, faEnvelope, faExclamationCircle, faFile, faFilePdf, faGear, faMoneyCheck, faPeopleCarryBox, faPeopleGroup, faPowerOff, faPrint, faRemove, faSave, faSearch, faShare, faShareAlt, faTimeline, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useRef, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useReactToPrint } from 'react-to-print';
import axios from 'axios';
import Config from '../Config/Config';
import GlobalContext from '../Context/Api';
import pro from '../Assets/Images/pro.png';
import logo from '../Assets/Images/logo.png';




function StaffTable() {
    let navigate=useNavigate();

    const {setmsg, setFooter, setTitle, handleShow}=useContext(GlobalContext);

    const [form, setform] = useState(false);
const [enaira, setenaira]=useState('');


    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

    



  const [staff, setStaff]=useState([]);
    const [searchTeerm, setsearchTeerm] = useState('');
  const [designation, setdesignation] = useState('');
    const [firstName, setfirstName] = useState('');
    const [surname, setsurname] = useState('');
    const [otherNames, setotherNames] = useState('');
    const [gender, setgender] = useState('');
    const [dob, setdob] = useState('');
    const [marital, setmaritalStatus] = useState('');
    const [religion, setreligion] = useState('');
    const [phone, setphone] = useState('');
      const [email, setemail] = useState('');
      const [address, setaddress] = useState('');
      const [lga, setlga] = useState('');
      const [state, setstate] = useState('');
      const [accnumber, setaccnumber] = useState('');
      const [accname, setaccname] = useState('');
      const [bank, setbank] = useState('');
      const [image, setimage] = useState(pro);
      const [guarantor, setguarantorname] = useState('');
      const [guarantor_phone, setguarantorphone] = useState('');
      const [guarantor_image, setguarantorimage] = useState(pro);

      const postStaff=()=>{
  
axios.post(Config.backend.endPoint.root+'staff.php', {first_name:firstName, surname, other_names:otherNames, religion, accno:accnumber, accname:accname, bank,  email,  phone, address, lga, state, gender, image, dob, marital, guarantor,guarantor_image, guarantor_phone, staff:'staff',designation, enaira}, {
  headers:{
    "Content-Type":"multipart/form-data"
  }
}).then((response)=>{

  handleShow();
  setFooter(<></>)
  setTitle(<>
  Alert
   </>);
   
   if(response.data.toLowerCase().includes('success')){
          setmsg(<>
           <div className='alert alert-success'>
            <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> {response.data}
           </div>
                      </>
                    
                      );
                    setform(false)
                    }
                      else{
                        setmsg(<>
                          <div className='alert alert-danger'>
                           <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon> {response.data}
                          </div>
                                     </>
                                   
                                     );

                      }
           
})

      }
  


      useEffect(() => {
        axios.get(Config.backend.endPoint.root+'staff.php').then((response)=>{
          setStaff(response.data)
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
                    <li className='list-group-item  active  ' onClick={()=>{
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
                        <h1 className="page-head-line">STAFF</h1>
                      
                    </div>
                </div>
                
                <div className="panel-body">
                        <div className="col-sm-12">
                          <span className='badge bg-dark'>
                            <button className='btn text-success' onClick={()=>{
                                setform(!form)
                            }}> <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon> </button>

<button className='btn text-warning'  onClick={()=>{
   handleShow();
   setTitle(<>
    Share Data
    </>);
           setFooter(<>
            <button className='btn btn-success' >
            <FontAwesomeIcon icon={faShare}></FontAwesomeIcon>  Export
            </button>
            </>);
              setmsg(<>
                <ul className='list-group list-group-horizontal' style={{cursor:'pointer'}}>
             <li className='list-group-item active'>
              <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon> Excel
             </li>
             <li className='list-group-item'>
             <FontAwesomeIcon icon={faFilePdf}></FontAwesomeIcon> PDF
             </li>
             <li className='list-group-item'>
             <FontAwesomeIcon icon={faFile}></FontAwesomeIcon> Word
             </li>
                       </ul>
                       </>
                     
                       );
            

         

   
         
}}> <FontAwesomeIcon icon={faShareAlt}></FontAwesomeIcon> </button>

<button className='btn text-primary' onClick={handlePrint}> <FontAwesomeIcon icon={faPrint}></FontAwesomeIcon> </button>
<button className='btn text-light' onClick={()=>{
navigate('/staff')
}}> <FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon> </button>
</span>


                            </div>


                            <div className="card animated" style={form?{display:'block'}:{display:'none'}}>
            <div className="card-body">
              <h5 className="card-title">Enter New Staff</h5>

              <div className="text-center" style={{float:'right'}}>
                  <button type="submit" className="btn btn-outline-success" onClick={postStaff}> <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Save </button>
                  <button type="reset" className="btn btn-outline-danger" onClick={()=>{
                    setform(false)
                  }}> <FontAwesomeIcon icon={faTimes}> </FontAwesomeIcon> </button>
                </div><br/><br/>

              <div className="row g-3">
              <div className="col-md-4">
                  <input type="text" className="form-control" placeholder="First Name" value={firstName} onChange={(e)=>{
                    setfirstName(e.target.value)
                  }} />
                </div>
                <div className="col-md-4">
                  <input type="text" className="form-control" placeholder="Surname" value={surname} onChange={(e)=>{
                    setsurname(e.target.value)
                  }}/>
                </div>
                <div className="col-md-4">
                  <input type="text" className="form-control" placeholder="Other Names" value={otherNames} onChange={(e)=>{
                    setotherNames(e.target.value)
                  }}/>
                </div>
                <div className="col-md-6">
                    <label>
                        Gender
                    </label><br/>
                      <input style={{margin: '5px',}}  type="radio" className="" name='gender' value={'Male'} onChange={(e)=>{
                    setgender(e.target.value)
                  }} /> Male 
                  <input style={{margin: '5px',}} type="radio" className="" name='gender' value={'Female'} onChange={(e)=>{
                    setgender(e.target.value)
                  }}/> Female 
                </div>
                <div className="col-md-6">
                    <label>
                        Date of Birth
                    </label><br/>
                  <input type={'date'} className="form-control" placeholder="Date of Birth" value={dob} onChange={(e)=>{
                    setdob(e.target.value)
                  }}/>
                </div>
                <div className="col-md-6">

                <div className="col-md-6">
                    <label>
                        Marital Status
                    </label><br/>
                    <input style={{margin: '5px',}}  type="radio" className="" name='marital' value='Married' onChange={(e)=>{
                    setmaritalStatus(e.target.value)
                  }}/> Married 
                <input style={{margin: '5px',}} type="radio" className=""  value='Single' name='marital' onChange={(e)=>{
                    setmaritalStatus(e.target.value)
                  }}/> Single 
              </div>
                              </div>
                <div className="col-md-6">
                  <select  className="form-select" value={religion} onChange={(e)=>{
                    setreligion(e.target.value)
                  }} >
                    <option>
Religion
                    </option>
                    <option value={'Christianity'}>
                        Christianity
                    </option>
                    <option value={'Islam'}>
                        Islam
                    </option>
                  
                    </select>
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e)=>{
                    setemail(e.target.value)
                  }}/>
                </div>
                <div className="col-md-6">
                  <input type="tel" className="form-control" placeholder="Phone" value={phone} onChange={(e)=>{
                    setphone(e.target.value)
                  }}/>
                </div>
                <div className="col-12">
                  <input type="text" className="form-control" placeholder="Address" value={address} onChange={(e)=>{
                    setaddress(e.target.value)
                  }}/>
                </div>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="LGA of Origin" value={lga} onChange={(e)=>{
                    setlga(e.target.value)
                  }}/>
                </div>
                <div className="col-md-6">
                <input type="text" className="form-control" placeholder="State of Origin" value={state} onChange={(e)=>{
                    setstate(e.target.value)
                  }}/>
                </div>
                <div class="col-md-6">
    <label>
      <img src={image} alt='' style={{height:'80px'}} />
      Passport Photograph 
    </label>
                <input type="file" class="form-control"   onChange={(e)=>{
                 if(email===''){
                  setmsg(<>
                    <div className='alert alert-danger'>
                     <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon> Email field is empty, enter email before uploading Image
  
                    </div>
                               </>
                             
                               );
                  setTitle(<h3>Error</h3>);
                  setFooter(<></>);
                  handleShow();

                 }else{
                  const formData=new FormData();
                  formData.append('fileToUpload', e.target.files[0]);
                  formData.append('submit', 'submit');
                  
                  axios.post(Config.backend.endPoint.root+'upload.php?name='+email+'_profile_image.jpg', formData, {
                    headers:{
                      "Content-Type":"multipart/form-data"
                    }
                  }).then((response)=>{
                    setimage(response.data)
                  })
                  
                 }

                  
                  
                  }}/>
                </div>
                <div className="col-md-5">
                <input type="text" className="form-control" placeholder="Designation" value={designation} onChange={(e)=>{
                    setdesignation(e.target.value)
                  }}/>
                </div>


                  <div className="col-md-12">
                <input type="text" className="form-control" placeholder="Guarantor Name" value={guarantor} onChange={(e)=>{
                    setguarantorname(e.target.value)
                  }}/>
                </div>

                  <div className="col-md-6">
                <input type="tel" className="form-control" placeholder="Guarantor Phone No" value={guarantor_phone} onChange={(e)=>{
                    setguarantorphone(e.target.value)
                  }}/>
                </div>

                <div class="col-md-6">
                    <label>
                    <img src={guarantor_image} alt='' style={{height:'80px'}} />
                      Guarantor Passport </label>
                <input type="file" class="form-control"  onChange={(e)=>{
                 if(email===''){
                  setmsg(<>
                    <div className='alert alert-danger'>
                     <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon> Email field is empty, enter email before uploading Image
  
                    </div>
                               </>
                             
                               );
                  setTitle(<h3>Error</h3>);
                  setFooter(<></>);
                  handleShow();

                 }else{
                  const formData=new FormData();
                  formData.append('fileToUpload', e.target.files[0]);
                  formData.append('submit', 'submit')
                  axios.post(Config.backend.endPoint.root+'upload.php?name='+email+'_guarantor_image.jpg', formData, {
                    headers:{
                      "Content-Type":"multipart/form-data"
                    }
                  }).then((response)=>{
                    setguarantorimage(response.data)
                  })
                  
                 }

                  
                  
                  }}/>
                </div>


                <div className="col-4">
                  <input type="text" className="form-control" placeholder="eNaira ID" value={enaira} onChange={(e)=>{
                    setenaira(e.target.value)
                  }}/>
                </div>
<div className="col-4">
                  <input type="number" className="form-control" placeholder="Account Number" value={accnumber} onChange={(e)=>{
                    setaccnumber(e.target.value)
                  }}/>
                </div>

                <div className="col-md-4">
                  <input type="text" className="form-control" placeholder="Account Name" value={accname} onChange={(e)=>{
                    setaccname(e.target.value)
                  }}/>
                </div>
                <div className="col-md-4">
                <input type="text" className="form-control" placeholder="Bank" value={bank} onChange={(e)=>{
                    setbank(e.target.value)
                  }}/>
                </div>
               
                <div className="text-center">
                  <button type="submit" className="btn btn-primary" onClick={postStaff}> <FontAwesomeIcon icon={faSave}></FontAwesomeIcon> </button>
                  <button type="reset" className="btn btn-outline-danger" onClick={()=>{
                    setform(false)
                  }}> <FontAwesomeIcon icon={faTimes}> </FontAwesomeIcon> </button>
                </div>
              </div>

            </div>
          </div>
          <div id="dataTables-example_filter" className="col-sm-11" style={{display:'flex', justifyContent:'right'}}>
                            <div><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon><input type="search" className="form-control input-sm" placeholder='Search' aria-controls="dataTables-example" onChange={(e)=>{
                                setsearchTeerm(e.target.value)
                            }} /></div></div><br/><br/>
                            <div className="table-responsive">
                                <table ref={componentRef} className='table table-dark table-striped table-hover' style={{fontSize:'x-small'}}>
<thead className='bg-dark text-light'>
<th>
      Passport
    </th>
    <th>
        Staff ID
    </th>
    <th>
        Salary
    </th>
    <th>
        First Name
    </th>
    <th>
        Other Names
    </th>
    <th>
      Surname
    </th>
    <th>
      Designation
    </th>
    <th>
      Gender
    </th>
    <th>
      DOB
    </th>
    <th>
      Marital
    </th>
    <th>
      Religion
    </th>
    <th>
      Phone
    </th>
    <th>
      E-Mail
    </th>
    <th>
      Address
    </th>
    <th>
      Account No
    </th>
    <th>
      Bank
    </th>
    <th>
      eNaira
    </th>
    <th>
      Guarantor
    </th>
    <th>
      Guarantor Phone
    </th>
</thead>
<tbody>
{
                                            staff.filter((sta)=>{
                                                if(searchTeerm===''){
return sta
                                                }
                                           else if(sta.first_name.toLowerCase().includes(searchTeerm.toLowerCase()) || sta.surname.toLowerCase().includes(searchTeerm.toLowerCase()) || sta.other_names.toLowerCase().includes(searchTeerm.toLowerCase())|| sta.email.toLowerCase().includes(searchTeerm.toLowerCase()) || sta.phone.toLowerCase().includes(searchTeerm.toLowerCase())){
                                                    return sta
                                                }else{
                                                    return null
                                                }
                                            }).map((staf, key)=>{
                                                return    <tr>  
                                                <td>
      <img style={{height:'30px', width:'30px', borderRadius:'50%'}} alt={staf.first_name} src={staf.image}/>
    </td>
    <td>
      {staf.staff_id}
    </td>
    <td>
        {staf.salary}
    </td>
    <td>
     {staf.first_name}
    </td>
    <td>
      {staf.other_names}
    </td>
    <td>
      {staf.surname}
    </td>
    <td>
      {staf.designation}
    </td>
    <td>
      {staf.gender}
    </td>
    <td>
   {staf.dob}
    </td>
    <td>
      {staf.marital}
    </td>
    <td>
      {staf.religion}
    </td>
    <td>
      {staf.phone}
    </td>
    <td>
  {staf.email}
    </td>
    <td>
      {staf.address}
    </td>
    <td>
   {staf.accno}
    </td>
    <td>
      {staf.bank}
    </td>
    <td>
      {staf.enaira}
    </td>
    <td>
      {staf.guarantor_name}
    </td>
    <td>
    {staf.guarantor_phone}
    </td>
</tr>
                                                
                                              
                                            })
                                        }
  </tbody>
                                </table>
                         
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

export default StaffTable
