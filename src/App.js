import { useState } from 'react';
import './App.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function App() {
  const [inputs, setInputs] = useState('');
  const [showModal, setShowModal] = useState(false);

  const addTask=()=>{
    setShowModal(true);
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    setShowModal(false);
  }

  const handleChange=(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values=>({...value, [name]: value }))
  }

  const handleClose=()=>{
    setShowModal(false);
  }

   return(
    <>
      <div className="text-center">
        <h1>Task Manager</h1>
      <button onClick={addTask}>Add Task</button>
      
      <Modal show={showModal} onHide={handleClose}>  
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>  
        <Modal.Body>
          <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3">
              <Form.Label>Task Name:</Form.Label>
              <Form.Control  type="text" name="name" placeholder="Enter Name" onChange={handleChange} />    
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date:</Form.Label>
              <Form.Control  type="text" name="date" placeholder="Enter Date" onChange={handleChange} />    
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit">
                  Save
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      {/* <Form >
        
        
        
      </Form> */}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
      </Table>
      </div>
      </>
);
}
  
export default App;
