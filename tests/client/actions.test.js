import nock from 'nock'
import * as actions from '../../client/actions'
import { getSatellite } from '../../client/apiClient/iss'

test('actions.test suite is working', () => {
    expect(5 % 2).toEqual(1)
})

test('noseShape returns a shape', () => {
    let action = actions.noseShape('circle')
    expect(typeof (action.shape)).toBe("string")
    expect(action.shape).toBe('circle')
})

// test('API call to ISS', () => {
//     const scope = nock('http://localhost')
//     .get('/https://api.wheretheiss.at/v1/satellites/25544')
//         .reply(200, [{ data: "Where is the ISS at?" }])

//     const issId = 25544

//     return getSatellite(issId)
//     .then(() => {
//         expect()
//     })
// })
