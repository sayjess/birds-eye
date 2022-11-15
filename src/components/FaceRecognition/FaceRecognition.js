import '../../styles/facerecognition.css'


const FaceRecognition = (props) => {
    return (
        <div className="hc ma">
            <div className="relative mt2">
                <img id="imageInput" src={props.imageUrl} alt="" width='500px' height='auto'/>
                <div 
                className="bounding-box"
                style={{
                    top: props.box.topRow,
                    right: props.box.rightCol,
                    left: props.box.leftCol,
                    bottom: props.box.bottomRow,

                }}></div>
            </div>
        </div>
    )
}

export default FaceRecognition;