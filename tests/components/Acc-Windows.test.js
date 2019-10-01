import React from 'react'
import { shallow } from 'enzyme';


import { RocketWindows } from '../../client/components/accordion-parts/indexAccordion';

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



describe('ACC-Nose shape', () => {
    test('selecting shape calls dispatch', () => {
        const dispatch = jest.fn()
        const wrapper = shallow(<RocketWindows dispatch={dispatch} />)
        const choice = wrapper.find('input[value="threeLargeCircularWindows"]')

        const currentTarget = { name: "window-shape", value: "Round" }

        choice.simulate('change', { currentTarget })
        let action = dispatch.mock.calls[0][0]

        expect(dispatch).toHaveBeenCalled()
        expect(dispatch.mock.calls.length).toBe(1)
        expect(action.type).toBe('WINDOW_SHAPE')
        expect(action.shape).toBe('Round')
         
    })
})