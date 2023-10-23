import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landingpage() {
  const  navigateByUrl = useNavigate()
  const navigate = () =>{
        navigateByUrl('/home')
  }
  return (
    <>
    <Row style={{background:"black"}} className='mt-5 mb-5 align-items-center'>
        <Col></Col>
            <Col md={4}>
            <h4  className='mb-3'>Welcome to <span className='text-warning'>Media Player</span></h4>
            <p style={{textAlign:'justify'}}><span style={{fontWeight:'bold'}}>Where user can manage their favorite videos.</span> User can upload any youtube videos by copy and paste their video URL. Media Player will allow to add and remove their uploaded videos and also arrange them in different categories by drag and drop. It's free, try it now!</p>
            <button onClick={navigate} className='btn btn-info fw-bolder'>Get Started</button>
            </Col>
            <Col></Col>
            <Col md={6}>
                <img className='img-fluid' src="https://cdn.dribbble.com/users/470292/screenshots/4064016/ezgif.com-video-to-gif.gif" alt="landing" />
            </Col>
    </Row>
       <div  className="container mt-5 mb-5 justify-content-center align-items-center d-flex flex-column">
        <h3>Features</h3>
        <div className="features mb-5 mt-5 d-flex justify-content-between w-100">
        <Card className='p-3 shadow' style={{ width: '22rem' }}>
      <Card.Img style={{height:'300px', width:'300px'}} variant="top" src="https://i.pinimg.com/originals/53/97/7e/53977ec36a46d13a45ceeb5974b3d117.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>


        <Card className='p-3 shadow' style={{ width: '22rem' }}>
      <Card.Img style={{height:'300px', width:'300px'}} variant="top" src="https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-7.jpg" />
      <Card.Body>
        <Card.Title>Categorise Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>


        <Card className='p-3 shadow' style={{ width: '22rem' }}>
      <Card.Img style={{height:'300px', width:'300px'}} variant="top" src="https://redtechnologiesinc.com/wp-content/uploads/2018/09/video-icon-gif2.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
       </div>
       <div className="container border rounded p-5 mt-5 mb-5 d-flex border-secondary shadow justify-content-between">
        <div className="content w-50 mb-5 mt-5 ">
            <h4 className="text-warning mb-4">Simple, Fast and Powerful</h4>
            <h6><span className='fs-5 me-4'>Play Everything:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa ssjh laudantium aut, molestias </h6>
            <h6><span className='fs-5 me-4'>Categorise Videos:</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa laudantium aut, molestias inventore maiores</h6>
            <h6><span className='fs-5 me-4'>Managing History:</span> Lorem ipsum dolor sit, amet . Culpa laudantium aut, molestias inventore maiores enim eos alias</h6>
        </div>
        <div className="video ms-5">
        <iframe width="688" height="387" src="https://www.youtube.com/embed/IqwIOlhfCak?si=6rGEFLXOV95z4qL4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
       </div>
    </>
  )
}

export default Landingpage