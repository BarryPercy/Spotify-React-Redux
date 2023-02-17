import {Container, Row, Col, Image} from 'react-bootstrap'
import { useState,useEffect } from 'react';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import { useSelector,useDispatch } from 'react-redux';
import { addToFavourites, removeFromFavourites } from '../redux/actions'
const Playbar = () => {
    const [currentSong,setCurrentSong]=useState();
    const [currentSongIndex, setCurrentSongIndex] = useState(0)
    const [album, setAlbum] = useState([])
    let songs = useSelector((state) => state.favouriteSongs.favourites.songs)
    const dispatch = useDispatch()
    const playUrl="https://striveschool-api.herokuapp.com/api/deezer/search?q=pink+floyd"
    const getSongs = async()=>{
        try{
            let res = await fetch(playUrl)
            if(res.ok){
                res = await res.json();
                setCurrentSong(res.data[0])
                setAlbum(res.data)
            }
            else{
                console.log("we elsed!")
            }
        }catch(error){
            console.log(error);
        }
    }
    const toggleFavourite=()=>{
        console.log("togglin")
        if(songs.includes(currentSong)){
          dispatch(removeFromFavourites(currentSong.id))
        }else{
          dispatch(addToFavourites(currentSong))
        }
      }
    const nextSong=()=>{
            setCurrentSongIndex(currentSongIndex+1)
            setCurrentSong(album[currentSongIndex]);
    }

    useEffect(() => {
        getSongs();
    }, [])

    useEffect(() => {
        
    }, [currentSong])
    
    return(
        <>
            <Container fluid className="playbar" >
                <Row>
                    <Col xs={4} className="song-and-artist-play-bar">
                        <Image src={currentSong?.album.cover_small} id="current-album-cover"/>
                        <div className="song-and-artist-play">
                            <p className="current-song-text text-white">{currentSong?.title}</p>
                            <p className="current-artist-text play-list-text" >{currentSong?.artist.name}</p>
                        </div>
                        {songs.includes(currentSong)?<AiFillHeart className="heart-down" onClick={toggleFavourite}/>:<AiOutlineHeart className="heart-down" onClick={toggleFavourite}/>}
                    </Col>
                    <Col xs={5} className="middle-of-play-bar">
                        <div className="song-icons d-flex justify-content-center">
                            <Image src="shuffle.svg" className="play-bar-icons play-bar-icons-big" id="shuffle-icon" />
                            <Image src="skip-backward.svg" className="play-bar-icons play-bar-icons-big play" />
                            <Image src="play-circle-fill.svg" className="play-bar-icons play-button" id="play" />
                            <Image src="skip-forward.svg" className="play-bar-icons play-bar-icons-big" onClick={nextSong}/>
                            <Image src="arrow-counterclockwise.svg" className="play-bar-icons play-bar-icons-big" />
                        </div>
                    </Col>
                    <Col xs={2} className="volume align-items-center d-flex right justify-content-end">
                            <Image src="playlist.png" className="play-bar-icons"/>
                            <Image src="pc-display.svg" className="play-bar-icons"/>
                            <Image src="volume-up.svg" className="play-bar-icons"/>     
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Playbar
