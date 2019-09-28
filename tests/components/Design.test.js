import React from 'react'
import {shallow, render} from 'enzyme'

// import './setup-env'

import Design from '../../client/components/Design'


jest.mock('react-redux', () => {
    return{
        connect: () => {
            return (component) => component
        }
    }
})

test('Design.test suite is working', () => {
    expect(2+4).toEqual(6)
})

describe('Accordion (GUI) works as expected', () => {
    test.skip('accordian length', () => {
     const wrapper = shallow(<Design />)
     expect(wrapper.find('AccordionItem').length).toBe(6)
    })
    test('making selection calls dispatch', () => {
        const dispatch = jest.fn()
        const wrapper = shallow(<Design dispatch={dispatch} />)
        const choice = wrapper.find('input[value="Green"]')
        const currentTarget = {name: "nose-colour", value:"Green"}
        choice.simulate('change', {currentTarget})
        // expect(dispatch).toHaveBeenCalled()
        let action = dispatch.mock.calls[0][0]
        //console.log(dispatch.mock.calls[0])
        expect(action.type).toBe('NOSE_COLOR')
        expect(action.color).toBe('Green')
        
    })
   
})
