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
    test('accordian length', () => {
     const wrapper = render(<Design />)
     expect(wrapper.find('.accordion-item').length).toBe(5)
    })
    test('making selection calls dispatch', () => {
        const dispatch = jest.fn()
        const wrapper = shallow(<Design dispatch={dispatch} />)
        const choice = wrapper.find('input[value="Green"]')
        const currentTarget = {name: "nose-colour", value:"Green"}
        choice.simulate('change', {currentTarget})
        expect(dispatch).toHaveBeenCalled()
        
    })
   
})
