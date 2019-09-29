import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import {
  Accordion,
} from 'react-accessible-accordion';

import { AccordionBody, AccordionColor, AccordionNose, AccordionStrokeColor, AccordionThruster, AccordionWindows, AccordionWings } from './accordion-parts/indexAccordion.js';

class Design extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let items = document.querySelectorAll('.accordion a');
    items.forEach((item) => item.addEventListener('click', toggleAccordion));

    function toggleAccordion() {
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('active');
    }
  }

  render() {
    return (
      <Fragment>
        <div className='design col'>
          <div className='details-panel'>
            <h3> ~ Build Your Rocket ~ </h3>

            <Accordion>
              {/* Rocket Body Input*/}
              <AccordionBody />

              {/* Rocket Wings Input */}
              <AccordionNose />

              {/* Rocket Wings Input */}
              <AccordionWings />

              {/* Rocket Thruster Input*/}
              <AccordionThruster />

              {/* Rocket Windows Input*/}
              <AccordionWindows />

              {/* Rocket Colors Input */}
              <AccordionColor />

              {/* Rocket Stroke Colors Input */}
              <AccordionStrokeColor />
            </Accordion>

          </div >
        </div >
      </Fragment >
    )
  }
}

export default connect()(Design)