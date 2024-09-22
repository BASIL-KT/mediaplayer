import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Landing() {
  return (
    <>
      <div className='container-fluid p-5'>
        <Row>
          <Col className='d-flex flex-column justify-content-center'>
            <h1>MediaPlayer</h1>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto asperiores, nobis repellat distinctio optio deleniti corporis minus inventore beatae molestiae voluptatum rem harum cumque soluta alias. Incidunt accusamus voluptate a?</p>
            <div className='d-grid'>
              <Link to={'/dash'} className='btn btn-success'>Lets Go</Link>
            </div>
          </Col>
          <Col>
            <img src="https://niceillustrations.com/wp-content/uploads/2020/12/Youtube-Studio-color-800px.png" alt="" className='img-fluid' width={'100%'} />
          </Col>
        </Row>
      </div>
      <div className='container-fluid p-5 mt-3'>
        <h4 className='text-center mb-3'>Features</h4>
        <div className='row justify-content-around'>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://cdn.dribbble.com/users/2105902/screenshots/10857439/media/4602eb39dc6b0afb26ccfb35df782924.gif" />
            <Card.Body>
              <Card.Title>Simple upload</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://miro.medium.com/v2/resize:fit:1400/1*8lcdOkw8uXu3k73Q1rwt6Q.gif" />
            <Card.Body>
              <Card.Title>Watch Vidios</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" height={'200px'} src="https://www.pngitem.com/pimgs/m/528-5288626_click-to-watch-video-hd-png-download.png" />
            <Card.Body>
              <Card.Title>Categorize videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className=''>
        <Row>
          <Col md={8}>
            <h3>Simple And Faster</h3>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto asperiores, nobis repellat distinctio optio deleniti corporis minus inventore beatae molestiae voluptatum rem harum cumque soluta alias. Incidunt accusamus voluptate a?Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto asperiores, nobis repellat distinctio optio deleniti corporis minus inventore beatae molestiae voluptatum rem harum cumque soluta alias. Incidunt accusamus voluptate a?</p>
          </Col>
          <Col md={4} className='mb-5'><iframe width="100%" height="315" src="https://www.youtube.com/embed/OqyURAoQ4NQ?si=4uwhBA5MMniLr1Q9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Landing