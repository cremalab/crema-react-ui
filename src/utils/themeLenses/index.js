export const styleBy = (lens, style, prop, opts = {}) => props => {
  const value = lens(prop, props, opts)
  return value && `${style}: ${value};`
}

export const themeScale = (prop, props, opts) => {
  const { theme  } = props
  const { negate } = opts
  const { scale, platform } = theme
  const unit = platform === 'web' ? scale.unit ? scale.unit : 'px' : ''
  const values = [].concat(prop)
  const negative = negate === true ? '-' : ''
  const valid = !(values.map(x => scale[x]).indexOf(undefined) > -1)
  return valid
    ? values.reduce((acc, x, i) => `${acc}${i === 0 ? '' : ' '}${negative}${scale[x]}${unit}`, '')
    : undefined
}

export const themeColor = (prop, props) => {
  const { theme } = props
  return theme.color[prop]
}
