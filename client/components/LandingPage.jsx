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

                        <div className="landingImg" ></div>

                            <div className="css-typing">
                            <p>JV Bot 2000 is on a mission to Mars to </p>
                            <p>gather data and explore the planet as a </p>
                            <p>habitat for Galactic Migrants. His Rocket </p>
                            <p>Ship was entangled in a meteor shower and </p>
                            <p>has sustained significant damage. JV Bot </p>
                            <p>2000 landed safely on Mars dispite the  </p>
                            <p>severe damage to the exterior pannelling of </p>
                            <p>his Rocket. The Rocket is in-operable and </p>
                            <p>needs your help to be rebuilt. Your mission </p>
                            <p>is to rebuild JV-Bot's Rocket so that he can </p>
                            <p>return safely to Earth! </p>
                            <p>Do you accept this mission? </p>

                            <p> <button onclick="StartButton"   onClick={() => {
                            this.props.dispatch(GoToBuildRocket())
                        }} >Begin Mission </button></p>

                           </div>
                       </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default connect()(LandingPage);
