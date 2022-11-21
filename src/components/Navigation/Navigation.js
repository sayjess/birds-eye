import React from "react";
import './navigation.css'
// import logo from '../../images/logo.png'

const Navigation = (props) => {
    const logout = () => {
        props.onRouteChange('signin');
        props.initialState();
    }
        if(props.route === "home"){
            return (
                <div className="nav">
                    {/* <div>
                        <img src={logo} alt="logo" className="logo"/>
                    </div> */}
                    <nav className="">
                    <p onClick={logout} className="f5 br-pill b--black bw1 b--solid link black  ma3 pa2 grow pointer calisto ph4">Sign Out</p>
                    </nav>
                </div>
            )
        }
        else if(props.route === "signin" || props.route === "signup"){
            return (
                <div className="nav">
                    {/* <div>
                        <img className="logo" src={logo} alt="logo"/>
                    </div> */}
                    <nav className="">
                        <p onClick={() => props.onRouteChange('signin')} className="ph4 f5 link black br-pill b--black bw1 b--solid pa2 mv3 pointer grow calisto">Sign In</p>
                        <p onClick={() => props.onRouteChange('signup')} className="f5 br-pill b--black bw1 b--solid link black  ma3 pa2 grow pointer calisto ph4 bg--purple">Sign Up</p>
                    </nav>
                </div>
            )
        }

}

export default Navigation;