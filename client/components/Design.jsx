import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import { RocketBody, RocketColor, RocketNose, RocketStrokeColor, RocketThruster, RocketWindows, RocketWings } from './accordion-parts/indexAccordion.js';

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
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Body
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <RocketBody />
                </AccordionItemPanel>
              </AccordionItem>


              {/* Rocket Nose Input */}
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Nose
                   </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <RocketNose />
                </AccordionItemPanel>
              </AccordionItem>

              {/* Rocket Wings Input */}
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Wings
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <RocketWings />
                </AccordionItemPanel>
              </AccordionItem>

              {/* Rocket Thruster Input*/}
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Thruster
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <RocketThruster />
                </AccordionItemPanel>
              </AccordionItem>

              {/* Rocket Windows Input*/}
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Windows
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <RocketWindows />
                </AccordionItemPanel>
              </AccordionItem>

              {/* Rocket Colors Input */}
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Color
                 </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <RocketColor />
                </AccordionItemPanel>
              </AccordionItem>

              {/* Rocket Stroke Colors Input */}
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Border Color
                 </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <RocketStrokeColor />
                </AccordionItemPanel>
              </AccordionItem>

            </Accordion>
          </div >
        </div >
      </Fragment >
    )
  }
}

export default connect()(Design)