import React from 'react'
import { shallow } from 'enzyme';


import { RocketWindows } from '../../../client/components/accordion-parts/indexAccordion';

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



describe('<RocketWindows />', () => {
    test('Rocket window renders correct values', () => {
        const dispatch = jest.fn()
        const wrapper = shallow(<RocketWindows dispatch={dispatch} />)
       
        expect(wrapper.find("AccButtons").length).toBe(1)
        expect(wrapper.html()).toContain("name=\"window-shape\"")
        expect(wrapper.html()).not.toContain("wing-shape")
    })
})