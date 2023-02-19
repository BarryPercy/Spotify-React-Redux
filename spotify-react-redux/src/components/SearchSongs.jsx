import { Col, Image } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { setCurrentSong } from "../redux/actions";
const SearchSongs = (props) => {
    const arr=props.array.slice(0,24)
    const dispatch = useDispatch();
    const handleClick=(current)=>{
        dispatch(setCurrentSong(current))
    }
    return(
        <>
            <Col xs={12}><h2 className="text-white">Search Results</h2></Col>
                {arr.map((song)=>{
                    return(
                        <Col xs={3} key={song.id} className="selectionDisabled" onClick={()=>handleClick(song)}>
                            <div className="media mb-4 good-morning">
                                <Image src={song.album.cover_small}  alt="..."/>

                                <div className="play-btn">
                                    <div className="triangle"></div>
                                </div>

                                <div className="media-body">
                                    <h5 className="mt-3 mb-3 ml-1">{song.title}</h5>
                                </div>
                            </div>
                        </Col>
                )
            })}
        </>
    )
}

export default SearchSongs
