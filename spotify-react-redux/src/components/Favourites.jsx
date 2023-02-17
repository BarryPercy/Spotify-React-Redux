import { useSelector } from 'react-redux'
import { Container, Col, Row, Button } from 'react-bootstrap'

const Favourites = () =>{
    let songs = useSelector((state)=>state.favouriteSongs.favourites.songs)
    return(
        <Container>
            <Row>
                <Col>
                    {songs.map((song) => {
                         return(
                            <p key={song.id}>{song.title}</p>
                        )
                    })}
                </Col>
            </Row>
        </Container>
    )
}
export default Favourites