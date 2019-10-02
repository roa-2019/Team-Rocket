import React from 'react'
import { shallow } from 'enzyme';


import  RocketBody  from '../../../client/components/accordion-parts/RocketBody';

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

describe('<RocketBody />', () => {
    test('rocket body component renders the correct values', () => {
        const dispatch = jest.fn()
        const wrapper = shallow(<RocketBody dispatch={dispatch} />)
        
        expect(wrapper.find("AccButtons").length).toBe(1)
        expect(wrapper.html()).toContain("name=\"body-shape\"")
        expect(wrapper.html()).not.toContain("wing-shape")
    })
})