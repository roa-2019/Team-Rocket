import React from 'react'
import { shallow, mount } from 'enzyme';


import { RocketThruster } from '../../../client/components/accordion-parts/indexAccordion';

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
    test('RocketThruster component renders the right content', () => {
        const dispatch = jest.fn()
        const wrapper = shallow(<RocketThruster dispatch={dispatch} />)

        expect(wrapper.find("AccButtons").length).toBe(1)
        expect(wrapper.html()).toContain("Thruster2")
        expect(wrapper.html()).not.toContain("Elllipse")

    })
})