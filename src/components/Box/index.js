import React, { PropTypes, Children } from 'react'
import { themeScale } from 'utils/themeLenses'

const shorthandProps = PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])

function BoxFactory({elements, platform}) {

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
    min: PropTypes.bool,
  }

  Box.defaultProps = {
    theme: {
      color: {},
      spacing: {
        unit: 'px'},
      opacity: {}
    },
    childSpacing: 0,
    childLayout: 'column',
    childJustify: 'start',
    min: false
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
      min,
    } = props

    const isWeb   = platform === 'web'
    const View    = isWeb ? elements['div'] : elements['View']

    const Container = View`
      ${isWeb && `
        display: flex;
        box-sizing: border-box;
      `}
      ${backgroundColor && `background-color: ${theme.color[backgroundColor]}`                          }
      ${borderColor     && `border-color:     ${theme.color[borderColor]}`                              }
      ${borderWidth     && `border-width:     ${themeScale(borderWidth, theme.spacing,  { platform })}` }
      ${margin          && `margin:           ${themeScale(margin, theme.spacing,       { platform })}` }
      ${padding         && `padding:          ${themeScale(padding, theme.spacing,      { platform })}` }
      ${borderRadius    && `border-radius:    ${themeScale(borderRadius, theme.spacing, { platform })}` }
      ${opacity         && `opacity:          ${theme.opacity[opacity]}`                                }
      flex-grow: 1;
    `
    Container.displayName = 'Container'

    const Spacer = View`
      ${isWeb        && `display: flex;`}
      margin: ${themeScale(childSpacing, theme.spacing, { platform, negate: true, half: true })};
      flex-direction: ${childLayout};
      flex-grow: 1;
      flex: 1;
    `
    Spacer.displayName = 'Spacer'

    const Child = View`
      ${isWeb && `display: flex`}
      flex-grow: ${props => props.min ? 0 : 1}
      flex-shrink: 0;
      padding: ${themeScale(childSpacing, theme.spacing, { platform, half: true })}
    `
    Child.displayName = 'Child'

    const handleChild = (child) => {
      const props = {...child.props}
      return <Child {...props}>{child}</Child>
    }

    return (
      <Container>
        <Spacer>
          { Children.map(children, handleChild) }
        </Spacer>
      </Container>
    )
  }

  return Box

}

export {
  BoxFactory as default
}
