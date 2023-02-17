import { Col, Image } from "react-bootstrap"
const GoodMorning = (props) => {
    let arr=props.array.slice(0,6)
    return(
        <>
            <Col xs={12}><h2 className="text-white">Good Morning</h2></Col>
            {arr.map((song)=>{
                return(
                    <Col xs={4} key={song.id}>
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

export default GoodMorning
