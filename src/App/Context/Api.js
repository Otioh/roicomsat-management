import {createContext, useState} from 'react';


const GlobalContext = createContext({});

export const ContextProvider=({children})=>{
  
    const [msg, setmsg] = useState(<></>);
    const [title, setTitle]=useState(<></>)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [stu_user, setstu_user] = useState({});
    const [staff_user, setstaff_user] = useState({});
    const handleShow = () => setShow(true);
   const [footer, setFooter] = useState(<></>);
return (
    <GlobalContext.Provider value={{
        msg,  setmsg, show, handleClose, handleShow, footer, setFooter, title, setTitle, stu_user, setstu_user, staff_user, setstaff_user }}>
        {children}
    </GlobalContext.Provider>
    
        )
    }
    
    export default GlobalContext;
 
    