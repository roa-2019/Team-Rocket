import React from 'react'
import { shallow } from 'enzyme';


import Nose from '../../../client/components/rocket-parts/Nose'

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


describe('<Nose />', () => {
    const wrapper = shallow(<Nose />)
     wrapper.setProps({noseShape: "Ellipse", changeColor: "Purple", strokeColor:"Red"})
     let ellispeProperties = "ellipse id=\"ellipse\" cx=\"290\" cy=\"210\" rx=\"50\" ry=\"100\" stroke=\"Red\" fill=\"Purple\" stroke-width=\"1\""
     let otherShape = "points=\"700,355 700,0 0,700\" stroke=\"Red\" fill=\"Purple\""
    test('Nose component props change return correct shape', () => {
        expect.assertions(2)
        expect(wrapper.html()).toContain(ellispeProperties)
        expect(wrapper.html()).not.toContain(otherShape)
    })
})