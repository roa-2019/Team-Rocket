import React from 'react'
import { shallow } from 'enzyme';


import Window from '../../../client/components/rocket-parts/Window'

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

test('Window test suite is working', () => {
    expect(true).toBeTruthy
})

describe('<Window />', () => {
    const wrapper = shallow(<Window />)
    wrapper.setProps({ windowShape: "twoLargePanels", strokeColor: "pink"})
    let twoLargePanels = "polygon points=\"270 410 310 410 310 340 270 340\" fill=\"grey\" stroke=\"pink\" stroke-width=\"1\" fill-opacity=\".0\"></polygon><polygon points=\"270 420 310 420 310 490 270 490\" fill=\"grey\" stroke=\"pink\" stroke-width=\"1\" fill-opacity=\".0\""
    let circularWindows = "circle cx=\"290\" cy=\"440\" r=\"20\" fill=\"aqua\"    stroke=\"orange\""

    test('Window component props change return correct shape', () => {
        expect(wrapper.html()).toContain(twoLargePanels)
        expect(wrapper.html()).not.toContain(circularWindows)
    })
})

