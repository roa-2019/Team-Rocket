import React from 'react'
import { shallow } from 'enzyme';


import Thruster from '../../../client/components/rocket-parts/Thruster'

const MockrenderToStringActual = jest.requireActual('react-dom/server').renderToString


jest.mock('react-redux', () => {
    return {
        connect: () => {
            return (component) => component
        }
    }
})

jest.mock('react-dom/server', () => {
    return {
        renderToString: jest.fn((args) => {

            let res = MockrenderToStringActual('<div>Hi</div>')

            return <span>test</span>
        })
    }
})


describe('<Thruster />', () => {
    const wrapper = shallow(<Thruster />)
    wrapper.setProps({ thrusterShape: "Thruster3", changeColor: "pink", strokeColor: "grey" })
    let thrusterThree = "polygon points=\"320 500 300 540 280 540 260 500\" fill=\"pink\" stroke=\"grey\" stroke-width=\"1\""
    let thrusterTwo = " points=\"320 500 350 540 230 540 260 500\""
    test('Nose component props change', () => {
        expect.assertions(2)
        expect(wrapper.html()).toContain(thrusterThree)
        expect(wrapper.html()).not.toContain(thrusterTwo)
    })
})
