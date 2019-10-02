export const NAVIGATE = 'NAVIGATE'
export const RESET = 'RESET'

  export function GoToBuildRocket () {
    return {
      type: 'NAVIGATE'
    }
  }

  export function resetApp () {
    return {
      type: 'RESET'
    }
  }