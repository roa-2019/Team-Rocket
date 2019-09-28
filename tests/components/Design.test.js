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
    test('renders', () => {
        const wrapper = shallow(<Design />)
        console.log(wrapper.find("container__text--code"))
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
        // expect(dispatch).toHaveBeenCalled()
        let action = dispatch.mock.calls[0][0]
        // console.log(dispatch.mock.calls[0])
        expect(action.type).toBe('BODY_SHAPE')
        expect(action.shape).toBe('Hexagon')
    })
    test('nose change event handler calls dispatch', () => {
        //test on nose shape event
    })
    test('wing shape event handler calls dispatch', () => {
        //test on nose shape event
    })
    test('window change event handler calls dispatch', () => {
        //test on nose shape event
    })
    test('thruster change event handler calls dispatch', () => {
        //test on nose shape event
    })
    test('stroke color change event handler calls dispatch', () => {
        //test on nose shape event
    })
    test('color change event handler calls dispatch', () => {
        //test on nose shape event
    })
})
