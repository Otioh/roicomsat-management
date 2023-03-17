import { faAdd, faBars, faUser, faCheck, faDashboard, faDatabase, faDollar, faEdit, faEnvelope,  faFile, faFilePdf, faGear, faMoneyCheck, faPeopleCarryBox, faPeopleGroup, faPowerOff, faPrint, faRemove, faSave, faSearch, faShare, faShareAlt,  faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import GlobalContext from '../Context/Api';
import { useReactToPrint } from 'react-to-print';
import pro from '../Assets/Images/pro.png';
import logo from '../Assets/Images/logo.png';


function Attendance() {
    let navigate=useNavigate();
  const {setmsg, setFooter, setTitle, handleShow}=useContext(GlobalContext);
    const [form, setform] = useState(false);


    const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

const [id, setId]=useState('');


const postStudent=()=>{

  
}




  return (
    <div style={{backgroundColor:'whitesmoke'}}>
         <br/><br/><br/>
        <div className='row'>
            <br/><br/><br/>
            <div className='col-sm-6'>

            <div className='modal' style={{display:'block', position:'relative', backgroundColor:'white'}}>
<div className='modal-header' >
<strong> Check In </strong>
    </div>
    <div className='modal-body'>
<div>
<div className="form-group input-group">
                                            <span className="input-group-addon"> <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> </span>
                                            <input type="text" className="form-control" placeholder="Reg No or Email" onChange={(e)=>{
                                                setId(e.target.value);
                                            }} />
                                        </div>
    </div>
    </div>
    <div className='modal-footer'>
Students Attendance
    </div>
</div>


                </div>
        <div className='col-sm-6'>

<div className='modal' style={{display:'block', position:'relative', backgroundColor:'white'}}>
<div className='modal-header' >
Students Attendance
    </div>
    <div className='modal-body'>
Students Attendance
    </div>
   
</div>
</div>



</div>
<br/><br/><br/><br/>
           <div id="footer-sec">
        &copy; 2023 Roicomsat Management System | Design By : <a href="http://www.roicomsat.com/" rel='noreferrer' target="_blank">Roicomsat</a>
    </div>

    </div>
  )
}

export default Attendance
