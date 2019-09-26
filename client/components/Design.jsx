import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { noseShape, noseColor } from '../actions/index'

class Design extends Component {
  constructor(props) {
    super(props)
    this.state = {
      noseShape: '',
      noseColor: ''
    }
  }


  componentDidMount() {
    let items = document.querySelectorAll(".accordion a");
    items.forEach((item) => item.addEventListener('click', toggleAccordion));

    function toggleAccordion() {
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('active');
    }
  }

  onNoseShapeChanged =  (e) => {
   this.props.dispatch(noseShape(e.currentTarget.value));
  }

  onNoseColorChanged =  (e) => {
    this.props.dispatch(noseColor(e.currentTarget.value));
  }


  render() {
    return (
      <Fragment>
        <div className='design col b'>
          <div className="details-panel">
            <h3>Build Your Rocket</h3>

            <div className="accordion">

              {/* <!-- Menu 1 --> */}
              <div className="accordion-item">
                <a>Colours</a>
                <div className="info">

                  <div className='rb-colour-wrapper'>

                    <input type="radio" name="nose-colour" id="r1" value="Green" onChange={this.onNoseColorChanged}/>
                    <label htmlFor="r2">Green</label>

                    <input type="radio" name="nose-colour" id="r2" value="Blue" onChange={this.onNoseColorChanged}/>
                    <label htmlFor="r3">Blue</label>

                    <input type="radio" name="nose-colour" id="r3" value="#FF0000" onChange={this.onNoseColorChanged}/>
                    <label htmlFor="r4">Chuck Norris</label>

                    <input type="radio" name="nose-colour" id="r4" value="Yellow" onChange={this.onNoseColorChanged}/>
                    <label htmlFor="r5">Yellow</label>
                  </div>
                </div>
              </div>

              {/* <!-- Menu 2 --> */}
              <div className="accordion-item">
                <a>Nose</a>
                <div className="info">
                  <div className='rb-nose-wrapper'>
                    <input type="radio" name="nose-shape" id="r5" value="Triangle" onChange={this.onNoseShapeChanged} />
                    <label htmlFor="r6">Triangle</label>

                    <input type="radio" name="nose-shape" id="r6" value="Square" onChange={this.onNoseShapeChanged} />
                    <label htmlFor="r7">Square</label>

                    <input type="radio" name="nose-shape" id="r7" value="Circle" onChange={this.onNoseShapeChanged} />
                    <label htmlFor="r8">Circle</label>
                  </div>

                </div>
              </div>

              {/* <!-- Menu 3 --> */}
              <div className="accordion-item">
                <a>Body</a>
                <div className="info">

                </div>
              </div>

              {/* <!-- Menu 4 --> */}
              <div className="accordion-item">
                <a>Fins</a>
                <div className="info">


                </div>
              </div>

              {/* <!-- Menu 5 --> */}
              <div className="accordion-item">
                <a>Exhaust</a>
                <div className="info">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </Fragment>
    )
  }
}


export default connect()(Design)