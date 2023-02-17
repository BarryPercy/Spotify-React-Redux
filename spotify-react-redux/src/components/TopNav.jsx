import {Container, Row, Col, Image, Nav, Button} from 'react-bootstrap'
import { BsChevronLeft,BsChevronRight } from 'react-icons/bs'
import { InputGroup,Form } from 'react-bootstrap';
import { useState } from 'react';
const TopNav = () => {
  const [query, setQuery]= useState("rock")
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(search(baseEndpoint,query))
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
                
                <Col xs={3}>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Search Music"
                      onChange={handleChange}
                    />
                  </InputGroup>
                </Col>
            </Nav>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default TopNav
