import React, { PureComponent, PropTypes } from 'react'
import { themeScale } from 'utils/style'

function ComponentFactory({ elements, platform }) {

  class Component extends PureComponent {

    constructor() {
      super()
      this.handleFocus = this.handleFocus.bind(this)
      this.state = {
        focused: false
      }
    }

    handleFocus(state) {
      this.setState({
        focused: state,
      })
    }

    componentDidUpdate() {
      const { state, input } = this
      if (state.focused) {
        input.focus()
      }
    }

    render() {
      const { props, state } = this
      const { styled, Box } = elements

      const {
        theme,
        padding,
        fontSize,
        ...rest
      } = props

      const {
        focused
      } = state

      const isWeb   = platform === 'web'
      const InputEl = styled[isWeb ? 'input' : 'TextInput']

      const Input = InputEl`
        backgroundColor: transparent;
        border-width: 0;
        width: 100%;
        outline: none;
        ${ theme.InputTextPadding ? `padding: ${themeScale(theme.InputTextPadding, theme.spacing, { platform })}` : null }
        ${ theme.InputTextColor ? `color: ${focused ? theme.color[theme.InputTextColorFocused] : theme.color[theme.InputTextColor]}` : null }
        ${ fontSize ? `font-size: ${themeScale(fontSize, theme.fontSize, { platform })}` : null }
      `

      return (
        <Box
          backgroundColor={focused ? theme.InputTextBackgroundColorFocused : theme.InputTextBackgroundColor}
          borderRadius={theme.InputTextBorderRadius}
          borderColor={focused ? theme.InputTextBorderColorFocused : theme.InputTextBorderColor}
          borderWidth={theme.InputTextBorderWidth}
          borderStyle='solid'>
            <Input
              onFocus={() => this.handleFocus(true)}
              onBlur={() => this.handleFocus(false)}
              innerRef={(comp) => { this.input = comp }}
              {...rest}
            />
        </Box>
      )
    }

  }

  Component.displayName = 'InputText'

  Component.propTypes = {
    theme: PropTypes.object,
    children: PropTypes.any,
    padding: PropTypes.any,
    fontSize: PropTypes.number
  }

  Component.defaultProps = {
    fontSize: 6,
    padding: [4, 5],
    theme: {
      color: {},
      spacing: {
        unit: 'px'
      },
      fontSize: {
        unit: 'px'
      },
      opacity: {},
      InputTextBackgroundColor: 'white',
      InputTextBackgroundColorFocused: 'white',
      InputTextBorderRadius: 3,
      InputTextBorderColor: 'black',
      InputTextBorderColorFocused: 'highlight',
      InputTextBorderWidth: 2,
      InputTextPadding: [4,5],
    },
  }

  return Component

}

export {
  ComponentFactory as default
}
