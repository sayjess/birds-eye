import './App.css';
// import Main from './components/Main/Main';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank.js/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  const [data, setData] = React.useState({
    input: "",
    imageUrl: "",
    box: {},
    route: 'signin',
    user: {
      id: "",
      name: "",
      email: "",
      entries: 0,
      joined: ''
    }
  }); 

  const loadUser = (data) => {
    setData(val => ({
      ...val,
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    }))

  }



  const onInputChangeHandler = (event) => {
    const userInput = event.target.value
    setData(val => ({
      ...val,
      input: userInput
    }))
  }

  const calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("imageInput")
    const imageWidth = Number(image.width);
    const imageHeight = Number(image.height);
    return{
      leftCol: clarifaiFace.left_col * imageWidth,
      rightCol: imageWidth - (clarifaiFace.right_col * imageWidth),
      topRow: clarifaiFace.top_row * imageHeight,
      bottomRow: imageHeight - (clarifaiFace.bottom_row * imageHeight)
    }
  }

  const displayBoundingBox = (coordinates) => {
    setData(val => ({
      ...val,
      box: coordinates
    }))
  }

  const onPictureSubmit = () => {
    setData(val => ({
      ...val,
      imageUrl: data.input
    }))
    fetch('https://maskine-api.herokuapp.com/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify({
        input: data.input
        })
      })
      .then(res => res.json())
      .then(response => {
        fetch('https://maskine-api.herokuapp.com/image', {
          method: 'put',
          headers: {'Content-Type': 'application/json',},
          body: JSON.stringify({
              id: data.user.id
          })
        })
        .then(res => res.json())
        .then(entries => {
          setData(val => ({
            ...val,
            user: {
              ...val.user,
              entries: entries
            }
          }))
        })
      displayBoundingBox(calculateFaceLocation(response))
    })
    .catch(err => console.log(err))
  }

  const onRouteChange = (route) => {
    setData(val => ({
      ...val,
      route: route
    }))
  }
  
  const initialState = () => {
    setData(val => ({
      input: "",
      imageUrl: "",
      box: {},
      route: 'signin',
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: ''
      }
    }))
  }

  const particlesInit = useCallback(async engine => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await container;  
  }, []);

  return (
    <div className="App">
      <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                // interactivity: {
                //     events: {
                //         onClick: {
                //             enable: true,
                //             mode: "push",
                //         },
                //         onHover: {
                //             enable: true,
                //             mode: "repulse",
                //         },
                //         resize: true,
                //     },
                //     modes: {
                //         push: {
                //             quantity: 4,
                //         },
                //         repulse: {
                //             distance: 200,
                //             duration: 0.4,
                //         },
                //     },
                // },
                particles: {
                    links: {
                        color: "#ffffff",
                        distance: 250,
                        enable: true,
                        opacity: 0.6,
                        width: .5,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 2,
                        straight: false,
                    },
                }
            }}
        />
      <Navigation onRouteChange={onRouteChange} initialState={initialState} route={data.route}/>
      {/* <Main /> */}
      {data.route === 'home' 
      ?  
        <>
          <Logo />
          <Rank userData={data.user}/>
          <ImageLinkForm onInputChange={onInputChangeHandler} onPictureSubmit={onPictureSubmit}/>
          <FaceRecognition imageUrl={data.imageUrl} box={data.box}/>
        </>
      : 
      (
        data.route === 'signin'
        ?
        <SignIn onRouteChange={onRouteChange} loadUser={loadUser}/>
        :
        <SignUp onRouteChange={onRouteChange} loadUser={loadUser}/>
      )
      }
    </div>
  );
}

export default App;
