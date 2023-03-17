import { faAdd, faBars,  faCheck, faDashboard, faDatabase, faDollar, faEdit, faEnvelope,  faFile, faFilePdf, faGear, faMoneyCheck, faPeopleCarryBox, faPeopleGroup, faPowerOff, faPrint, faRemove, faSave, faSearch, faShare, faShareAlt,  faTimes, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import GlobalContext from '../Context/Api';
import { useReactToPrint } from 'react-to-print';
import pro from '../Assets/Images/pro.png';
import logo from '../Assets/Images/logo.png';


function StudentTable() {
    let navigate=useNavigate();
  const {setmsg, setFooter, setTitle, handleShow}=useContext(GlobalContext);
    const [form, setform] = useState(false);


    const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

const [programmes, setprogrammes] = useState([]);
  const [students, setStudents]=useState([]);
    const [searchTeerm, setsearchTeerm] = useState('');
  const [programme, setprogramme]=useState('');
  const [pro_id, setpro_id]=useState('');
    const [firstName, setfirstName] = useState('');
    const [surname, setsurname] = useState('');
    const [otherNames, setotherNames] = useState('');
    const [gender, setgender] = useState('');
    const [dob, setdob] = useState('');
    const [marital, setmaritalStatus] = useState('');
    const [phone, setphone] = useState('');
      const [email, setemail] = useState('');
      const [address, setaddress] = useState('');
      const [lga, setlga] = useState('');
      const [state, setstate] = useState('');
      const [image, setimage] = useState(pro);
      const [guarantor, setguarantorname] = useState('');
      const [guarantor_phone, setguarantorphone] = useState('');
      const [guarantor_image, setguarantorimage] = useState(pro);
      const [guarantor_address, setguarantor_address]=useState('');
      const [date_admitted, setdate_admitted] = useState('');
      const [graduation, setgraduation] = useState('');
  
  useEffect(() => {
  axios.get('https://verifyme.com.ng/backend/students.php').then((response)=>{
    setStudents(response.data)

  })
  axios.get('https://verifyme.com.ng/backend/programmes.php ').then((response)=>{
    setprogrammes(response.data)
  })
  });


const postStudent=()=>{

  
axios.post('https://verifyme.com.ng/backend/students.php', {student:'student', first_name:firstName, surname, other_names:otherNames, email, phone, programme,image, pro_id, dob, gender, marital, address, lga, state, guarantor, guarantor_image, guarantor_phone, guarantor_address, date_admitted, graduation}, {
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
                    <li className='list-group-item  active  ' onClick={()=>{
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
                        <h1 className="page-head-line">STUDENTS</h1>
                      
                    </div>
                </div>
                
                <div class="panel-body">
                        <div class="col-sm-12">
                          <span className='badge bg-danger'>
                          
                            <button className='btn text-light' onClick={()=>{
                                setform(!form)
                            }}> <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon> </button>

<button className='btn text-warning' onClick={()=>{
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
            

         

   
         
}}> <FontAwesomeIcon icon={faShareAlt} ></FontAwesomeIcon> </button>


<button className='btn text-dark'onClick={handlePrint}> <FontAwesomeIcon icon={faPrint}></FontAwesomeIcon> </button>
<button className='btn text-light' onClick={()=>{
navigate('/students')
}}> <FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon> Back</button>

</span>
                            </div>


                            <div class="card animated" style={form?{display:'block'}:{display:'none'}}>
            <div class="card-body">
              <h5 class="card-title">Enter New Student</h5>

              <div class="text-center" style={{float:'right'}}>
                  <button type="submit" class="btn btn-outline-success" onClick={postStudent} > <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Save </button>
                  <button type="reset" class="btn btn-outline-danger" onClick={()=>{
                    setform(false)
                  }}> <FontAwesomeIcon icon={faTimes}> </FontAwesomeIcon> </button>
                </div><br/><br/>

              <div class="row g-3">
              <div class="col-md-4">
                  <input type="text" class="form-control" placeholder="First Name" value={firstName} onChange={(e)=>{
                    setfirstName(e.target.value)
                  }} />
                </div>
                <div class="col-md-4">
                  <input type="text" class="form-control" placeholder="Surname" value={surname} onChange={(e)=>{
                    setsurname(e.target.value)
                  }}/>
                </div>
                <div class="col-md-4">
                  <input type="text" class="form-control" placeholder="Other Names" value={otherNames} onChange={(e)=>{
                    setotherNames(e.target.value)
                  }}/>
                </div>
                <div class="col-md-6">
                    <label>
                        Gender
                    </label><br/>
                      <input style={{margin: '5px',}}  type="radio" class="" name='gender' value={'Male'} onChange={(e)=>{
                    setgender(e.target.value)
                  }} /> Male 
                  <input style={{margin: '5px',}} type="radio" class="" name='gender' value={'Female'} onChange={(e)=>{
                    setgender(e.target.value)
                  }}/> Female 
                </div>
                <div class="col-md-6">
                    <label>
                        Date of Birth
                    </label><br/>
                  <input type={'date'} class="form-control" placeholder="Date of Birth" value={dob} onChange={(e)=>{
                    setdob(e.target.value)
                  }}/>
                </div>
                <div class="col-md-6">

                <div class="col-md-6">
                    <label>
                        Marital Status
                    </label><br/>
                    <input style={{margin: '5px',}}  type="radio" class="" name='marital' value='Married' onChange={(e)=>{
                    setmaritalStatus(e.target.value)
                  }}/> Married 
                <input style={{margin: '5px',}} type="radio" class=""  value='Single' name='marital' onChange={(e)=>{
                    setmaritalStatus(e.target.value)
                  }}/> Single 
              </div>
                              </div>
                        
                <div class="col-md-6">
                  <input type="email" class="form-control" placeholder="Email" value={email} onChange={(e)=>{
                    setemail(e.target.value)
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
                  
                  axios.post('https://verifyme.com.ng/backend/upload.php', formData,  {
                    headers:{
                      "Content-Type":"multipart/form-data"
                    } 
                    }).then((response)=>{
                    setimage(response.data)
                   
                  })
                  
                 }

                  
                  
                  }}/>
                </div>
                <div class="col-md-6">
                  <input type="tel" class="form-control" placeholder="Phone" value={phone} onChange={(e)=>{
                    setphone(e.target.value)
                  }}/>
                </div>
                <div class="col-md-6">
                  <span>
                  <label>Date Admitted</label>
                  <select  class="form-select" placeholder="Date Admitted"  onChange={(e)=>{
                    setdate_admitted(e.target.value)
                  }}>
                    <option>
                      Month
                    </option>
                    <option value="January">
                      January
                    </option>
                    <option value="February">
                      February
                    </option>
                    <option value="March">
                      March
                    </option>
                    <option value="April">
                      April
                    </option>
                    <option value="May">
                      May
                    </option>
                    <option value="June">
                      June
                    </option>
                    <option value="July">
                      July
                    </option>
                    <option value="August">
                      August
                    </option>
                    <option value="September">
                      September
                    </option>
                    <option value="October">
                      October
                    </option>
                    <option value="November">
                      November
                    </option>
                    <option value="December">
                      December
                    </option>
                 
                    </select>
                    <select className='form-select' onChange={(e)=>{
                      setdate_admitted(date_admitted+'/'+e.target.value);
                    }}>
                      <option>Year</option>
                      <option value="2023">
                        2023
                      </option>
                      <option value="2022">
                        2022
                      </option>
                      <option value="2021">
                        2021
                      </option>
                    </select></span>
                </div>

                <div class="col-md-6">
                  <span>
                  <label>Graduation</label>
                  <select  class="form-select" placeholder="Date Admitted" onChange={(e)=>{
                    setgraduation(e.target.value)
                  }}>
                    <option>
                      Month
                    </option>
                    <option value="January">
                      January
                    </option>
                    <option value="February">
                      February
                    </option>
                    <option value="March">
                      March
                    </option>
                    <option value="April">
                      April
                    </option>
                    <option value="May">
                      May
                    </option>
                    <option value="June">
                      June
                    </option>
                    <option value="July">
                      July
                    </option>
                    <option value="August">
                      August
                    </option>
                    <option value="September">
                      September
                    </option>
                    <option value="October">
                      October
                    </option>
                    <option value="November">
                      November
                    </option>
                    <option value="December">
                      December
                    </option>
                 
                    </select>
                    <select className='form-select' onChange={(e)=>{
                      setgraduation(graduation+'/'+e.target.value);
                    }}>
                      <option>Year</option>
                      <option value="2023">
                        2023
                      </option>
                      <option value="2022">
                        2022
                      </option>
                      <option value="2021">
                        2021
                      </option>
                    </select></span>
                </div>


                <div class="col-12">
                  <input type="text" class="form-control" placeholder="Address" value={address} onChange={(e)=>{
                    setaddress(e.target.value)
                  }}/>
                </div>
                <div class="col-md-6">
                  <input type="text" class="form-control" placeholder="LGA of Origin" value={lga} onChange={(e)=>{
                    setlga(e.target.value)
                  }}/>
                </div>
                <div class="col-md-6">
                <input type="text" class="form-control" placeholder="State of Origin" value={state} onChange={(e)=>{
                    setstate(e.target.value)
                  }}/>
                </div>



                  <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Guarantor Name" value={guarantor} onChange={(e)=>{
                    setguarantorname(e.target.value)
                  }}/>
                </div>

                  <div class="col-md-6">
                <input type="tel" class="form-control" placeholder="Guarantor Phone No" value={guarantor_phone} onChange={(e)=>{
                    setguarantorphone(e.target.value)
                  }}/>
                </div>
                <div class="col-md-12">
                <input type="text" class="form-control" placeholder="Guarantor Address" value={guarantor_address} onChange={(e)=>{
                    setguarantor_address(e.target.value)
                  }}/>
                </div>

                  <div class="col-md-4">
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
                  formData.append('submit', 'submit');
                  
                  axios.post('https://verifyme.com.ng/backend/upload.php', formData,  {
                    headers:{
                      "Content-Type":"multipart/form-data"
                    } 
                    }).then((response)=>{  setguarantorimage(response.data)
                  })
                  
                 }

                  
                  
                  }}/>
                </div>


                <div class="col-4">
                  
                </div>
               
                <div class="col-md-6">
                <select class="form-select" onChange={(e)=>{
                    setprogramme(e.target.value.split('---')[0]);
                    setpro_id(e.target.value.split('---')[1]);
                  }}>
                    <option>
Select Programme
                    </option>

                    {
                      programmes.map((pro)=>{
                        return  <option value={`${pro.title} --- ${pro.id}`}>
                       {pro.title} --- {pro.id}
                      </option>
                      })
                    }
                   
                    </select>
                </div>
               
                <div class="text-center">
                  <button type="submit" class="btn btn-primary" onClick={postStudent} > <FontAwesomeIcon icon={faSave}></FontAwesomeIcon> </button>
                  <button type="reset" class="btn btn-outline-danger" onClick={()=>{
                    setform(false)
                  }}> <FontAwesomeIcon icon={faTimes}> </FontAwesomeIcon> </button>
                </div>
              </div>

            </div>
          </div>
          <div id="dataTables-example_filter" class="col-sm-11" style={{display:'flex', justifyContent:'right'}}>
                            <div><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon><input type="search" class="form-control input-sm" placeholder='Search' aria-controls="dataTables-example" onChange={(e)=>{
                                setsearchTeerm(e.target.value)
                            }} /></div></div><br/><br/>
                            <div class="table-responsive">
                               
                            <table ref={componentRef} className='table table-dark table-striped table-hover' style={{fontSize:'x-small'}}>
<thead className='bg-dark text-light'>
<th>
      Passport
    </th>
    <th>
        Reg No
    </th>
    <th>
        Fee Paid
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
      Programme
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
Date Admitted    </th>

<th>
Graduation   </th>
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
      LGA
    </th>
    <th>
      State
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
                                            students.filter((sta)=>{
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
      {staf.reg_no}
    </td>
    <td>
        {staf.fee_paid}
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
      {staf.programme}
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
      {staf.date_admitted}
    </td>
    <td>
      {staf.graduation}
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
   {staf.lga}
    </td>
    <td>
      {staf.state}
    </td>
   
    <td>
      {staf.guarantor}
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

export default StudentTable
