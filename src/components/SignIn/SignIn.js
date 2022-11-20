import React from "react";
import './signin.css'

const SignIn =(props) => {
    const [formData, setFormData] = React.useState({ 
        email: "",
        password: "",
        signInConfirmation: true,
    }
    )

    const handleChange = (event) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    const onSignInSubmit = (event) => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({
                email: formData.email,
                password: formData.password
            })
        })
        .then(res => res.json())
        .then(user => {
            if(user.id){
                props.onRouteChange('home');
                props.loadUser(user)
                setFormData(val => ({
                    ...val,
                    signInConfirmation: true
                  }))
            } else {
                setFormData(val => ({
                    ...val,
                    signInConfirmation: false
                  }))
            }
        })
    }

    //use this feature to pop up invalid credentials when credentials are not present in database
    if(formData.signInConfirmation === false){
        console.log("invalid credentials")
    } 

    return (
        <article className="br3 ba shadow-4 b--black-10 mv5 w-100 w-50-m w-25-l mw6 center bw1">
            <main className="pa4 black-80">
                <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="tc f2 fw6 ph0 mh0">Sign In</legend>
                        {!formData.signInConfirmation && <div className="pt3 flex items-center pb0">
                            <i className="fa-solid fa-circle-exclamation light warning bg-black br-100"></i> 
                            <p className="pl2">
                            Invalid email or password
                            </p>
                        </div>}
                        <div className="mt3">
                            <label 
                                className="db fw6 lh-copy f6"           htmlFor="email"
                            >
                                Email
                            </label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--black-50" 
                                type="email" 
                                name="email"  
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
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
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </fieldset>
                    <div className="hc">
                        <input
                            onClick={onSignInSubmit}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Sign in"
                        />
                    </div>

                    <div className="hc lh-copy mt3">
                        <p onClick={() => props.onRouteChange('signup')} className="f6 link dim black db pointer">Sign up</p>
                    </div>
                </div>
            </main>
        </article>

    );
}
export default SignIn;