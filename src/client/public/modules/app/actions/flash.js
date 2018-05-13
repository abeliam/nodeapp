export function success(message) {
  return {
    type: 'FLASH_MESSAGE',
    color: 'green',
    message,
  }
}

export function error(message) {
  return {
    type: 'FLASH_MESSAGE',
    color: 'green',
    message,
  }
}

export default {
  success,
  error
}
