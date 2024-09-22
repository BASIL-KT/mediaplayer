import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideoApi } from '../services/allApi';
import { toast } from 'react-toastify';




function Add({setresult}) {
    const [show, setShow] = useState(false);
    const [video,setVideo] = useState({
      title:"",imageUrl:"",videoUrl:""
    })
    const handleAdd=async()=>{
      console.log(video);
      const {title,imageUrl,videoUrl}=video
      if(!title || !imageUrl || !videoUrl){
        toast.warning('Enter valid input')
      }
      else{

        const watchUrl=video.videoUrl
        const urls=watchUrl.split("v=")[1]
        const embedUrl=`https://www.youtube.com/embed/${urls}?si=bCYi_mfQ6F8YdT51&autoplay=1`
        video.videoUrl=embedUrl

        const result=await addVideoApi(video)
        if (result.status == 201){
          toast.success('video uploaded successfully')
          setVideo({
            title:"",imageUrl:"",videoUrl:""
          })
          handleClose()
          setresult(result)
        }
        else{
          toast.error("uploading failed!!")
          console.log(result)
        }
      }
    }
    const handleClose = () => setShow(false);
    const handleShow = () =>setShow(true);
  return (
    <>

    <button className='btn' onClick={handleShow}>
    <i className="fa-solid fa-2xl fa-square-plus" style={{color: "#c63606",}} />
    </button>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
        <FloatingLabel controlId="floatingtitle" label="video title" className='mb-3'>
        <Form.Control type="text" onChange={(e)=>{setVideo({...video,title:e.target.value})}} placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingimg" label="video Thumbnail URL" className='mb-3'>
        <Form.Control type="text" onChange={(e)=>{setVideo({...video,imageUrl:e.target.value})}} placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingvideo" label="Youtube video URL">
        <Form.Control type="text" onChange={(e)=>{setVideo({...video,videoUrl:e.target.value})}} placeholder="Password" />
      </FloatingLabel>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add