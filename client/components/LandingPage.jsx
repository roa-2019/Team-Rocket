import React, { Component, Fragment } from "react";
import { GoToBuildRocket } from "../actions/navigate.js";
import { connect } from "react-redux";

class LandingPage extends Component {
    render() {
        return (
            <Fragment>
                <div>
                <div className="landingImg" onClick={() => {
                            this.props.dispatch(GoToBuildRocket())
                        }}>
                    <div className='landingLogo'>
                        <img src="/images/landinglogoplanet.png" width="1200px" className="landinglogo" />
                    </div>
                    <div className='Landingimg'>


                        

                        <div className="landing-storyline-div b">
                            <p className="landing-storyline-para b">
                                JV Bot 2000 is on a mission to Mars to gather data and explore the planet as a habitat for Galactic Migrants. His Rocket Ship was intangled in a meteor storm and has sustained significant damage.
                            <br />
                                JV Bot 2000 landed safely on Mars dispite the severe damage to the exterior pannelling of his Rocket. The Rocket is in-operable and needs to be rebuilt.
                            <br />
                                Your mission is to rebuild JV-Bot's Rocket so he can return safely to Earth!
                           <br />
                                Do you accept this mission?
                            <br />
                               <button>
                                   Accept Mission
                                </button> 
                            </p>
                            <div className="landing-storyline-hiders">
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                            </div>

                        </div>
                    </div>
                    </div>
                </div>
                </div>


            </Fragment>
        )
    }
}

export default connect()(LandingPage);
