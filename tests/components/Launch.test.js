import React from 'react'
import { shallow, mount } from 'enzyme'


import Launch from '../../client/components/Launch'


jest.mock('react-redux', () => {
    return {
        connect: () => {
            return (component) => component
        }
    }
})



describe('Launch', () => {
    let wrapper, dispatch, launchButton

    beforeEach(() => {
        window.alert = jest.fn()
        wrapper = mount(<Launch dispatch={dispatch}  />)
        launchButton = wrapper.find('button')
        dispatch = jest.fn()
    })

    test('launch button calls checksProps', () => {
        let checkProps = jest.fn()
        wrapper.instance().checkProps = checkProps
        wrapper.instance().forceUpdate()

        launchButton.simulate('click')
        
        expect(checkProps).toHaveBeenCalled()  
    })
    test('alert if missing rocket body part', () => {
        wrapper.setProps({ noseShape: ""})
        launchButton.simulate('click')
        
        expect(window.alert).toHaveBeenCalled('add a nose')
    })
})