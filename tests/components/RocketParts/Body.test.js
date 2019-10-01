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

// test('Body test suite is working', () => {
//     expect(5 % 2).toEqual(1)
// })

describe('<Body />', () => {
    test('Body component props return correct shape', () => {
        expect.assertions(2)
        const wrapper = shallow(<Body />)
        wrapper.setProps({bodyShape: 'Trapezoid'})
        let trapezoidPoints ="200 200 380 200 360 350 220 350"
        let rectanglePoints = "240 200 340 200 340 500 240 500"
        expect(wrapper.html()).toContain(trapezoidPoints)
        expect(wrapper.html()).not.toContain(rectanglePoints)
    })
    test('Body component color props return correct color', () => {
        expect.assertions(2)
        const wrapper = shallow(<Body />)
        wrapper.setProps({bodyShape: "Tower", changeColor: "pink", strokeColor: "orange"})
        let polygonColors ="fill=\"pink\" stroke=\"orange\""
        let otherColors = "fill=\"yellow\" stroke=\"blue\""
        expect(wrapper.html()).toContain(polygonColors)
        expect(wrapper.html()).not.toContain(otherColors)
    })

})