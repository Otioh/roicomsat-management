import { faAdd, faBars,  faCheck, faDashboard, faDatabase, faDollar, faEdit, faEnvelope,  faFile, faFilePdf, faGear, faMoneyCheck, faPeopleCarryBox, faPeopleGroup, faPowerOff, faPrint, faRemove, faSave, faSearch, faShare, faShareAlt,  faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import GlobalContext from '../Context/Api';
import { useReactToPrint } from 'react-to-print';
import pro from '../Assets/Images/pro.png';
import logo from '../Assets/Images/logo.png';


function StudentWait() {
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
      const [image, setimage] = useState(stu_user.pro);
      const [guarantor, setguarantorname] = useState(stu_user.guarantor);
      const [guarantor_phone, setguarantorphone] = useState(stu_user.guarantor_phone);

      const [guarantor_address, setguarantor_address]=useState(stu_user.guarantor_address);
      const [date_admitted, setdate_admitted] = useState('');
      const [graduation, setgraduation] = useState('');

      useEffect(()=>{
setimage(stu_user.image)
      }, [setmsg, image, stu_user])

const postStudent=()=>{
if(image===""||dob===""||address===""||lga===""||state===""||guarantor===""||guarantor_address===""||guarantor_phone===""||date_admitted===""|| graduation===""){
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
        <br/><br/><br/><br/><br/><br/>   
        <center>  
<h3>
    Please Wait...........................
    
    </h3>   
    </center>
    <br/><br/>  <br/><br/>  <br/><br/>  
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

export default StudentWait
