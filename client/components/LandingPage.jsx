import React, { Component, Fragment } from "react";
import { GoToBuildRocket } from "../actions/navigate.js";
import { connect } from "react-redux";

class LandingPage extends Component {
    render() {
        return (
            <Fragment>
                <div>
<<<<<<< HEAD
=======
                    <div className='landingLogo'>
                    <img src="/images/landinglogoplanet.png" width="1200px" className="landinglogo" /> 
                    </div>
>>>>>>> 585d71698420dacc7adf953ec7592d79902a6df0
                    <div className='Landingimg'>
                      
                        <div className ="landingImg" onClick={() => {
                            this.props.dispatch(GoToBuildRocket())
<<<<<<< HEAD
                        }
                        }> 
                        </img>
=======
                        }}></div>
                           <div class="typewriter">
                        <h1>On an assigned mission from NZ Space Agency to explore mars and gather data on the existence of habitable conditions and the possibility of presence of life. Your Rocket Ship was entangled in a meteor shower and streams of cosmic debris. You have landed safely on Mars, however there is severe damage to the exterior panelling of your rocket as well as engine damage. The rocket is still un-operable and needs to be re-built. Your mission is to rebuild your rocket and return safely to Earth. Do you accept this mission?</h1>
                        </div>
                         </div>  
>>>>>>> 585d71698420dacc7adf953ec7592d79902a6df0
                    </div>

                 
            </Fragment>
        )
    }
}

export default connect()(LandingPage);
