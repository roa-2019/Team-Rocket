import rocketReducer from '../../../client/reducers/rocketreducer'
import { bodyShape, changeColor, strokeColor } from '../../../client/actions'

describe('rocket reducer works as expected', () => {

    test('initial state of noseShape is as expected', () => {
        let state = rocketReducer(undefined, { type: "@@INIT" })
        expect(state.noseShape).toBe("")
    })

    test('action body shape changes state shape', () => {
        let intShape = { bodyShape: "rect" }
        let state = rocketReducer(intShape, bodyShape("circle"))
        expect(state.bodyShape).toBe("circle")

    })

    test('body shape changes do not change nose shape', () => {
        let intShape = { bodyShape: "rect", noseShape: "circle" }
        let state = rocketReducer(intShape, bodyShape("hexagon"))
        expect(state.bodyShape).toBe("hexagon")
        expect(state.noseShape).toBe("circle")
    })

    test('state of color changes', () => {
        let intColor = { changeColor: "green" }
        let state = rocketReducer(intColor, changeColor("pink"))
        expect(state.changeColor).toBe("pink")
    })
    test('state of stroke changes', () => {
        let intStroke = { strokeColor: "green" }
        let state = rocketReducer(intStroke, strokeColor("pink"))
        expect(state.strokeColor).toBe("pink")
    })
})