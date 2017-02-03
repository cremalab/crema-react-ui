import React, { PropTypes } from 'react'

const Base = (props) => {

  const {
    platform,
    deps: { Container, Inner },
    children,
    padding
  } = props

  const isString = typeof children === 'string'
  const isNative = platform === 'native'

  return (
    <Container
      platform={platform}
      padding={padding}
    >
      {
        isNative && isString
        ? <Inner>{children}</Inner>
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
  padding: PropTypes.number
}
Base.defaultProps = {
  deps: {},
  padding: 0
}

export default Base
