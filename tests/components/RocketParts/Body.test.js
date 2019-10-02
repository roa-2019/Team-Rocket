import React from 'react'
import { shallow } from 'enzyme';


import Body from '../../../client/components/rocket-parts/Body'

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


describe('<Body />', () => {
    const wrapper = shallow(<Body />)
    wrapper.setProps({ bodyShape: "Trapezoid", changeColor: "pink", strokeColor: "orange" })
    let trapezoidProperties = "polygon points=\"200 200 380 200 360 350 220 350 \" fill=\"pink\" stroke=\"orange\" stroke-width=\"1\"></polygon><polygon points=\"240 500 340 500 360 350 220 350\" fill=\"pink\" stroke=\"orange\" stroke-width=\"1\""
    let rectanglePoints = "240 200 340 200 340 500 240 500"
    
    test('Body component props return correct shape', () => {
        expect.assertions(2)
        expect(wrapper.html()).toContain(trapezoidProperties)
        expect(wrapper.html()).not.toContain(rectanglePoints)
    })
})