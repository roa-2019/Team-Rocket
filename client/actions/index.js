export const NOSE_SHAPE = 'NOSE_SHAPE'
export const CHANGE_COLOR = 'CHANGE_COLOR'
export const BODY_SHAPE = 'BODY_SHAPE'
export const STROKE_COLOR = 'STROKE_COLOR'
export const WING_SHAPE = 'WING_SHAPE'
export const WINDOW_SHAPE = 'WINDOW_SHAPE'
export const THRUSTER_SHAPE = 'THRUSTER_SHAPE'
export const IS_ROCKET_COMPLETE = 'IS_ROCKET_COMPLETE'
export const ROBOT_FILL_OPACITY = "ROBOT_FILL_OPACITY"

export function noseShape (shape) {
  return {
    type: NOSE_SHAPE,
    shape
  }
}

export function changeColor (color) {
  return {
    type: CHANGE_COLOR,
    color
  }
}

export function bodyShape (shape) {
  return {
    type: BODY_SHAPE,
    shape
  }
}

export function strokeColor (color) {
  return {
    type: STROKE_COLOR,
    color
  }
}


export function wingShape (shape) {
  return {
    type: WING_SHAPE,
    shape
  }
}

export function windowShape (shape) {
  return {
    type: WINDOW_SHAPE,
    shape
  }
}

export function thrusterShape (shape) {
  return {
    type: THRUSTER_SHAPE,
    shape
  }
}
export function isRocketComplete (boolean) {
  return {
    type: IS_ROCKET_COMPLETE,
    boolean
  }
}
export function robotFillOpacity (fill) {
  return {
    type: ROBOT_FILL_OPACITY,
    fill
  }
}
