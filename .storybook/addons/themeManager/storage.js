export const getTheme = () => {
  return localStorage.getItem('theme') || 'default'
}

export const setTheme = theme => {
  return localStorage.setItem('theme', theme)
}
