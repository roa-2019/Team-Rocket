import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'

class Design extends Component {
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      noseShape:'',
      noseColor:''
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
                    <input type="radio" name="nose-colour" id="r1" />
                    <label htmlFor="r1">Red</label>
                    <input type="radio" name="nose-colour" id="r2" />
                    <label htmlFor="r2">Green</label>
                    <input type="radio" name="nose-colour" id="r3" />
                    <label htmlFor="r3">Blue</label>
                    <input type="radio" name="nose-colour" id="r4" checked />
                    <label htmlFor="r4"  >Chuck Norris</label>
                    <input type="radio" name="nose-colour" id="r5" />
                    <label htmlFor="r5">Yellow</label>
                  </div>
                </div>
              </div>

              {/* <!-- Menu 2 --> */}
              <div className="accordion-item">
                <a>Nose</a>
                <div className="info">
                  <div className='rb-nose-wrapper'>
                    <input type="radio" name="nose-shape" id="r6" checked />
                    <label htmlFor="r6">Triangle</label>
                    <input type="radio" name="nose-shape" id="r7" />
                    <label htmlFor="r7">Square</label>
                    <input type="radio" name="nose-shape" id="r8" />
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