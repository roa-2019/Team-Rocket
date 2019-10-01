import React from 'react'
import { shallow } from 'enzyme'


import LandingPage from '../../client/components/LandingPage'

import App from '../../client/components/App'
import Rockets from '../../client/components/Rockets'
import Design from '../../client/components/Design'

jest.mock('react-redux', () => {
  return {
    connect: () => {
      return (component) => component
    }
  }
})


describe('App component renders the right pages', () => {
  const wrapper = shallow(<App />)
  wrapper.setProps({ showLanding: true })
  test('when true shows LandingPage component', () => {
    expect(wrapper.find(LandingPage).length).toBe(1)
  })
  test('when state true does not show rocket components', () => {
    expect(wrapper.find(Rockets).length).toBe(0)
    expect(wrapper.html()).not.toContain("Landingimg.jpg")
  })
})

describe('show landing false', () => {
  const wrapper = shallow(<App />)
  wrapper.setProps({ showLanding: false })
  test('when state false shows rocket and design components', () => {
    expect(wrapper.find(Rockets).length).toBe(1)
    expect(wrapper.find(Design).length).toBe(1)
  })

})