import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// import './setup-env'

import Design from '../../client/components/Design'

Design.prototype.componentDidMount = () => {}

Enzyme.configure({adapter: new Adapter()})

test('Design.test suite is working', () => {
    expect(2+4).toEqual(6)
})

describe('Accordion (GUI) works as expected', () => {
    test('accordian length', () => {
     const wrapper = shallow(<Design />)
    //  console.log(wrapper.find('accordion'))
     expect(wrapper.find('.accordion-item').length).toBe(5)
    })
})
