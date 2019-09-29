import React from 'react'
import { shallow } from 'enzyme'


import Design from '../../client/components/Design'


jest.mock('react-redux', () => {
    return {
        connect: () => {
            return (component) => component
        }
    }
})

test('Design.test suite is working', () => {
    expect(2 + 4).toEqual(6)
})

describe('Design component', () => {
    test.skip('renders', () => {
        const wrapper = shallow(<Design />)
        
    })

    test('accordian length', () => {
        const wrapper = shallow(<Design />)
        expect(wrapper.find('AccordionItem').length).toBe(7)
    })
    test('selecting body shape selection calls dispatch', () => {
        const dispatch = jest.fn()
        const wrapper = shallow(<Design dispatch={dispatch} />)
        const choice = wrapper.find('input[value="Hexagon"]')
        const currentTarget = { name: "body-shape", value: "Hexagon" }
        

        choice.simulate('change', { currentTarget })

        expect(dispatch).toHaveBeenCalled()
        let action = dispatch.mock.calls[0][0]
        // console.log(dispatch.mock.calls[0])
        expect(action.type).toBe('BODY_SHAPE')
        expect(action.shape).toBe('Hexagon')
    })
    test.skip('nose change event handler calls dispatch', () => {
        //test on nose shape event
    })
    test.skip('wing shape event handler calls dispatch', () => {
        //test on nose shape event
    })
    test.skip('window change event handler calls dispatch', () => {
        //test on nose shape event
    })
    test.skip('thruster change event handler calls dispatch', () => {
        //test on nose shape event
    })
    test.skip('stroke color change event handler calls dispatch', () => {
        //test on nose shape event
    })
    test.skip('color change event handler calls dispatch', () => {
        //test on nose shape event
    })
})
