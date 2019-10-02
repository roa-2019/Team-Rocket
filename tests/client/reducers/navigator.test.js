import navigator from '../../../client/reducers/navigator'

import { GoToBuildRocket, resetApp } from '../../../client/actions/navigate'

describe('navigator reducer for LandingPage state', () => {
    test('intitial state of navigator is true', () => {
        let state = navigator(undefined, {type: "@@INIT"})
        expect(state).toBe(true)
    })
    test('action GoToBuildRocket changes state to false', () => {
        let initState = true
        let state = navigator(initState, GoToBuildRocket("GoToBuildRocket"))
        expect(state).toBe(false)
    })
    test('action resetApp changes state to true', () => {
        let initState = false
        let state = navigator(initState, resetApp("resetApp"))
        expect(state).toBe(true)
    })
})
