
const FaceRecognition = (props) => {
    const {imageUrl} = props
    return (
        <div className="hc">
            <img src={props.imageUrl} alt=""/>
        </div>
    )
}

export default FaceRecognition;