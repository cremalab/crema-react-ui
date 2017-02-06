import React, { PropTypes, Children } from 'react'

const Base = (props) => {

  const {
    platform,
    elements: {
      Container,
      Child,
      Text
    },
    children,
    color,
    childSpacing,
    ...rest
  } = props

  const handleChild = (child, i) => childSpacing
    ? (
        <Child
          platform={platform}
          childSpacing={i > 0 ? childSpacing : 0}>
          { handleText(child) }
        </Child>
      )
    : handleText(child)

  const handleText = (child) => typeof child === 'string'
    ? (
        <Text color={color}>{child}</Text>
      )
    : child

  return (
    <Container
      platform={platform}
      {...rest}
    >
      { Children.map(children, (child, i) => (
          handleChild(child, i)
        )
      )}
    </Container>
  )

}

Base.displayName = 'Box'
Base.propTypes = {
  platform: PropTypes.string,
  children: PropTypes.any,
  color: PropTypes.string,
  elements: PropTypes.object,
  childSpacing: PropTypes.number
}
Base.defaultProps = {
  elements: {}
}

export default Base
