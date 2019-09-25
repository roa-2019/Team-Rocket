export const NOSE_SHAPE = 'NOSE_SHAPE'
export const NOSE_COLOR = 'NOSE_COLOR'

export function noseShape (shape) {
  return {
    type: NOSE_SHAPE,
    shape
  }
}

export function noseColor (color) {
  return {
    type: NOSE_COLOR,
    color
  }
}