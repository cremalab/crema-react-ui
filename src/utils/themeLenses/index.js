export const styleBy = (lens, style, prop, opts = {}) => props => {
  const value = lens(prop, props, opts)
  return value && `${style}: ${value};`
}

export const themeScale = (prop, scale, opts) => {
  const { negate, platform, half } = opts
  const unit = platform === 'web' ? scale.unit ? scale.unit : 'px' : ''
  const values = [].concat(prop)
  const negative = negate === true ? '-' : ''
  const valid = !(values.map(x => scale[x]).indexOf(undefined) > -1)
  return valid
    ? values.reduce((acc, x, i) => {
      const value = scale[x]
      const valueProcessed = half ? value / 2 : value
      return `${acc}${i === 0 ? '' : ' '}${negative}${valueProcessed}${unit}`
    }, '')
    : undefined
}

export const themeColor = (prop, props) => {
  const { theme } = props
  return theme.color[prop]
}
