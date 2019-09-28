import rocketReducer from '../../../client/reducers/rocketreducer'
import {bodyShape } from '../../../client/actions'

test('initial state is as expected', () => {
    let state = rocketReducer(undefined, {type:"@@INIT"})
    expect(state.noseShape).toBe("")
})

test('action body shape changes state shape', () => {
    let intShape = { bodyShape: "rect"}
    let state = rocketReducer(intShape, bodyShape("circle"))
    expect(state.bodyShape).toBe("circle")
})

// body shape changes do not change nose shape