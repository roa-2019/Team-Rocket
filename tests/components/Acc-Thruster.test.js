import React from 'react'
import { shallow, mount } from 'enzyme';


import { RocketThruster } from '../../client/components/accordion-parts/indexAccordion';

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


describe('changing Thurster shape', () => {
    test('selecting thruster shape calls dispatch', () => {
        const dispatch = jest.fn()
        const wrapper = shallow(<RocketThruster dispatch={dispatch} />)
        const choice = wrapper.find('input[value="Thruster3"]')

        const currentTarget = { name: "thruster-shape", value: "Thruster3" }

        choice.simulate('change', { currentTarget })
        let action = dispatch.mock.calls[0][0]
        let thing = wrapper.find('.container__text--code')

        expect(dispatch.mock.calls.length).toBe(1)
        expect(action.type).toBe('THRUSTER_SHAPE')
        expect(action.shape).toBe('Thruster3')
    })
})