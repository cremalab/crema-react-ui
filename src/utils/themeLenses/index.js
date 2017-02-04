export const scaleLens = key => props => {
  const { platform, theme } = props
  const unit = platform == 'web' ? theme.scaleUnit : ''
  const values = [].concat(props[key])
  return values.reduce((acc, x, i) => {
    return `${acc}${i === 0 ? '' : ' '}${theme.scale[x]}${unit}`
  },
  ''
  )
}

export const colorLens = key => props => {
  const { theme } = props
  return theme.color[props[key]] || 'transparent'
}
