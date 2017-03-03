import React, { PureComponent, PropTypes, Children } from 'react'
import { themeScale, alignments } from 'utils/style'

const shorthandProps = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.arrayOf(PropTypes.number)
])

function BoxFactory({elements, platform}) {

  class Component extends PureComponent {
    render() {

      const {
        backgroundColor,
        backgroundImage,
        borderColor,
        borderWidth,
        borderStyle,
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
        ...rest,
      } = this.props

      const isWeb   = platform === 'web'
      const View    = isWeb ? elements['div'] : elements['View']

      const Container = View`
        ${isWeb ? `
          display: flex;
          box-sizing: border-box;
        ` : null }
        ${ childJustify    ? `justify-content:  ${alignments[childJustify]}`                              : null }
        ${ backgroundColor ? `background-color: ${theme.color[backgroundColor]}`                          : null }
        ${ borderWidth     ? `border-width:     ${themeScale(borderWidth, theme.spacing,  { platform })}` : null }
        ${ borderColor && borderWidth ? `border-color:     ${theme.color[borderColor]}`                   : null }
        ${ borderStyle && borderWidth ? `border-style:     ${borderStyle}`                                : null }
        ${ margin          ? `margin:           ${themeScale(margin, theme.spacing, { platform })}`       : null }
        ${ padding         ? `padding:          ${themeScale(padding, theme.spacing,      { platform })}` : null }
        ${ borderRadius    ? `border-radius:    ${themeScale(borderRadius, theme.spacing, { platform })}` : null }
        ${ opacity         ? `opacity:          ${theme.opacity[opacity]}`                                : null }
        flex-grow: 1;
      `
      Container.displayName = 'Container'

      const Spacer = View`
        ${ isWeb ? `display: flex;` : null }
        ${ childAlign      ? `align-items:      ${alignments[childAlign]}` : null }
        margin: ${themeScale(childSpacing, theme.spacing, { platform, negate: true, half: true })};
        flex-direction: ${childLayout};
        flex-grow: 1;
        flex: 1;
      `
      Spacer.displayName = 'Spacer'

      const Child = View`
        ${ isWeb ? `display: flex` : null }
        flex-grow: ${props => props.min ? 0 : 1}
        padding: ${themeScale(childSpacing, theme.spacing, { platform, half: true })}
      `
      Child.displayName = 'Child'

      const handleChild = (child) => {
        const props = {...child.props}
        return <Child min={props.min}>{child}</Child>
      }

      return (
        <Container>
          <Spacer>
            { Children.map(children, handleChild) }
          </Spacer>
        </Container>
      )
    }

  }

  Component.displayName = 'Box'

  Component.propTypes = {
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    borderColor: PropTypes.string,
    borderWidth: shorthandProps,
    borderStyle: PropTypes.oneOf(['solid', 'dashed', 'dotted']),
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

  Component.defaultProps = {
    theme: {
      color: {},
      spacing: {
        unit: 'px'
      },
      opacity: {}
    },
    opacity: 1,
    childSpacing: 0,
    childLayout: 'column',
    childJustify: 'start',
    min: false
  }

  return Component

}

export {
  BoxFactory as default
}
