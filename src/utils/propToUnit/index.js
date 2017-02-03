const propToUnit = key => props => {
  const { platform, theme } = props
  const unit = platform == 'web' ? theme.unit : false
  const value = theme.spacing[props[key]]
  return unit ? value + unit : value
}

export {
  propToUnit as default
}
