import React, { PropTypes, Children } from 'react'
import styledWeb, { withTheme } from 'styled-components'
import styledNative from 'styled-components/native'
import { styleBy, themeScale, themeColor, display } from 'utils/themeLenses'

const defaultProps = {
  theme: {
    platform: 'web',
    color: {
      primary: 'teal',
      secondary: 'papayawhip',
      tertiary: 'orange',
      white: 'white',
    },
    scale: {
      unit: 'px',
      '0': 0,
      '1': 4,
      '2': 8,
      '3': 12,
      '4': 16,
      '5': 20,
      '6': 24,
      '7': 28,
      '8': 32,
    }
  }
}

const shorthandProps = PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])

Box.displayName = 'Box'

Box.propTypes = {
  backgroundColor: PropTypes.string,
  borderRadius: shorthandProps,
  children: PropTypes.any,
  childSpacing: PropTypes.number,
  childLayout: PropTypes.oneOf(['column', 'row']),
  color: PropTypes.string,
  margin: shorthandProps,
  padding: shorthandProps,
  theme: PropTypes.object,
}

Box.defaultProps = {
  theme: {
    platform: 'web'
  },
  childLayout: 'column'
}

function Box(props) {

  const {
    backgroundColor,
    borderRadius,
    children,
    childLayout,
    childSpacing,
    color,
    margin,
    padding,
    theme: { platform },
  } = props

  const isWeb   = platform === 'web'
  const View    = isWeb ? styledWeb['div'] : styledNative['View']
  const Text    = isWeb ? styledWeb['span'] : styledNative['Text']

  const Container = View`
    ${styleBy(themeColor, 'background-color', backgroundColor)}
    ${styleBy(themeScale, 'margin',           margin)}
    ${styleBy(themeScale, 'padding',          padding)}
    ${styleBy(display,    'display',          childLayout)}
    ${styleBy(themeScale, 'border-radius',    borderRadius)}
  `
  Container.defaultProps = defaultProps

  const ChildSpacingNegate = View`
    ${styleBy(themeScale, 'margin', childSpacing, {negate: true})}
  `
  ChildSpacingNegate.defaultProps = defaultProps

  const Child = View`
    ${styleBy(themeScale, 'margin', childSpacing)}
  `
  Child.defaultProps = defaultProps

  const TextNode = Text`
    ${styleBy(themeColor, 'color', color)}
  `
  TextNode.defaultProps = defaultProps

  const handleChild = (child) => {
    return <Child>{child}</Child>
  }

  const handleText = (child) => {
    return <TextNode>{child}</TextNode>
  }

  return (
    <Container>
      { childSpacing
        ? <ChildSpacingNegate>
            { Children.map(children, child => handleChild(child))}
          </ChildSpacingNegate>
        : typeof children === 'string'
        ? handleText(children)
        : children
      }
    </Container>
  )

}

const BoxWithTheme = withTheme(Box)

export {
  BoxWithTheme as default,
  Box
}
