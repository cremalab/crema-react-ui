import React, { PropTypes } from 'react'

const Base = (props) => {

  const {
    platform,
    deps: { Container, Inner },
    children,
    background,
    color,
    margin,
    padding,
    radius,
  } = props

  const isString = typeof children === 'string'

  return (
    <Container
      platform={platform}
      background={background}
      color={color}
      margin={margin}
      padding={padding}
      radius={radius}
    >
      {
        isString
        ? <Inner color={color}>{children}</Inner>
        : children
      }
    </Container>
  )

}

Base.displayName = 'Box'
Base.propTypes = {
  platform: PropTypes.string,
  children: PropTypes.any,
  deps: PropTypes.object,
  background: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.number,
  padding: PropTypes.number,
  radius: PropTypes.number,
}
Base.defaultProps = {
  deps: {},
  padding: 0
}

export default Base
