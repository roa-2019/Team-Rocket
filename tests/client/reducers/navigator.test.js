import navigator from '../../../client/reducers/navigator'

import { GoToBuildRocket , LandingPage } from '../../../client/actions/navigate'

describe('navigator reducer for LandingPage state', () => {
    test('intitial state of navigator is true', () => {
        let state = navigator(undefined, {type: "@@INIT"})
        expect(state).toBe(true)
    })
    test('action GoToBuildRocket changes state to false', () => {
        let initState = true
        let state = navigator(initState, GoToBuildRocket("GoToBuildRocket"))
        console.log(state)
        expect(state).toBe(false)
    })

})
