import React, { Component, Fragment } from 'react'

class Body1 extends Component {
    render() {
        return (
            <Fragment>
                {/*<!-- Body 1 rectangle (clockwise beginning at top left) --> */}
                <polygon points="240 200 340 200 340 500 240 500" fill='grey' stroke='black' strokeWidth='1' />
            </Fragment>

        )
    }
}


export default Body1

