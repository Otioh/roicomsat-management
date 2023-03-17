import { faAdd, faBars,  faCheck, faDashboard, faDatabase, faDollar, faEdit, faEnvelope,  faFile, faFilePdf, faGear, faMoneyCheck, faPeopleCarryBox, faPeopleGroup, faPowerOff, faPrint, faRemove, faSave, faSearch, faShare, faShareAlt,  faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import GlobalContext from '../Context/Api';
import { useReactToPrint } from 'react-to-print';
import pro from '../Assets/Images/pro.png';
import logo from '../Assets/Images/logo.png';
import { funSeque } from '../flamejs';


function StudentUpdate() {
    let navigate=useNavigate();
  const {setmsg, setFooter, setTitle, handleShow, stu_user}=useContext(GlobalContext);
 



    const [firstName, setfirstName] = useState(stu_user.first_name);
    const [surname, setsurname] = useState(stu_user.surname);
    const [otherNames, setotherNames] = useState(stu_user.other_names);

    const [dob, setdob] = useState(stu_user.dob);

      const [email, setemail] = useState(stu_user.email);
      const [address, setaddress] = useState(stu_user.address);
      const [lga, setlga] = useState(stu_user.lga);
      const [state, setstate] = useState(stu_user.state);
      const [image, setimage] = useState(stu_user.image);
      const [guarantor, setguarantorname] = useState(stu_user.guarantor);
      const [guarantor_phone, setguarantorphone] = useState(stu_user.guarantor_phone);

      const [guarantor_address, setguarantor_address]=useState(stu_user.guarantor_address);
      const [date_admitted, setdate_admitted] = useState(stu_user.date_admitted);
      const [graduation, setgraduation] = useState(stu_user.graduation);

   

const postStudent=()=>{
if(!image.toLowerCase().includes('verifyme') ||dob===""||address===""||lga===""||state===""||guarantor===""||guarantor_address===""||guarantor_phone===""||date_admitted===""|| graduation===""){
  handleShow();
  setFooter(<></>)
  setTitle(<>
  All Fields are Required
   </>);
     setmsg(<>
      <div className='alert alert-danger'>
       <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon> Provide the Required data for Image,  Date of Birth, Address, LGA, State, Guarantor, Guarantor Address, Guarantor Phone, Date Admitted & Date of Graduation 
      </div>
                 </>
                 );
}else{
  
axios.post('https://verifyme.com.ng/backend/students.php', {update:'update', first_name:firstName, surname, other_names:otherNames, email, image,  dob, address, lga, state, guarantor,  guarantor_phone, guarantor_address, date_admitted, graduation, reg_no:stu_user.reg_no}, {
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
                      navigate('/studentlogin')
                 
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
}



  return (
    <div>
          <div id="wrapper">
        <nav className="navbar navbar-default navbar-cls-top " role="navigation" style={{marginBottom: 0}}>
           
             
                <i className="navbar-brand" >Roicomsat</i>
    

            <div className="header-right">

                <a href="/#/studentlogin" className="btn btn-danger" title="Logout">  <FontAwesomeIcon icon={faPowerOff}></FontAwesomeIcon> </a>

            </div>
        </nav>
        
  
        
        <div id="page-wrapper">
            <div id="page-inner">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="page-head-line">STUDENTS DATA UPDATE</h1>
                      
                    </div>
                </div>
                
                <div class="panel-body">
               


                            <div class="animated">
            <div class="">
            <img src={stu_user.image} alt={'stu_user.first_name'} style={{height:'120px', float:'right'}} />
              <h4>Reg No: {stu_user.reg_no}</h4>
              <h5 class="">{stu_user.first_name} {stu_user.surname}  || {stu_user.programme} </h5>

              <div class="text-center" style={{float:'right'}}>
                  <button type="submit" class="btn btn-outline-success" onClick={postStudent} > <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Save </button>
            
                </div><br/><br/>

              <div class="row g-3">
             
                <div class="col-md-6">
                    <label>
                        Gender:
                    </label><br/>
                   <strong>  {stu_user.gender}</strong>
                </div>
                <div class="col-md-6">
                    <label>
                        Date of Birth :
                    </label><br/>
                  <input type={'date'} class="form-control" placeholder="Date of Birth" value={dob} onChange={(e)=>{
                    setdob(e.target.value)
                  }}/>
                </div>
                <div class="col-md-6">

                <div class="col-md-6">
                    <label>
                        Marital Status:
                    </label><br/>
                  <strong> {stu_user.marital}</strong>
              </div>
                              </div>
                        
                <div class="col-md-6">
                <label>
                        E-Mail : 
                    </label><br/>
                  <input type="email" class="form-control" placeholder="Email" value={email} onChange={(e)=>{
                    setemail(e.target.value)
                  }}/>
                </div>
                <div class="col-md-6">
    <label>
      <img src={image} alt={'Passport'} style={{height:'80px'}} />
       Photograph 
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
                   if(response.data.toLowerCase().includes('verifyme')){
                    setimage(response.data)
                 
                    
                    setmsg(<>
                      <div className='alert alert-success'>
                       <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Image Uploaded Successfully
    
                      </div>
                                 </>
                               
                                 );
                    setTitle(<h3>Success</h3>);
                    setFooter(<></>);
                    handleShow();
                
                   }else{
                     setmsg(<>
                    <div className='alert alert-danger'>
                     <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon> {response.data}
  
                    </div>
                               </>
                             
                               );
                  setTitle(<h3>Error</h3>);
                  setFooter(<></>);
                  handleShow();
                   }
           
                   
                  })
                  
                 }

                  
                  
                  }}/>
                </div>
                <div class="col-md-6">
                <label>
                        Phone:
                    </label><br/>
                  <strong> {stu_user.phone}</strong>
                </div>
                <div class="col-md-6">
                  <span>
                  <label>Date Admitted: </label>
                  <input  className='form-control' value={date_admitted} onChange={(e)=>{
                    setdate_admitted(e.target.value)
                  }} type={'month'} />
                  
                    </span>
                </div>

                <div class="col-md-6">
                  <span>
                  <label>Graduation:</label>
                  <input type='month' className='form-control' value={graduation} onChange={(e)=>{
                    setgraduation(e.target.value)
                  }} />
                 </span>
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



                <div class="col-4">
                  
                </div>
           
                <div class="text-center">
                  <button type="submit" class="btn btn-primary" onClick={postStudent} > <FontAwesomeIcon icon={faSave}></FontAwesomeIcon> Update</button>
                  
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

export default StudentUpdate
