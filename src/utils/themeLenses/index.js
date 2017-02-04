export const scaleLens = key => props => {
  const { platform, theme } = props
  const unit = platform == 'web' ? theme.scaleUnit : false
  const value = theme.scale[props[key]]
  return unit ? value + unit : value
}

export const colorLens = key => props => {
  const { theme } = props
  return theme.color[props[key]]
}
