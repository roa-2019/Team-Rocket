import React from 'react'
import { shallow } from 'enzyme';


import RocketWings  from '../../../client/components/accordion-parts/RocketWings'

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



describe('<RocketWings />', () => {
    test('Rocket wings component renders the correct values', () => {
        const dispatch = jest.fn()
        const wrapper = shallow(<RocketWings dispatch={dispatch} />)

        expect(wrapper.find("AccButtons").length).toBe(1)
        expect(wrapper.html()).toContain("name=\"wing-shape\"")
        expect(wrapper.html()).not.toContain("window-shape")
    })
})