import React from "react";

const SignUp =(props) => {
    const [formData, setFormData] = React.useState({ 
        email: "",
        password: "",
        name: "",
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

    const onSignUpSubmit = (event) => {
        fetch('http://localhost:3000/signup', {
            method: 'post',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify({
                email: formData.email,
                password: formData.password,
                name: formData.name
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.id){
                console.log()
                props.loadUser(data)
                props.onRouteChange('home')
            }
            else {
                setFormData(val => ({
                    ...val,
                    signInConfirmation: false
                  }))
            }
        })
        
    }
    return (
        <article className="br3 ba shadow-4 b--black-10 mv5 w-100 w-50-m w-25-l mw6 center bw1">
            <main className="pa4 black-80">
                <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="tc f2 fw6 ph0 mh0">Sign Up</legend>
                        {!formData.signInConfirmation && <div className="pt3 flex items-center pb0">
                            <i className="fa-solid fa-circle-exclamation light warning bg-black br-100"></i> 
                            <p className="pl2">
                            Please try again
                            </p>
                        </div>}

                    {/* NAME */}
                        <div className="mt3">
                            <label 
                                className="db fw6 lh-copy f6"           htmlFor="name"
                            >
                                Name
                            </label>
                            <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--black-50" 
                                type="text" 
                                name="name"  
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>

                    {/* EMAIL */}
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

                    {/* PASSWORD */}
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
                            onClick={onSignUpSubmit}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="submit" 
                            value="Join"
                        />
                    </div>
                </div>
            </main>
        </article>

    );
}
export default SignUp;