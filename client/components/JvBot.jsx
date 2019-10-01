import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class JvBot extends Component {
  render() {
    return (
      <Fragment>
        <svg width="160" height="335" >
          {/* <!-- outer head --> */}
          <rect x='380' y=' 100' width='160' height='120' fill='blue' ry='20' fill-opacity={this.props.robotFillOpacity}/>
          {/* <!-- Inner head --> */}
          <rect x='390' y='110' width='140' height='100' fill='lightblue' ry='20' fill-opacity={this.props.robotFillOpacity}/>
          {/* <!-- Antena --> */}
          <polygon points='460 70 470 100 450 100' fill='lightblue' fill-opacity={this.props.robotFillOpacity}/>
          <circle cx='460' cy='70' r='10' fill='red' fill-opacity={this.props.robotFillOpacity}/>
          {/* <!-- outer head dots --> */}
          <circle cx='390' cy='112' r='3' fill='lightblue' fill-opacity={this.props.robotFillOpacity}/>
          <circle cx='530' cy='112' r='3' fill='lightblue' fill-opacity={this.props.robotFillOpacity}/>
          <circle cx='390' cy='208' r='3' fill='lightblue' fill-opacity={this.props.robotFillOpacity}/>
          <circle cx='530' cy='208' r='3' fill='lightblue' fill-opacity={this.props.robotFillOpacity}/>
          {/* <!-- eyes --> */}
          <circle cx='427' cy='150' r='30' fill='blue' fill-opacity={this.props.robotFillOpacity}/>
          <circle cx='493' cy='150' r='30' fill='blue' fill-opacity={this.props.robotFillOpacity}/>
          <circle cx='427' cy='150' r='25' fill='white' fill-opacity={this.props.robotFillOpacity}/>
          <circle cx='493' cy='150' r='25' fill='white' fill-opacity={this.props.robotFillOpacity}/>
          <circle cx='427' cy='150' r='10' fill='black' fill-opacity={this.props.robotFillOpacity}/>
          <circle cx='493' cy='150' r='10' fill='black' fill-opacity={this.props.robotFillOpacity}/>
          {/* <!-- Mouth --> */}
          <circle cx='442' cy='195' r='10' fill='orange' fill-opacity={this.props.robotFillOpacity}/>
          <circle cx='478' cy='195' r='10' fill='orange' fill-opacity={this.props.robotFillOpacity}/>
          <rect x='441.5' y='185' width='4' height='20' fill='red' fill-opacity={this.props.robotFillOpacity}/>
          <rect x='445.5' y='185' width='7' height='20' fill='orange' fill-opacity={this.props.robotFillOpacity}/>
          <rect x='452.5' y='185' width='4' height='20' fill='red' fill-opacity={this.props.robotFillOpacity}/>
          <rect x='456.5' y='185' width='7' height='20' fill='orange' fill-opacity={this.props.robotFillOpacity}/>
          <rect x='463.5' y='185' width='4' height='20' fill='red' fill-opacity={this.props.robotFillOpacity}/>
          <rect x='467.5' y='185' width='7' height='20' fill='orange' fill-opacity={this.props.robotFillOpacity}/>
          <rect x='474.5' y='185' width='4' height='20' fill='red' fill-opacity={this.props.robotFillOpacity}/>
          {/* <!-- Neck --> */}
          <rect x='445' y='220' width='30' height='10' fill='lightblue' fill-opacity={this.props.robotFillOpacity}/>
          {/* <!-- main body -->
            <!-- outer --> */}
          <rect x='395' y='230' width='130' height='90' fill='blue' ry='20' fill-opacity={this.props.robotFillOpacity}/>
          {/* <!-- middle --> */}
          <rect x='405' y='240' width='110' height='70' fill='lightblue' ry='20' fill-opacity={this.props.robotFillOpacity}/>
          {/* <!-- inner --> */}
          {/* <g>
                <rect x='407.5' y='242.5' width='105' height='65' fill='orange' ry='20' fill-opacity={this.props.robotFillOpacity}/>
                <text x="420" y="295" fontSize="60" fill="red" fill-opacity={this.props.robotFillOpacity}>J V</text>
            </g> */}
          {/* <!-- body dots --> */}
          <circle cx='405' cy='310' r='3' fill='lightblue' fill-opacity={this.props.robotFillOpacity}/>
          <circle cx='405' cy='240' r='3' fill='lightblue' fill-opacity={this.props.robotFillOpacity}/>
          <circle cx='515' cy='240' r='3' fill='lightblue' fill-opacity={this.props.robotFillOpacity}/>
          <circle cx='515' cy='310' r='3' fill='lightblue' fill-opacity={this.props.robotFillOpacity}/>
          {/* <!-- bottom connector --> */} />

            {/* <path fill='transparent' stroke='blue' strokeWidth='20' d="M 25 50 C 25 100 150 100 150 50" /> */}
        </svg>
      </ Fragment>
    )
  }
}
function mapStateToProps(state) {
  return {
    robotFillOpacity: state.robot.robotFillOpacity
  }
}

export default connect(mapStateToProps)(JvBot)