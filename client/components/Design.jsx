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


              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Body
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {/* Rocket Body Input*/}
                  <RocketBody />
                  {/* Rocket Body Input*/}
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Nose
                   </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {/* Rocket Nose Input */}
                  <RocketNose />
                  {/* Rocket Nose Input */}
                </AccordionItemPanel>
              </AccordionItem>


              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Wings
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {/* Rocket Wings Input */}
                  <RocketWings />
                  {/* Rocket Wings Input */}
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Thruster
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {/* Rocket Thruster Input*/}
                  <RocketThruster />
                  {/* Rocket Thruster Input*/}
                </AccordionItemPanel>
              </AccordionItem>


              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Windows
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {/* Rocket Windows Input*/}
                  <RocketWindows />
                  {/* Rocket Windows Input*/}
                </AccordionItemPanel>
              </AccordionItem>



              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Color
                 </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  {/* Rocket Colors Input */}
                  <RocketColor />
                  {/* Rocket Colors Input */}
                </AccordionItemPanel>
              </AccordionItem>


              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Border Color
                 </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
              {/* Rocket Stroke Colors Input */}
              <RocketStrokeColor />
              {/* Rocket Stroke Colors Input */}
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