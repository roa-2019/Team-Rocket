
import * as actions from '../../client/actions'

test('actions.test suite is working', () => {
    expect(5%2).toEqual(1)
})

test('noseShape returns a shape', () => {
    let action = actions.noseShape('circle')
    expect(typeof(action.shape)).toBe("string")
    expect(action.shape).toBe('circle')
})