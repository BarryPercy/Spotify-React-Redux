import {Container, Row, Col, Image} from 'react-bootstrap'
import TopNav from './TopNav'
import { useEffect,useState } from 'react'
import GoodMorning from './GoodMorning'
const Home = () => {
    const [albumArray,setAlbumArray] = useState([])
    const fetchSongs=(search)=>{

        fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q='+search)
        .then(response => response.json())
        .then((jsonResponse) => {
            const {data}=jsonResponse
            setAlbumArray(data)
        }
        )
        .catch(err => console.error(err));
    }
    useEffect(() => {
        fetchSongs("rock");
    }, [])
    return(
        <div className="Home">
            <TopNav className="top-nav"/>
            <Container>
                <Row>
                    <GoodMorning array={albumArray}/>
                </Row>
            </Container>
            
        </div>
    )
}

export default Home
