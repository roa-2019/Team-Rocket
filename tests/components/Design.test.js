import React from 'react'
import { shallow, mount } from 'enzyme'

import Design from '../../client/components/Design'
// import { Body1, Body2, Body3, Body4 } from './rocket-parts/indexParts'
import { renderToString } from 'react-dom/server'
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
            // console.log('rts')
            let res = MockrenderToStringActual('<div>Hi</div>')
            // console.log(<div>res</div>)
            // console.log(typeof res)
            return <span>test</span>
        })
    }
})

test('Design.test suite is working', () => {
    expect(2 + 4).toEqual(6)
})

describe('Design component', () => {
   
    test('accordian length', () => {
        const wrapper = shallow(<Design />)
        expect(wrapper.find('AccordionItem').length).toBe(7)
    })
    test('selecting body shape selection calls dispatch', () => {

        // ReactDOMServer.renderToString(<Provider store={store}><Body3 /></Provider>)

        const dispatch = jest.fn()
        const wrapper = mount(<Design dispatch={dispatch} />)
        const choice = wrapper.find('input[value="Hexagon"]')

        const currentTarget = { name: "body-shape", value: "Hexagon" }

        choice.simulate('change', { currentTarget })
        let action = dispatch.mock.calls[0][0]
        let thing = wrapper.find('.container__text--code')
        // thing.forEach((t) => console.log(t.html()))

        expect(dispatch).toHaveBeenCalled()
        expect(action.type).toBe('BODY_SHAPE')
        expect(action.shape).toBe('Hexagon')
        // expect(renderToString).toHaveBeenCalled()
        // console.log(renderToString.mock.calls)
        
    })
  
    test('stroke color change event changes state', () => {
       const onStrokeColorChanged = jest.fn()
       const dispatch = jest.fn()
       const wrapper = shallow(<Design onStrokeColorChanged={onStrokeColorChanged} dispatch={dispatch} />)
       
       const border = wrapper.find('input[id="r28"]')
       const currentTarget = {name: "change-colour", value: "#FF0000"}
       border.simulate('change', { currentTarget })
      expect(wrapper.state().strokeColor).toBe("#FF0000")


    })
    test('color change event handler calls changes state', () => {
        const onColorChanged = jest.fn()
        const dispatch = jest.fn()
        const wrapper = shallow(<Design onColorChanged={onColorChanged} dispatch={dispatch} />)

        const color = wrapper.find('input[id="r24"]')
        const currentTarget = {name: "change-color", value: "yellow"}
        color.simulate('change', { currentTarget })
        expect(wrapper.state().changeColor).toBe("yellow")
           
    })

    test.skip('nose change event handler calls dispatch', () => {
        
    })
    test.skip('wing shape event handler calls dispatch', () => {
        //test on  shape event
    })
    test.skip('window change event handler calls dispatch', () => {
        //test on shape event
    })
    test.skip('thruster change event handler calls dispatch', () => {
        //test on shape event
    })
})
