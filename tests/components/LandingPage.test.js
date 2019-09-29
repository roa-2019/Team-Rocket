import React from 'react'
import Enzyme, {shallow, render, mount} from 'enzyme'


import LandingPage from '../../client/components/LandingPage'


jest.mock('react-redux', () => {
    return {
      connect: () => {
        return (component) => component
      }
    }
  })


describe('LandingPage tests', () => {})
test('LandingPage.test suite is working', () => {
    expect(5%2).toEqual(1)
})


    