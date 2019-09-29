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
   
    // test.skip('nose change event handler calls dispatch', () => {
        
    // })
    // test.skip('wing shape event handler calls dispatch', () => {
    //     //test on  shape event
    // })
    // test.skip('window change event handler calls dispatch', () => {
    //     //test on shape event
    // })
    // test.skip('thruster change event handler calls dispatch', () => {
    //     //test on shape event
    // })
})
