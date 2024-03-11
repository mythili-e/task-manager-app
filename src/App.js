import './App.css';
import Table from 'react-bootstrap/Table';
// import AddTask from './components/AddTask';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [inputs, setInputs] = useState('');
  
  useEffect(()=> {
    getTasks();
  },[]);

  const getTasks = () => {
    const data = JSON.parse(localStorage.getItem('tasks'));
    console.log(data);
    if(data) {
      setTasks(data);
    }
  }

  const handleSubmit=(event)=>{
    event.preventDefault();
    tasks.push(inputs);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    setShowModal(false);
  }

  const handleClose=()=>{
    setShowModal(false);
  }

  const handleChange=(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values=>({...values, [name]: value }))
    console.log(inputs);
  }

  return(
    <>
      <div className="text-center">
        <h1>Task Manager</h1>
        <button onClick={()=>setShowModal(true)}>Add Task</button>
        
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
      
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          {tasks?.map((val)=>{
            return(
                <tr>
                    <td>1</td>
                    <td>{val.name}</td>
                    <td>{val.date}</td>
                    <td>
                        <i class="bi bi-pencil-square"></i>
                        <i class="bi bi-trash3-fill"></i>
                    </td>
                </tr>
            );
          })}
        </Table>
      </div>
    </>
  );
}
  
export default App;
