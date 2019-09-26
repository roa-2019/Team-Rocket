import React from 'react'
import {shallow, render, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// import './setup-env'

import Rockets from '../../client/components/Rockets'

jest.mock('react-redux', () => {
    return{
        connect: () => {
            return (component) => component
        }
    }
})

test('Rocket.test suite is working', () => {
    expect(false).toBeFalsy()
})

describe('Roksts componet renders correctly', () => {
    test('renders one svg tag', () => {
        const wrapper = shallow(<Rockets />)
        expect(wrapper.find('svg').length).toBe(1)
    })
})