
export const setStore = (name, content) => {
  if (!name) {
    return false
  }
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

export const getStore = (name) => {
  if (!name) {
    return false
  }
  window.localStorage.getItem(name)
}

export const delStore = (name) => {
  if (!name) {
    return false
  }
  window.localStorage.removeItem(name)
}
