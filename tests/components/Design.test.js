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



describe('Design component', () => {
   
    test('accordian length', () => {
        const wrapper = shallow(<Design />)
        expect(wrapper.find('AccordionItem').length).toBe(7)
    })
})
