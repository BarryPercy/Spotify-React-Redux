import {Container, Row, Col, Image} from 'react-bootstrap'
import TopNav from './TopNav'
import { useEffect,useState } from 'react'
import SearchSongs from './SearchSongs'
import {search} from '../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
const Home = () => {
    const searchSongs = useSelector((state) => state.songs.songList)
    const songsSearched = useSelector((state)=>state.songs.songsSearched)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(search("rock"));
    }, [])
    return(
        <div className="Home">
            <TopNav className="top-nav"/>
            <Container fluid>
                <Row>
                    {songsSearched&&<SearchSongs array={searchSongs}/>}
                </Row>
            </Container>
            
        </div>
    )
}

export default Home
