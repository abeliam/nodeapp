export const APP__MESSAGE = "APP__MESSAGE"
export const APP__MESSAGECLOSE = "APP__MESSAGECLOSE"

function error(text) {
  return {
    type: APP__MESSAGE,
    text,
    className: "error"
  }
}

function info(text) {
  return {
    type: APP__MESSAGE,
    text,
    className: "info"
  }
}

function success(text) {
  return {
    type: APP__MESSAGE,
    text,
    className: "success"
  }
}

function warning(text) {
  return {
    type: APP__MESSAGE,
    text,
    className: "warning"
  }
}

function close(id) {
  return {
    type: APP__MESSAGECLOSE,
    id
  }
}

export default {
  error,
  info,
  warning,
  success,
  close
}
