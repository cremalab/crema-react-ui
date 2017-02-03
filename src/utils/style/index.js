export const unit = key => props => {
  const { platform, theme } = props
  const unit = platform == 'web' ? theme.unit : false
  const value = theme.spacing[props[key]]
  return unit ? value + unit : value
}

export const color = key => props => {
  const { theme } = props
  return theme.color[props[key]]
}
