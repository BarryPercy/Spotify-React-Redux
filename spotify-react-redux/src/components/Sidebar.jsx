import {Container, Row, Col, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Sidebar = () => {

  return(
    <>
        <div className="sidebar">
            <Image className="spotify-image" src="spotify-logo.png"></Image>
            <Link to="/" className="nolinkstyling"><p><Image src="house-door-fill.svg" className="left-icons"/>Home</p></Link>
            <p><Image src="search.svg" alt="" className="left-icons"/>Search</p>
            <p><Image src="library.png" className="left-icons"/>Your Library</p>
            <br/>
            <p><Image src="plus-square.svg" className="left-icons"/>Create Playlist</p>
            <Link to="/favourites" className="nolinkstyling"><p><Image src="chat-heart-fill.svg" className="left-icons"/>Liked Songs</p></Link>
            <hr className="aside-hr"/>
            <div id="playlist-wrapper">
                <div id="top-playlists"></div>
            </div>
                
        </div>
    </>
  )
}

export default Sidebar
