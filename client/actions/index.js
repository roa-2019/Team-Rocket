export const NOSE_SHAPE = 'NOSE_SHAPE'
export const NOSE_COLOR = 'NOSE_COLOR'
export const BODY_SHAPE = 'BODY_SHAPE'
export const FIN_SHAPE = 'FIN_SHAPE'



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

export function bodyShape (shape) {
  return {
    type: BODY_SHAPE,
    shape
  }
}

export function finShape (shape) {
  return {
    type: FIN_SHAPE,
    shape
  }
}


