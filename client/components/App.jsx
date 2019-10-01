import React, { Component, Fragment } from 'react'

import LandingPage from './LandingPage'
import Rockets from './Rockets'
import Design from './Design'
import JvBot from './JvBot'
import { connect } from 'react-redux'



class App extends Component {

  render () {

    return (
     <Fragment>

       { this.props.showLanding ? <LandingPage /> : <><Design /> <Rockets /> </> }
{/* 
       <div className="robot__container b">
            
            <div className='robot__wrapper--JvBot b'>
              <JvBot />
            </div>

            <div className='robot__error'>
              {this.props.bodyShape == "Rectangle" && <p className="robot__error--bodyShape">"Do you see me? How am I supposed to fit into such a thin Rocket?!"</p>}
              {this.props.noseShape == "Pyramid" && <p className="robot__error--nose">"Oops you'll have to choose a nose that isn't wonky"</p>}
              {this.props.wingShape == "SmallTriangle" && <p className="robot__error--wing typewriter b">"The Rocket will not take off with wings that small"</p>}
              {this.props.thrusterShape == 'Thruster1' && <p className="robot__error--thruster">"Oh no, that's way too small - your're going to have to choose another one"</p>}
              {this.props.windowShape == "twoLargePanels" && <p className="robot__error--window b">"There's no glass in these windows, I'll get sucked into Space!"</p>}
              {this.props.changeColor == "chuckNorris" && <p>"Chuck Norris?! Yeaaaahh Buddy!!</p>}
            </div>
          </div> */}

     </Fragment>
    )
  }
}

function mapStateToProps (state)  {
  return {
    showLanding: state.navigator
  }
}

export default connect (mapStateToProps)(App)