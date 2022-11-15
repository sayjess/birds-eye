import React from 'react';
import '../../styles/imagelinkform.css'

const ImageLinkForm = (props) => {
    return(
        <div>
            <p className='f3 tc'>{'This Magic Brain will detect faces in your picture. Give it a try.'}</p>
            <div className='hc tc'> 
                <div className='form pa4 br3 shadow-5'>
                    <input onChange={props.onInputChange} className='f4 pa2 w-70 center' type='text' />
                    <button 
                    onClick={props.onButtonSubmit} 
                    className='w-20 grow f4 link ph3 pv2 dib white bg-light-purple'><i className="black fa-solid fa-users-viewfinder"></i></button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;