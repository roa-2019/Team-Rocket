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

test('Rocket.test suite is working', () => {
    expect(false).toBeFalsy()
})

describe('Rockets component renders correctly', () => {

    test('renders one svg tag', () => {
        const wrapper = render(<Rockets />)
        expect(wrapper.find('svg').length).toBe(1)

    })
    test('test tenery operators for body parts', () => {
        const wrapper = shallow(<Rockets />)
        let thruster2Points = "320 500 350 540 230 540 260 500"
        wrapper.setProps(
            {
                thrusterShape: "Thruster2",
                changeColor: "blue",
                strokeColor: "yellow"
            })

        expect(wrapper.html()).toContain(thruster2Points)

    })

})