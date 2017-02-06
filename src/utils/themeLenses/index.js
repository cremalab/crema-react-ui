export const styleBy = (lens, style, prop, opts = {}) => props => {
  const value = lens(prop, props, opts)
  return value && `${style}: ${value};`
}

export const themeScale = (prop, props, opts) => {
  const { theme } = props
  const { negate } = opts
  const { scale, platform } = theme
  const unit = platform === 'web' ? scale.unit ? scale.unit : 'px' : ''
  const values = [].concat(prop ? prop : 0)
  const negative = negate === true ? '-' : ''
  return values.reduce((acc, x, i) => {
    return `${acc}${i === 0 ? '' : ' '}${negative}${scale[x]}${unit}`
  },
  ''
  )
}

export const themeColor = (prop, props, opts) => {
  const { theme } = props
  return theme.color[prop]
}

export const display = (prop, props, opts) => {
  // return prop === 'row' ? 'flex' : 'block'
}
