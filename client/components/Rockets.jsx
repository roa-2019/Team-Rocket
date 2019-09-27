import React, { Component, Fragment} from 'react'

import {connect} from 'react-redux'

class Rockets extends Component {

    render() {
         return(
            <Fragment> 
           <div className='rocket rocket-panel col'>
           <div className="rocket-wrapper b">
            <svg height='800' width='800' id="rocket-1">
             {/* Wings */}
            <polygon points="240 170 330 340 330 480 240 310" fill='grey' stroke='black' strokeWidth='2' />
            <polygon points="140 170 140 310 50 480 50 340" fill='grey' stroke='black' strokeWidth='2' />
    
             {/* Rocket nose 1  */}
             {this.props.noseShape == 'Circle' && <ellipse cx="190" cy="110" rx="50" ry='100' stroke="black" strokeWidth="1.5" fill={this.props.noseColor} />}
            
    
            {/* Rocket body 1  */}
            <rect width='100' height='300' fill='grey' stroke='black' strokeWidth='1' ry='5' y='100' x='140' />
            <rect width='20' height='30' fill='aqua' y='170' x='180' stroke='black' strokeWidth='1' ry='2' />
            <rect width='20' height='30' fill='aqua' y='240' x='180' stroke='black' strokeWidth='1' ry='2' />
            <rect width='20' height='30' fill='aqua' y='310' x='180' stroke='black' strokeWidth='1' ry='2' />
    
            {/*Rocket bottom 1 */}
            <rect width='80' height='20' fill='grey' x='150' y='400' stroke='black' strokeWidth='1' ry='1' />
        </svg>
        </div>
        </div>
        </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
      noseShape: state.rocket.noseShape,
      noseColor: state.rocket.noseColor
    }
  }

export default connect(mapStateToProps)(Rockets)