import React from "react";
import './main.css'

const Main = () => {
    return (
        <div className="main-container">
            <div className="text-container">
                <div className="text-wrapper">
                    <h3>
                        Maskine
                    </h3>
                    <h1>
                        Detect Faces in just one Click
                    </h1>
                    <p>Our website has been integrated to the leading Computer Vision and Machine Learning AI platform for face detection.</p>
                    <p className="f5 br-pill b--black bw1 b--solid link black pa2 grow pointer calisto ph4 w-25 tc bg--purple">Sign Up</p>
                </div>
            </div>

            <div className="img-container">
                <div className="img-wrapper">
                    <img className="img-one" src="https://img.freepik.com/free-vector/collaborative-robotics-abstract-concept-illustration_335657-2115.jpg?w=740&t=st=1668607849~exp=1668608449~hmac=1ecfbe733bde493ba13668d7038f311844b6c6d2e1eb707ed851a3213ec92ef4" alt=""/>
                </div>
                <div className="img-wrapper">
                    <img className="img-two" src="https://img.freepik.com/free-vector/artificial-intelligence-template-landing-page_23-2148331041.jpg?w=900&t=st=1668607561~exp=1668608161~hmac=6d13407d5bb8a8e79fb86fc87b896912a7f67ca7aef401ab4f3b10822d10ed3a" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Main;