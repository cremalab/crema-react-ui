import React from 'react'
import { ThemeProvider } from 'styled-components'
import addons from '@kadira/storybook-addons'
import { ADDON_CHANGE_EVENT, ADDON_THEMES, ADDON_NAME } from './config'
import { getTheme } from './storage'

const channel = addons.getChannel()

class ThemeManagerProvider extends React.Component {
  constructor() {
    super()
    this.state = { theme: getTheme() }
  }

  componentWillMount() {
    channel.on(ADDON_CHANGE_EVENT, (theme) => {
      this.setState({ theme })
    })
  }

  render() {
    const { theme } = this.state
    const selectedTheme = ADDON_THEMES[theme].config
    //const newTheme = {...selectedTheme, color: {...selectedTheme.color, secondary: 'pink'}}

    return <ThemeProvider theme={selectedTheme}>
      { this.props.children }
    </ThemeProvider>
  }
}


export { ThemeManagerProvider as default }
