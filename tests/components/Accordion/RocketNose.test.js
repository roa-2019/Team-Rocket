import React from 'react'
import { shallow, mount } from 'enzyme';


import RocketNose  from '../../../client/components/accordion-parts/RocketNose'

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


describe('RocketNose shape', () => {
    test('RocketNose component include key values', () => {
        const dispatch = jest.fn()
        const wrapper = shallow(<RocketNose dispatch={dispatch} />)
        expect(wrapper.find("AccButtons").length).toBe(1)
        expect(wrapper.html()).toContain("Ellipse")
    })
})


        // const choice = wrapper.find('input[value="Ellipse"]')

        // const currentTarget = { name: "nose-shape", value: "Ellipse" }

        // choice.simulate('change', { currentTarget })
        // let action = dispatch.mock.calls[0][0]

        // expect(dispatch).toHaveBeenCalled()
        // expect(dispatch.mock.calls.length).toBe(1)
        // expect(action.type).toBe('NOSE_SHAPE')
        // expect(action.shape).toBe('Ellipse')