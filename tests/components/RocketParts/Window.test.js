mport React from 'react'
import { shallow } from 'enzyme';


import Window from '../../../client/components/rocket-parts/Window'

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

test('Window test suite is working', () => {
    expect(true).toBeTruthy
})