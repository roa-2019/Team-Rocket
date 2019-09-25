import React from 'react'
import Enzyme, {shallow, render, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import './setup-env'

import Rocket from '../../client/components/Rocket'
Rocket.prototype.componentDidMount = () => {}

Enzyme.configure({adapter: new Adapter()})

test('Rocket.test suite is working', () => {
    expect(false).toBeFalsy()
})