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

describe('Launch', () => {
    
})