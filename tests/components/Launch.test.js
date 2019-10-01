import React from 'react'
import { shallow } from 'enzyme'


import Launch from '../../client/components/Launch'
import { exportAllDeclaration } from '@babel/types';


jest.mock('react-redux', () => {
    return {
        connect: () => {
            return (component) => component
        }
    }
})

describe('Launch', () => {
    test('launch button checksProps', () => {
        checkProps = jest.fn()
        const wrapper = shallow(<Launch />)
        const launchButton = wrapper.find('.launch-button')
        launchButton.simulate('click')
        expect(checkProps).toHaveBeenCalled
    })
})