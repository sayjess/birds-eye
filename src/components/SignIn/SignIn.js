import React from "react";

const SignIn =(props) => {
    return (
        <article className="br3 ba shadow-4 b--black-10 mv5 w-100 w-50-m w-25-l mw6 center bw1">
            <main className="pa4 black-80">
                <form className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="tc f2 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label 
                                className="db fw6 lh-copy f6"           htmlFor="email-address"
                            >
                                Email
                            </label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--black-50" 
                                type="email" 
                                name="email-address"  
                                id="email-address"
                            />
                        </div>

                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">
                                Password
                            </label>
                            <input 
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--black-50" 
                                type="password" 
                                name="password"  
                                id="password"
                            />
                        </div>
                    </fieldset>
                    <div className="hc">
                        <input
                            onClick={() => props.onRouteChange('home')}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Sign in"
                        />
                    </div>

                    <div className="hc lh-copy mt3">
                        <p onClick={() => props.onRouteChange('signup')} className="f6 link dim black db pointer">Sign up</p>
                    </div>
                </form>
            </main>
        </article>

    );
}
export default SignIn;