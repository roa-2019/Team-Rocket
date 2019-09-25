import React from 'react'
import Enzyme, {shallow, render, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// import './setup-env'
import LandingPage from '../../client/components/LandingPage'

import App from '../../client/components/App'
App.prototype.componentDidMount = () => {}

Enzyme.configure({adapter: new Adapter()})

test('App.test runner is working', () => {
  expect(true).toBeTruthy()
})

// test('<App> root has className of app', () => {
//   const wrapper = shallow(<App />)
//   const root = wrapper.find('div')
//   expect(root.length).toBe(1)
// })

test('renders one LandingPage Component', () => {
  const wrapper = shallow(<App />)
 expect(wrapper.find(LandingPage)).to.have.lengthOf(1)
  })

  test('teneray operator for LandingPage', () => {

  })

