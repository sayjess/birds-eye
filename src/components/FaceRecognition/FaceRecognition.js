import './facerecognition.css'


const FaceRecognition = ({imageUrl, box}) => {
    const {topRow, rightCol, leftCol, bottomRow } = box
    return (
        <div className="hc ma">
            <div className="absolute mt2">
                <img id="imageInput" src={imageUrl} alt="" width='500px' height='auto'/>
                <div 
                className="bounding-box"
                style={{
                    top: topRow,
                    right: rightCol,
                    left: leftCol,
                    bottom: bottomRow,

                }}></div>
            </div>
        </div>
    )
}

export default FaceRecognition;