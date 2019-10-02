import React from 'react'
import { shallow } from 'enzyme';


import Wing from '../../../client/components/rocket-parts/Wing'

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


describe('<Wing />', () => {
    const wrapper = shallow(<Wing />)
    wrapper.setProps({wingShape: "Large", changeColor: "Green", strokeColor: "pink" })
    let wingProperties = "polygon points=\"340 260 440 300 450 560 400 360 340 350\" fill=\"Green\" stroke=\"pink\" stroke-width=\"1\"></polygon><polygon points=\"240 260 140 300 150 560 180 360 240 350\" fill=\"Green\" stroke=\"pink\" stroke-width=\"1\""
    let otherWing = "points=\"340 270 430 440 430 580 340 410\""

    test('Body component props return correct shape', () => {
       expect.assertions(2)
       expect(wrapper.html()).toContain(wingProperties)
       expect(wrapper.html()).not.toContain(otherWing)
    })
})