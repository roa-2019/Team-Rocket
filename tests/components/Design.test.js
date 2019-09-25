import React from 'react'
import Enzyme, {shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import './setup-env'

import Design from '../../client/components/Design'

Design.prototype.componentDidMount = () => {}

Enzyme.configure({adapter: new Adapter()})

test('Design.test suite is working', () => {
    expect(2+4).toEqual(6)
})

describe('Accordion (GUI) works as expected', () => {
    test('accordian length', () => {
     const wrapper = shallow(<Design />)
     expect(wrapper.find('.accordion')).to.have.lengthOf(5)
    })
})
