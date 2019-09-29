import React from 'react'
import { shallow, mount } from 'enzyme';


import { RocketBody, RocketColor, RocketNose, RocketStrokeColor, RocketThruster, RocketWindows, RocketWings } from '../../client/components/accordion-parts/indexAccordion';

// import { Body1, Body2, Body3, Body4 } from './rocket-parts/indexParts'
// import { renderToString } from 'react-dom/server'
import { exportAllDeclaration } from '@babel/types';
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
        const wrapper = mount(<RocketBody dispatch={dispatch} />)
        const choice = wrapper.find('input[value="Hexagon"]')

        const currentTarget = { name: "body-shape", value: "Hexagon" }

        choice.simulate('change', { currentTarget })
        let action = dispatch.mock.calls[0][0]
        let thing = wrapper.find('.container__text--code')
        

        expect(dispatch).toHaveBeenCalled()
        expect(action.type).toBe('BODY_SHAPE')
        expect(action.shape).toBe('Hexagon')
       
    })
    
    test('stroke color change event changes state', () => {
        const onStrokeColorChanged = jest.fn()
        const dispatch = jest.fn()
        const wrapper = shallow(<RocketBody StrokeColorChanged={onStrokeColorChanged} dispatch={dispatch} />)
        
        const border = wrapper.find('input[id="r28"]')
        const currentTarget = {name: "change-colour", value: "#FF0000"}
        border.simulate('change', { currentTarget })
       expect(wrapper.state().strokeColor).toBe("#FF0000")
     })

     test('color change event handler calls changes state', () => {
        const onColorChanged = jest.fn()
        const dispatch = jest.fn()
        const wrapper = shallow(<RocketBody onColorChanged={onColorChanged} dispatch={dispatch} />)

        const color = wrapper.find('input[id="r24"]')
        const currentTarget = {name: "change-color", value: "yellow"}
        color.simulate('change', { currentTarget })
        expect(wrapper.state().changeColor).toBe("yellow")
    })
})