import React from "react";
import '../../styles/navigation.css'

const Navigation = (props) => {
    return(
        props.route === "home"
        ? 
            <nav>
                <p onClick={() => props.onRouteChange('signin')} className="f5 br-pill b--black bw1 b--solid link black  ma3 pa2 grow pointer calisto ph4">Sign Out</p>
            </nav>
        :
            <>
                <nav>
                    <p onClick={() => props.onRouteChange('signin')} className="ph4 f5 link black br-pill b--black bw1 b--solid pa2 mv3 pointer grow calisto bg-light-purple">Sign In</p>
                    <p onClick={() => props.onRouteChange('signup')} className="f5 br-pill b--black bw1 b--solid link black  ma3 pa2 grow pointer calisto ph4">Sign Up</p>
                </nav>
            </>
    )
}

export default Navigation;