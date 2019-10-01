import React from 'react'
import { shallow } from 'enzyme';


import { RocketWings } from '../../../client/components/accordion-parts/indexAccordion';

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



describe('Acc-Body test', () => {
    test('selecting body shape selection calls dispatch', () => {
        const dispatch = jest.fn()
        const wrapper = shallow(<RocketWings dispatch={dispatch} />)
        const choice = wrapper.find('input[value="Paralelogram"]')
        const currentTarget = { name: "wing-shape", value: "Paralelogram" }

        choice.simulate('change', { currentTarget })
        let action = dispatch.mock.calls[0][0]
        let thing = wrapper.find('.container__text--code')
        

        expect(dispatch).toHaveBeenCalled()
        expect(dispatch.mock.calls.length).toBe(1)
        expect(action.type).toBe('WING_SHAPE')
        expect(action.shape).toBe('Paralelogram')
       
    })

})