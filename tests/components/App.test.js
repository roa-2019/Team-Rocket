import React from 'react'
import {shallow} from 'enzyme'


import LandingPage from '../../client/components/LandingPage'

import App from '../../client/components/App'
import Rockets from '../../client/components/Rockets'

jest.mock('react-redux', () => {
  return {
    connect: () => {
      return (component) => component
    }
  }
})

test('App.test runner is working', () => {
  expect(true).toBeTruthy()
})

// test('<App> root has className of app', () => {
//   const wrapper = shallow(<App />)
//   const root = wrapper.find('div')
//   expect(root.length).toBe(1)
// })

test.skip('renders one LandingPage Component', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find(LandingPage).length).toBe(1)
  })

  test('teneray operator for LandingPage', () => {
    const wrapper = shallow(<App />)
    wrapper.setProps({showLanding: true})
    expect(wrapper.find(Rockets ).length).toBe(0)
    expect(wrapper.find(LandingPage).length).toBe(1)

    expect(wrapper.html()).toContain("Landingimg.jpg")
    
  })

