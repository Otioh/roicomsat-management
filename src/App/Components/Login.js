import React, {useState, useContext} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faKey, faTag} from '@fortawesome/free-solid-svg-icons';
import logo from '../Assets/Images/logo.png';
import { useNavigate } from 'react-router-dom';
import GlobalContext from '../Context/Api';


function Login() {
    let navigate=useNavigate()
    const {setmsg, setFooter, setTitle, handleShow,}=useContext(GlobalContext);

    const [username, setUsername]=useState('');
    const [password, setpassword] = useState('');
    const login =()=>{
if (password==='123456' && username==='admin'){
    navigate('/dashboard');
   
}else{
setTitle(<h3>
Error
</h3>);
setmsg(<>
<div className='alert alert-danger'>Invalid Login Details</div>
</>);

setFooter(<></>);
handleShow()


}
     }
  return (
    <div style={{backgroundColor: '#E2E2E2', height:'100vh'}}>
     
    <div className="container">
        <div className="row text-center " style={{paddingTop:'100px'}}>
            <div className="col-md-12">
                <img src={logo} style={{height:'50px'}} alt='pix' />
            </div>
        </div>
         <div className="row ">
               <div className='col-md-4'>

               </div>
                <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
                           
                            <div className="panel-body">
                               
                                    <hr />
                                    <h5>Enter Details to Login</h5>
                                       <br />
                                     <div className="form-group input-group">
                                            <span className="input-group-addon"> <FontAwesomeIcon icon={faTag}></FontAwesomeIcon> </span>
                                            <input type="text" className="form-control" placeholder="Your Username " onChange={(e)=>{
                                                setUsername(e.target.value);
                                            }} />
                                        </div>
                                                                              <div className="form-group input-group">
                                            <span className="input-group-addon"> <FontAwesomeIcon icon={faKey}></FontAwesomeIcon> </span>
                                            <input type="password" className="form-control"  placeholder="Your Password" onChange={(e)=>{
                                                setpassword(e.target.value);
                                            }} />
                                        </div>
                                    <div className="form-group">
                                            <label className="checkbox-inline">
                                                <input type="checkbox" /> Remember me
                                            </label>
                                            <span className="pull-right">
                                                   <a href="/#/index.html" >Forget password ? </a> 
                                            </span>
                                        </div>
                                     
                                     <button className="btn btn-primary " onClick={()=>{
                                      login()
                                     }}>Login Now</button>
                                    <hr />
                                     
                            </div>
                           
                        </div>
                
                
        </div>
    </div>


    </div>
  )
}

export default Login
