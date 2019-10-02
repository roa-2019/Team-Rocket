import hideLaunch from '../../../client/reducers/hideLaunchButton'
import { exportAllDeclaration } from '@babel/types';

describe('does hideLaunch work correctly', () => {

  test('Test the inital state', () => {
    let state = hideLaunch(undefined, { type: "@@INTI" })
    expect(state).toBeTruthy()
  })
})