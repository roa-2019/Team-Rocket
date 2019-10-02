import nock from 'nock'
import * as actions from '../../client/actions'
import { GoToBuildRocket, resetApp } from '../../client/actions/navigate'

test('noseShape returns a shape', () => {
    let action = actions.noseShape('Ellipse')
    expect(typeof (action.shape)).toBe("string")
    expect(action.shape).toBe('Ellipse')
})

test('changeColor returns a color', () => {
    let action = actions.changeColor('Green')
    expect(typeof (action.color)).toBe("string")
    expect(action.color).toBe('Green')
})

test('bodyShape returns a shape', () => {
    let action = actions.bodyShape('Rectangle')
    expect(typeof (action.shape)).toBe("string")
    expect(action.shape).toBe('Rectangle')
})

test('strokeColor returns a color', () => {
    let action = actions.strokeColor('Yellow')
    expect(typeof (action.color)).toBe("string")
    expect(action.color).toBe('Yellow')
})

test('wingShape returns a shape', () => {
    let action = actions.wingShape('SmallParalelogram')
    expect(typeof (action.shape)).toBe("string")
    expect(action.shape).toBe('SmallParalelogram')
})

test('windowShape returns a shape', () => {
    let action = actions.windowShape('twoLargePanels')
    expect(typeof (action.shape)).toBe("string")
    expect(action.shape).toBe('twoLargePanels')
})

test('thrusterShape returns a shape', () => {
    let action = actions.thrusterShape('Thruster4')
    expect(typeof (action.shape)).toBe("string")
    expect(action.shape).toBe('Thruster4')
})

test('hideLaunch returns correct type', () => {
    let action = actions.hideLaunch()
    expect(action.type).toBe('HIDE_LAUNCH')
})

test('GoToBuildRocket to have type NAVIGATE', () => {
    let action = GoToBuildRocket()
    expect(action.type).toBe("NAVIGATE")
})

test('resetApp to have type RESET', () => {
    let action = resetApp()
    expect(action.type).toBe("RESET")
})