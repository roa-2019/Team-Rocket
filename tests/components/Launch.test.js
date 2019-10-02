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
    let wrapper, dispatch, launchButton, checkProps, robotMessage

    beforeEach(() => {
        checkProps = jest.fn()
        dispatch = jest.fn()
        robotMessage = jest.fn()
        wrapper = mount(<Launch dispatch={dispatch} checkProps={checkProps} />)
        launchButton = wrapper.find('button')
    })

    test('launch button calls checksProps', () => {
        wrapper.instance().checkProps = checkProps
        wrapper.instance().forceUpdate()

        launchButton.simulate('click')
        expect(checkProps).toHaveBeenCalled()  
    })
    test('calls dipatch on missing body part', () => {
        wrapper.setProps({ noseShape: ""})
        launchButton.simulate('click')

        expect(dispatch).toHaveBeenCalled(robotMessage())
    })
    test('when called dispatch calls robotMessage action', () => {
        wrapper.setProps({ noseShape: ""})
        launchButton.simulate('click')

        expect(dispatch).toHaveBeenCalled(robotMessage())
    })
    test('correct alert sent if broken thruster', () => {
        wrapper.setProps({thrusterShape: "Thruster1"})
        launchButton.simulate('click')

        expect(dispatch).toHaveBeenCalled(robotMessage("Oh no, that's way too small - your're going to have to choose another one"))
    })
})