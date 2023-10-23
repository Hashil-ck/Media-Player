import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center' style={{width:'100%', height:'400px'}}>
        <div className="footer d-flex justify-content-evenly w-100">
            
                <div style={{width:'400px'}} className="website">
                <h4>
                <i className="fa-solid fa-cloud-arrow-up fa-bounce "></i>{' '}
                Media Player
            </h4>
            <h6>Designed and built with all the love in the world by th Bootstrap team with the help of our contributors.</h6>
            <h6>Code  licensed MIT, docs CC BY 3.0.</h6>
            <p>Currentlyhv5.3.2.</p>
            </div>
            <div className="links d-flex flex-column">
                <h4>Links</h4>
                <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Landing Page
                </Link>
                <Link to={'/home'} style={{textDecoration:'none', color:'white'}}>Home
                </Link>
                <Link to={'/watch-history'} style={{textDecoration:'none', color:'white'}}>Watch History
                </Link>
            </div>
            <div className="links d-flex flex-column">
                <h4>Guides</h4>
                <Link to={'https://react.dev/'} style={{textDecoration:'none', color:'white'}}>React
                </Link>
                <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none', color:'white'}}>React Bootstrap
                </Link>
                <Link to={'https://www.w3schools.com/react/react_router.asp'} style={{textDecoration:'none', color:'white'}}>Routing
                </Link>
            </div>
            <div className="contact d-flex flex-column" >
              <h4>Contact Us</h4>
               <Form>
      <Row className="align-items-center">
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInput" visuallyHidden>
            Email
          </Form.Label>
          <Form.Control
            className="mb-2"
            id="inlineFormInput"
            placeholder="Enter your Email id"
          />
        </Col>
       
        <Col xs="auto">
          <Button type="submit"  className="btn btn-info mb-2">
          <i className="fa-solid fa-arrow-right fa-bounce" ></i>
          </Button>
        </Col>
      </Row>
               </Form>
               <div className='icon d-flex justify-content-between mt-2' >
                    <Link style={{textDecoration:'none', color:'white',fontSize:'26px'}}><i className="fa-solid fa-envelope"></i></Link>
                    <Link style={{textDecoration:'none', color:'white',fontSize:'26px'}}><i className="fa-brands fa-twitter"></i></Link>
                    <Link style={{textDecoration:'none', color:'white',fontSize:'26px'}}><i className="fa-brands fa-linkedin"></i></Link>
                    <Link style={{textDecoration:'none', color:'white',fontSize:'26px'}}><i className="fa-brands fa-facebook"></i></Link>
                    <Link style={{textDecoration:'none', color:'white',fontSize:'26px'}}><i className="fa-brands fa-instagram"></i></Link>
                    <Link style={{textDecoration:'none', color:'white',fontSize:'26px'}}><i className="fa-brands fa-github"></i></Link>
               </div>
            </div>

        </div>
        <p>Copyright © 2023 Media Player. Built with React.</p>
    </div>
  )
}

export default Footer