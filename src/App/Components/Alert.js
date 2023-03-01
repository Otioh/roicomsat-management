import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {  faDatabase,   faFile, faFilePdf, faGear,  faPrint, faRemove, faSave,  faShare, faShareAlt,  faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GlobalContext from '../Context/Api';


function Alert() {
   const {show, handleClose, msg, footer, title}=useContext(GlobalContext);
    
  return (
    <div>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
{
    msg
}

        </Modal.Body>
        <Modal.Footer>
          
        {
            footer
        }
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Alert
