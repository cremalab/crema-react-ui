import React, { PropTypes, Children } from 'react'
import styledWeb, { withTheme } from 'styled-components'
import styledNative from 'styled-components/native'
import { styleBy, themeScale, themeColor } from 'utils/themeLenses'

const defaultProps = {
  theme: {
    platform: 'web',
    color: {
      primary: 'teal',
      secondary: 'papayawhip',
      tertiary: 'orange',
      white: 'white',
    },
    spacing: {
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
    },
    opacity: {
      0: 0,
      1: 0.25,
      2: 0.5,
      3: 0.75,
      4: 0.90,
      5: 1,
    }
  },
}

const shorthandProps = PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])

Box.displayName = 'Box'

Box.propTypes = {
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
  borderColor: shorthandProps,
  borderWidth: shorthandProps,
  borderRadius: shorthandProps,
  children: PropTypes.any,
  childSpacing: PropTypes.number,
  childLayout: PropTypes.oneOf(['column', 'row']),
  childAlign: PropTypes.oneOf(['start', 'end', 'center', 'stretch']),
  childWrap: PropTypes.oneOf(['wrap', 'nowrap']),
  childJustify: PropTypes.oneOf(['start', 'end', 'center', 'space-between', 'space-around']),
  margin: shorthandProps,
  opacity: PropTypes.number,
  padding: shorthandProps,
  theme: PropTypes.object,
  max: PropTypes.bool,
}

Box.defaultProps = {
  theme: {
    platform: 'web'
  },
  childSpacing: 0,
  childLayout: 'column',
  childJustify: 'stretch',
  max: false
}

function Box(props) {

  const {
    backgroundColor,
    backgroundImage,
    borderColor,
    borderWidth,
    borderRadius,
    children,
    childSpacing,
    childLayout,
    childAlign,
    childWrap,
    childJustify,
    height,
    margin,
    opacity,
    padding,
    theme,
    max,
  } = props

  const { platform } = theme

  const isWeb   = platform === 'web'
  const View    = isWeb ? styledWeb['div'] : styledNative['View']

  const Container = View`
    ${isWeb && `display: flex;`}
    ${backgroundColor && `background-color: ${theme.color[backgroundColor]}`                          }
    ${borderColor     && `border-color:     ${theme.color[borderColor]}`                              }
    ${borderWidth     && `border-width:     ${themeScale(borderWidth, theme.spacing,  { platform })}` }
    ${margin          && `margin:           ${themeScale(margin, theme.spacing,       { platform })}` }
    ${padding         && `padding:          ${themeScale(padding, theme.spacing,      { platform })}` }
    ${borderRadius    && `border-radius:    ${themeScale(borderRadius, theme.spacing, { platform })}` }
    ${opacity         && `opacity:          ${theme.opacity[opacity]}`                                }
    ${max             && `flex: 1` }
  `
  Container.defaultProps = defaultProps

  const ChildSpacingNegate = View`
    ${isWeb && `display: flex;`}
    ${childSpacing && `margin: ${themeScale(childSpacing, theme.spacing, { platform, negate: true, half: true })}`}
    ${childLayout  && `flex-direction: ${childLayout}`}
    flex: 1;
  `
  ChildSpacingNegate.defaultProps = defaultProps

  const Child = View`
    ${isWeb && `display: flex`}
    ${props => props && `flex-grow: 1` }
    ${childSpacing && `padding: ${themeScale(childSpacing, theme.spacing, { platform, half: true })}`}
  `
  Child.defaultProps = defaultProps

  const handleChild = (child) => {
    const props = {...child.props}
    return <Child props={props}>{child}</Child>
  }

  return (
    <Container>
      <ChildSpacingNegate>
        { Children.map(children, handleChild) }
      </ChildSpacingNegate>
    </Container>
  )

}

const BoxWithTheme = withTheme(Box)

export {
  BoxWithTheme as default,
  Box
}
