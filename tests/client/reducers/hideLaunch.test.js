import hideLaunch from '../../../client/reducers/hideLaunchButton'

describe('does hideLaunch work correctly', () => {

  test('Test the inital state', () => {
    let state = hideLaunch(undefined, { type: "@@INIT" })
    expect(state).toBeTruthy()
  })
})