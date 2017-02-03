import React, { PropTypes } from 'react'

const Base = (props) => {
  const { deps: { Container, Inner, platform }, children } = props
  const isString = typeof children === 'string'
  const isNative = platform === 'native'
  return (
    <Container>
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
  children: PropTypes.any,
  deps: PropTypes.object
}
Base.defaultProps = {
  deps: {}
}

export default Base
