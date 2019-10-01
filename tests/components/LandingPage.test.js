import React from 'react'
import { shallow } from 'enzyme'


import LandingPage from '../../client/components/LandingPage'


jest.mock('react-redux', () => {
  return {
    connect: () => {
      return (component) => component
    }
  }
})


describe('LandingPage tests', () => {
  const dispatch = jest.fn()
  const wrapper = shallow(<LandingPage dispatch={dispatch} />)

  test('component renders one image', () => {
    expect(wrapper.find('img').length).toBe(1)
  })

  test('on click calls dispatch and changes state', () => {
    const missionButton = wrapper.find('button')
    missionButton.simulate('click')
    const action = dispatch.mock.calls[0][0]
    
    expect(action.type).toBe("NAVIGATE")

  })
})

