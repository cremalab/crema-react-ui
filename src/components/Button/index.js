import React from 'react'
import web from 'styled-components'
import native from 'styled-components/native'

const theme = {
  buttonRadius: 50,
  buttonPaddingVertical: 8,
  buttonPaddingHorizontal: 20,
  fontSize: 16,
}

const buttonStyles = env => `
  background-color: #00c;
  padding: ${env == 'web'
    ? theme.buttonPaddingVertical + 'px ' + theme.buttonPaddingHorizontal + 'px'
    : theme.buttonPaddingVertical + ' ' + theme.buttonPaddingHorizontal};
  border-radius: ${env == 'web' ? theme.buttonRadius + 'px' : theme.buttonRadius};
  border: 0;
  margin: 0;
  &:hover {
    background-color: red;
  }
`

const textStyles = env => `
  color: white;
  text-align: center;
  font-size: ${env == 'web' ? theme.fontSize + 'px' : theme.fontSize};
`

const buttonWeb = web.button`
  ${buttonStyles('web')}
`

const textWeb = web.div`
  ${textStyles('web')}
`

const buttonNative = native.TouchableHighlight`
  ${buttonStyles('native')}
`

const textNative = native.Text`
  ${textStyles('native')}
`

const buttonBase = ({Button, Text}) => (props) =>
(
  <Button onClick={props.onPress} {...props}>
    <Text>{props.children}</Text>
  </Button>
)

const ButtonWeb    = buttonBase({
  Button: buttonWeb,
  Text: textWeb
})

const ButtonNative = buttonBase({
  Button: buttonNative,
  Text: textNative
})

export {
  ButtonWeb,
  ButtonNative
}
