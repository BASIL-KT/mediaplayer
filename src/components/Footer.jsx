import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='container-fluid bg-success'>
        <Row>
          <Col>
            <h3>Media Player</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis nihil dolorem esse, explicabo cum ex. Impedit repellendus perferendis quasi nam amet consectetur deserunt nisi animi. Tempore deserunt dignissimos sint neque.</p>
          </Col>
          <Col>
          <h3>Links</h3>
          <div className='d-flex flex-column'>
            <Link to={'/'} style={{color:'black'}} >Landing</Link>
            <Link to={'/dash'} style={{color:'black'}}>Dashboard</Link>
            <Link to={'/his'} style={{color:'black'}}>Watch History</Link>
          </div>
          </Col>
          <Col>
          <h3>Contact Us</h3>
          <p className='my-4'>Mediaplayer2024@gmail.com</p>
          <textarea name="" className='form-control' id=""></textarea>
          <button className='btn btn-info mt-2'>send</button>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Footer