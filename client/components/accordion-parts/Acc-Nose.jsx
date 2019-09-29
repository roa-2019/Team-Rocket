import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { noseShape } from '../../actions/index'
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux'
import store from '../../index'

import { Nose1, Nose2, Nose3, Nose4 } from '../rocket-parts/indexParts'


import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

class AccordionNose extends Component {

  constructor(props) {
    super(props)
    this.state = {
      noseShape: ''
    }
  }

  componentDidMount() {
    let items = document.querySelectorAll('.accordion a');
    items.forEach((item) => item.addEventListener('click', toggleAccordion));

    function toggleAccordion() {
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('active');
    }
  }

  onNoseShapeChanged = (e) => {
    this.props.dispatch(noseShape(e.currentTarget.value));
    this.setState({ ...this.state, noseShape: e.currentTarget.value })

  }

  render() {
    return (
      <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>
          Nose
          </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <div className='container__input '>

          <label className='container__radio' htmlFor='r5'>
            <input type='radio' name='nose-shape' id='r5' value='Ellipse' onChange={this.onNoseShapeChanged} />
            <span id='radio__nose--square' className='checkmark checkmark__shape'></span>
          </label>

          <label className='container__radio' htmlFor='r6'>
            <input type='radio' name='nose-shape' id='r6' value='Pyramid' onChange={this.onNoseShapeChanged} />
            <span id='radio__nose--triangle' className='checkmark checkmark__shape'></span>
          </label>

          <label className='container__radio' htmlFor='r7'>
            <input type='radio' name='nose-shape' id='r7' value='Triangular' onChange={this.onNoseShapeChanged} />
            <span id='radio__nose--' className='checkmark checkmark__shape'></span>
          </label>

          <label className='container__radio' htmlFor='r8'>
            <input type='radio' name='nose-shape' id='r8' value='Top Window' onChange={this.onNoseShapeChanged} />
            <span id='radio__nose--circle' className='checkmark checkmark__shape'></span>
          </label>


        </div>
        <div className='container__input--text'>
          <p>Ellipse</p>
          <p>Pyramid</p>
          <p>Triangular</p>
          <p>Top Window</p>

        </div>

        <div className='container__text--code'>
          <p className='margin__left'>{this.state.noseShape == 'Ellipse' && ReactDOMServer.renderToString(<Provider store={store}><Nose1 /></Provider>)}</p>
          <p className='margin__left'>{this.state.noseShape == 'Pyramid' && ReactDOMServer.renderToString(<Provider store={store}><Nose2 /></Provider>)}</p>
          <p className='margin__left'>{this.state.noseShape == 'Triangular' && ReactDOMServer.renderToString(<Provider store={store}><Nose3 /></Provider>)}</p>
          <p className='margin__left'>{this.state.noseShape == 'Top Window' && ReactDOMServer.renderToString(<Provider store={store}><Nose4 /></Provider>)}</p>
        </div>
      </AccordionItemPanel>
    </AccordionItem>

    )
  }
}

function mapStateToProps(state) {
  return {
    changeColor: state.rocket.changeColor,
    strokeColor: state.rocket.strokeColor
  }
}

export default connect(mapStateToProps)(AccordionNose)