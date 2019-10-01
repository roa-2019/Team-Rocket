import React from 'react'
import { shallow } from 'enzyme'

import Design from '../../client/components/Design'


jest.mock('react-redux', () => {
    return {
        connect: () => {
            return (component) => component
        }
    }
})


test('Design.test suite is working', () => {
    expect(2 + 4).toEqual(6)
})

describe('Design component', () => {
   
    test('accordian length', () => {
        const wrapper = shallow(<Design />)
        expect(wrapper.find('AccordionItem').length).toBe(7)
    })
   
    // test.skip('nose change event handler calls dispatch', () => {
        
    // })
    // test.skip('wing shape event handler calls dispatch', () => {
    //     //test on  shape event
    // })
    // test.skip('window change event handler calls dispatch', () => {
    //     //test on shape event
    // })
    // test.skip('thruster change event handler calls dispatch', () => {
    //     //test on shape event
    // })
})
