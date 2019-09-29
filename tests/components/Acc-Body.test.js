import React from 'react'
import { shallow } from 'enzyme';


import { RocketBody } from '../../client/components/accordion-parts/indexAccordion';

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

test('Acc-Body test suite working', () => {
    expect(5+5).toEqual(10)
})

describe('Acc-Body test', () => {
    test('selecting body shape selection calls dispatch', () => {
        const dispatch = jest.fn()
        const wrapper = shallow(<RocketBody dispatch={dispatch} />)
        const choice = wrapper.find('input[value="Hexagon"]')

        const currentTarget = { name: "body-shape", value: "Hexagon" }

        choice.simulate('change', { currentTarget })
        let action = dispatch.mock.calls[0][0]
        let thing = wrapper.find('.container__text--code')
        

        expect(dispatch).toHaveBeenCalled()
        expect(action.type).toBe('BODY_SHAPE')
        expect(action.shape).toBe('Hexagon')
       
    })

})