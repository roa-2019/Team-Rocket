import React from 'react'
import { shallow } from 'enzyme';

import Messages from '../../client/components/Messages'

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

describe('<Message />', () => {
    test('Messages component renders the correct values', () => {
        const wrapper = shallow(<Messages />)
        expect(wrapper.find(".robot-messages").length).toBe(1)
    })
})
