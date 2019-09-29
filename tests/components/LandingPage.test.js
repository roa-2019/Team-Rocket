import React from 'react'
import Enzyme, { shallow, render, mount } from 'enzyme'


import LandingPage from '../../client/components/LandingPage'


jest.mock('react-redux', () => {
  return {
    connect: () => {
      return (component) => component
    }
  }
})


describe('LandingPage tests', () => {
  test('LandingPage.test suite is working', () => {
    expect(5 % 2).toEqual(1)
  })
  test('on click calls dispatch and changes state', () => {
    const dispatch = jest.fn()
    const wrapper = shallow(<LandingPage dispatch={dispatch} />)
    const image = wrapper.find('img')
    image.simulate('click')
    const action = dispatch.mock.calls[0][0]
    expect(action.type).toBe("GoToBuildRocket")

  })
})

