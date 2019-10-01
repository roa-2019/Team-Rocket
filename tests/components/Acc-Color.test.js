import React from 'react'
import { shallow} from 'enzyme';


import {  RocketColor, RocketStrokeColor } from '../../client/components/accordion-parts/indexAccordion';


jest.mock('react-redux', () => {
    return {
        connect: () => {
            return (component) => component
        }
    }
})


describe('Colors change when selected', () => {

    test('stroke color change event changes state', () => {
        const onColorChanged = jest.fn()
        const dispatch = jest.fn()
        const wrapper = shallow(<RocketColor onColorChanged={onColorChanged} dispatch={dispatch} />)
        const border = wrapper.find('input[id="r21"]')
        const currentTarget = {name: "change-colour", value: "Green"}
        border.simulate('change', { currentTarget })
       expect(wrapper.state().changeColor).toBe("Green")
     })

     test('color change event handler calls changes state', () => {
        const onStrokeColorChanged = jest.fn()
        const dispatch = jest.fn()
        const wrapper = shallow(<RocketStrokeColor onStrokeColorChanged={onStrokeColorChanged} dispatch={dispatch} />)

        const color = wrapper.find('input[id="r25"]')
        const currentTarget = {name: "change-color", value: "yellow"}
        color.simulate('change', { currentTarget })
        expect(wrapper.state().strokeColor).toBe("yellow")
    })
})