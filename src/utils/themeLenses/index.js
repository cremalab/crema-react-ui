export const styleBy = (lens, style, prop) => props => {
  const value = lens(prop)(props)
  return (props[prop] && value) && `${style}: ${value};`
}

export const scaleLens = prop => props => {
  const { platform, theme } = props
  const unit = platform == 'web' ? theme.scaleUnit : ''
  const values = [].concat(props[prop])
  return values.reduce((acc, x, i) => {
    return `${acc}${i === 0 ? '' : ' '}${theme.scale[x]}${unit}`
  },
  ''
  )
}

export const colorLens = prop => props => {
  const { theme } = props
  return theme.color[props[prop]]
}
