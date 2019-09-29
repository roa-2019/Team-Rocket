import React from 'react'
import { shallow, render, mount } from 'enzyme'


import Rockets from '../../client/components/Rockets'

jest.mock('react-redux', () => {
    return {
        connect: () => {
            return (component) => component
        }
    }
})



describe('Rockets component renders correctly', () => {
    test('Rocket.test suite is working', () => {
        expect(false).toBeFalsy()
    })
    test('renders one svg tag', () => {
        const wrapper = render(<Rockets />)
        expect(wrapper.find('svg').length).toBe(1)
        
    })
    // 

})