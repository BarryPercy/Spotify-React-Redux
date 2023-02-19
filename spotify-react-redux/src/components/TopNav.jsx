import {Container, Row, Col, Image, Nav, Button} from 'react-bootstrap'
import { BsChevronLeft,BsChevronRight } from 'react-icons/bs'
import { InputGroup,Form } from 'react-bootstrap';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { search } from '../redux/actions';
const TopNav = () => {
  const [query, setQuery]= useState("rock")
  const dispatch = useDispatch()
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(search(query))
  }
  return(
    <>
      <Container fluid className="test">
        <Row>
          <Col>
            <Nav className="top-nav">
                <Col xs={1}>
                  <div className="arrows">
                    <BsChevronLeft/>
                  </div>
                </Col>
                <Col xs={1}>
                  <div className="arrows">
                    <BsChevronRight/>
                  </div>
                </Col>
                
                <Col xs={6}>
                  
                    <Form onSubmit={handleSubmit} className="mb-3">
                      <Form.Control
                        placeholder="Search Music"
                        onChange={handleChange}
                      />
                    </Form>
                  
                </Col>
            </Nav>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default TopNav
