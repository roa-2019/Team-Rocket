import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Messages from './Messages.jsx'

class JvBot extends Component {
  render() {
    return (
      <Fragment>
        <Messages />
        <svg className='robot' width="160" height="335" xmlns="http://www.w3.org/2000/svg">
          {/* <!-- outer head --> */}
          <rect x='0' y='40' width='160' height='120' fill='blue' ry='20' />
          {/* <!-- Inner head --> */}
          <rect x='10' y='50' width='140' height='100' fill='lightblue' ry='20' />
          {/* <!-- Antena --> */}
          <polygon points='80 10 90 40 70 40' fill='lightblue' />
          <circle cx='80' cy='10' r='10' fill='red' />
          {/* <!-- outer head dots --> */}
          <circle cx='10' cy='52' r='3' fill='lightblue' />
          <circle cx='150' cy='52' r='3' fill='lightblue' />
          <circle cx='10' cy='148' r='3' fill='lightblue' />
          <circle cx='150' cy='148' r='3' fill='lightblue' />
          {/* <!-- eyes --> */}
          <circle cx='47' cy='90' r='30' fill='blue' />
          <circle cx='113' cy='90' r='30' fill='blue' />
          <circle cx='47' cy='90' r='25' fill='white' />
          <circle cx='113' cy='90' r='25' fill='white' />
          <circle cx='47' cy='90' r='10' fill='black' />
          <circle cx='113' cy='90' r='10' fill='black' />
          {/* <!-- Mouth --> */}
          <circle cx='62' cy='135' r='10' fill='orange' />
          <circle cx='98' cy='135' r='10' fill='orange' />
          <rect x='61.5' y='125' width='4' height='20' fill='red' />
          <rect x='65.5' y='125' width='7' height='20' fill='orange' />
          <rect x='72.5' y='125' width='4' height='20' fill='red' />
          <rect x='76.5' y='125' width='7' height='20' fill='orange' />
          <rect x='83.5' y='125' width='4' height='20' fill='red' />
          <rect x='87.5' y='125' width='7' height='20' fill='orange' />
          <rect x='94.5' y='125' width='4' height='20' fill='red' />
          {/* <!-- Neck --> */}
          <rect x='65' y='160' width='30' height='10' fill='lightblue' />
          {/* <!-- main body -->
    <!-- outer --> */}
          <rect x='15' y='170' width='130' height='90' fill='blue' ry='20' />
          {/* <!-- middle --> */}
          <rect x='25' y='180' width='110' height='70' fill='lightblue' ry='20' />
          {/* <!-- inner --> */}
          {/* <!-- <g> */}
          <rect x='27.5' y='182.5' width='105' height='65' fill='orange' ry='20' />
          {/* <text x="40" y="235" fontSize="60" fill="red">J V</text> */}
          {/* </g> --> */}
          {/* <!-- body dots --> */}
          <circle cx='25' cy='250' r='3' fill='lightblue' />
          <circle cx='25' cy='180' r='3' fill='lightblue' />
          <circle cx='135' cy='180' r='3' fill='lightblue' />
          <circle cx='135' cy='250' r='3' fill='lightblue' />
          {/* <!-- bottom connector --> */}
          <rect x='40' y='260' width='80' height='5' fill='lightblue' />
          <polygon points='30 265 130 265 120 290 40 290' fill='blue' />
          {/* <!-- Legs -->
    <!-- Top --> */}
          <rect x='30' y='295' width='100' height='10' fill='orange' />
          <circle cx='30' cy='300' r='5' fill='orange' />
          <circle cx='130' cy='300' r='5' fill='orange' />
          {/* <!-- Middle --> */}
          <rect x='50' y='310' width='60' height='10' fill='orange' />
          <circle cx='50' cy='315' r='5' fill='orange' />
          <circle cx='110' cy='315' r='5' fill='orange' />
          {/* <!-- Bottom --> */}
          <rect x='65' y='325' width='30' height='10' fill='orange' />
          <circle cx='65' cy='330' r='5' fill='orange' />
          <circle cx='95' cy='330' r='5' fill='orange' />
        </svg>
      </ Fragment>
    )
  }
}

export default JvBot 