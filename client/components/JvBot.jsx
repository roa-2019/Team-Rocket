import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class JvBot extends Component {
  render() {
    return (
      <Fragment>
        <svg width="800" height="400" >
            {/* <!-- outer head --> */}
            <rect x='380' y=' 100' width='160' height='120' fill='blue' ry='20' />
            {/* <!-- Inner head --> */}
            <rect x='390' y='110' width='140' height='100' fill='lightblue' ry='20' />
            {/* <!-- Antena --> */}
            <polygon points='460 70 470 100 450 100' fill='lightblue' />
            <circle cx='460' cy='70' r='10' fill='red' />
            {/* <!-- outer head dots --> */}
            <circle cx='390' cy='112' r='3' fill='lightblue' />
            <circle cx='530' cy='112' r='3' fill='lightblue' />
            <circle cx='390' cy='208' r='3' fill='lightblue' />
            <circle cx='530' cy='208' r='3' fill='lightblue' />
            {/* <!-- eyes --> */}
            <circle cx='427' cy='150' r='30' fill='blue' />
            <circle cx='493' cy='150' r='30' fill='blue' />
            <circle cx='427' cy='150' r='25' fill='white' />
            <circle cx='493' cy='150' r='25' fill='white' />
            <circle cx='427' cy='150' r='10' fill='black' />
            <circle cx='493' cy='150' r='10' fill='black' />
            {/* <!-- Mouth --> */}
            <circle cx='442' cy='195' r='10' fill='orange' />
            <circle cx='478' cy='195' r='10' fill='orange' />
            <rect x='441.5' y='185' width='4' height='20' fill='red' />
            <rect x='445.5' y='185' width='7' height='20' fill='orange' />
            <rect x='452.5' y='185' width='4' height='20' fill='red' />
            <rect x='456.5' y='185' width='7' height='20' fill='orange' />
            <rect x='463.5' y='185' width='4' height='20' fill='red' />
            <rect x='467.5' y='185' width='7' height='20' fill='orange' />
            <rect x='474.5' y='185' width='4' height='20' fill='red' />
            {/* <!-- Neck --> */}
            <rect x='445' y='220' width='30' height='10' fill='lightblue' />
            {/* <!-- main body -->
            <!-- outer --> */}
            <rect x='395' y='230' width='130' height='90' fill='blue' ry='20' />
            {/* <!-- middle --> */}
            <rect x='405' y='240' width='110' height='70' fill='lightblue' ry='20' />
            {/* <!-- inner --> */}
            {/* <!-- body dots --> */}
            <circle cx='405' cy='310' r='3' fill='lightblue' />
            <circle cx='405' cy='240' r='3' fill='lightblue' />
            <circle cx='515' cy='240' r='3' fill='lightblue' />
            <circle cx='515' cy='310' r='3' fill='lightblue' />
            {/* <!-- bottom connector --> */} />
        </svg>    
      </ Fragment>
    )
  }
}

export default JvBot 