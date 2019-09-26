import React from 'react'
import {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// import './setup-env'

import Design from '../../client/components/Design'


jest.mock('react-redux', () => {
    return{
        connect: () => {
            return (component) => component
        }
    }
})

test('Design.test suite is working', () => {
    expect(2+4).toEqual(6)
})

describe('Accordion (GUI) works as expected', () => {
    test('accordian length', () => {
     const wrapper = shallow(<Design />)
     expect(wrapper.find('.accordion-item').length).toBe(5)
    })
})
