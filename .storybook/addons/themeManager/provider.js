import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme, darkTheme } from 'config/theme'
import addons from '@kadira/storybook-addons'
import { ADDON_CHANGE_EVENT, ADDON_THEMES } from './config'

const channel = addons.getChannel()

class ThemeManagerProvider extends React.Component {
  constructor() {
    super()
    this.state = { theme: 'default' }
  }

  componentWillMount() {
    channel.on(ADDON_CHANGE_EVENT, (theme) => {
      console.log('>>>>>onchange', theme)
      this.setState({ theme })
    })
  }

  render() {
    const { theme } = this.state
    return <ThemeProvider theme={ADDON_THEMES[theme].config}>
      { this.props.children }
    </ThemeProvider>
  }
}

export { ThemeManagerProvider as default }
