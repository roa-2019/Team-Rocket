import nock from 'nock'
import * as actions from '../../client/actions'

test('noseShape returns a shape', () => {
    let action = actions.noseShape('circle')
    expect(typeof (action.shape)).toBe("string")
    expect(action.shape).toBe('circle')
})