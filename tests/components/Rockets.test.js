import React from 'react'
import { shallow, render } from 'enzyme'


import Rockets from '../../client/components/Rockets'

jest.mock('react-redux', () => {
    return {
        connect: () => {
            return (component) => component
        }
    }
})


describe('Rockets component renders correctly', () => {
    test('renders two svg tags', () => {
        const wrapper = render(<Rockets />)
        expect(wrapper.find('svg').length).toBe(2)
    })

    test('test tenery operators for thruster parts', () => {
        const wrapper = shallow(<Rockets />)

        wrapper.setProps({thrusterShape: "Thruster2", changeColor: "blue",
                strokeColor: "yellow"})
        const shapeProps = wrapper.instance().props
        expect(shapeProps.thrusterShape).toBe("Thruster2")
        
    })
    test('tenery operators for nose parts', () => {
        const wrapper = shallow(<Rockets />)
        wrapper.setProps({ noseShape: "Ellipse"})

        expect(wrapper.instance().props.noseShape).toBe("Ellipse")
    })
    test('alert if broken parts', () => {
        wrapper.setProps({thrusterShape: "Thruster1"})
        launchButton.simulate('click')
        let robotSpeech = wrapper.find('.robot__error')
        
        expect(robotSpeech.html()).toContain('Oh no, that\'s way too small - your\'re going to have to choose another one')
        expect(robotSpeech.html()).not.toContain('Do you see me? How am I supposed to fit into such a thin Rocket?!')
    })

})