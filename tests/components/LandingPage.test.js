import React from 'react'
import Enzyme, { shallow } from 'enzyme'


import LandingPage from '../../client/components/LandingPage'


jest.mock('react-redux', () => {
  return {
    connect: () => {
      return (component) => component
    }
  }
})


describe('LandingPage tests', () => {
  
  test('component renders one image', () => {
    const wrapper = shallow(<LandingPage />)
    expect(wrapper.find('img').length).toBe(1)
  })

  test('on click calls dispatch and changes state', () => {
    const dispatch = jest.fn()
    const wrapper = shallow(<LandingPage dispatch={dispatch} />)
    const image = wrapper.find('button')
    image.simulate('click')
    const action = dispatch.mock.calls[0][0]
    expect(action.type).toBe("NAVIGATE")

  })
})

