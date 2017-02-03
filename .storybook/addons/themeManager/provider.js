import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme, darkTheme } from 'config/theme'
import addons from '@kadira/storybook-addons'

const channel = addons.getChannel()
const themes = {
  default: defaultTheme,
  dark: darkTheme
}

class ThemeManagerProvider extends React.Component {
  constructor() {
    super()
    this.state = { theme: 'default' }
  }

  componentWillMount() {
    channel.on('themeManager/change', (theme) => {
      console.log('onchange', theme)
      this.setState({ theme })
    })
  }

  render() {
    const { theme } = this.state
    return <ThemeProvider theme={themes[theme]}>
      { this.props.children }
    </ThemeProvider>
  }
}

export { ThemeManagerProvider as default }
