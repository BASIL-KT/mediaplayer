import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCategoryApi } from '../services/allApi';
import CategorySet from './CategorySet';

function Category() {
  const [show, setShow] = useState(false);
  const[cat,setcat]=useState("")
  const [resp,setResp]=useState({})

  const handleCategory=async()=>{
    if(!cat){
      toast.warning("Enter valid input")
    }
    else{
      const result=await addCategoryApi({category:cat,videos:[]})
      if(result.status==201){
        toast.success("category Added!!!")
        setcat("")
        handleClose()
        setResp(result)
      }
      else{
        toast.error("Addin failed!!!")
        console.log(result);
      }
    }
  }
    const handleClose = () => setShow(false);
    const handleShow = () =>setShow(true);
  return (
    <>
    <div className='d-grid'>
      <button className='btn btn-danger' onClick={handleShow}>Add category</button>

    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
        <FloatingLabel controlId="floatingtitle" label="Category Name" className='mb-3'>
        <Form.Control type="text" onChange={(e)=>{setcat(e.target.value)}} placeholder="name@example.com" />
      </FloatingLabel>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
      <CategorySet res={resp}/>
    </>
  )
}

export default Category