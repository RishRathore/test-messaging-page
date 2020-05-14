import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalForm = ({ open, toggle, onSubmit, onCancel, children, error }) => (
  <div>
    <Modal isOpen={open} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create new message</ModalHeader>
      <ModalBody>
        {children}  
      </ModalBody>
      <ModalFooter>
        <p className='mr-5' style={{ color: '#bf5757' }}>{error}</p>
        <Button color="secondary" onClick={onCancel}>Cancel</Button>{' '}
        <Button color="primary" onClick={onSubmit}>Submit</Button>
      </ModalFooter>
    </Modal>
  </div>
)

export default ModalForm