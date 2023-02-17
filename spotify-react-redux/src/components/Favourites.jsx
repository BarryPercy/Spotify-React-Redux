import { useSelector } from 'react-redux'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Job from './Job'

const Favourites = () =>{
    let songs = useSelector((state)=>state.favourites.favourites.songs)
    console.log(favourites)
    return(
        <Container>
            <Row>
                <Col>
                    {songs.map((jobData) => (
                        <Job key={jobData._id} data={jobData} favourite={true}/>   
                    ))}
                </Col>
            </Row>
        </Container>
    )
}
export default Favourites