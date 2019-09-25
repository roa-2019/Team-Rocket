import React from 'react'
import Enzyme, {shallow, render, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// import './setup-env'

import LandingPage from '../../client/components/LandingPage'
LandingPage.prototype.componentDidMount = () => {}

Enzyme.configure({adapter: new Adapter()})

test('LandingPage.test suite is working', () => {
    expect(5%2).toEqual(1)
})

// test('page header includes rocket', () => {
//       const wrapper = shallow(<LandingPage />)
//       const h1 = wrapper.find('h1')
//       expect(h1.text()).toMatch(/Rocket/)
//     })
    