import React from 'react'
import addons from '@kadira/storybook-addons'
import { defaultTheme, darkTheme } from 'config/theme'

const themes = ['default', 'dark']

//console.log(storybookAPI.getQueryParam('theme'))

const styles = {
  themePanel: {
    margin: 10,
    fontFamily: 'Arial',
    fontSize: 14,
    color: '#444',
    width: '100%',
    overflow: 'auto',
  }
}

class ThemeManager extends React.Component {
  constructor(...args) {
    super(...args)
    const { api, channel } = args[0]
    const theme = api.getQueryParam('theme')
    this.state = { theme }
    channel.emit('themeManager/change', theme)
    this.onChangeTheme = this.onChangeTheme.bind(this)
  }

  onChangeTheme() {
    this.changeTheme(this.refs.theme.value)
  }

  changeTheme(theme) {
    const { api, channel } = this.props
    this.setState({ theme })
    api.setQueryParams({ theme })
    channel.emit('themeManager/change', theme)
  }

  render() {
    const { theme } = this.state

    return (
      <div style={styles.themePanel}>
        <div>
          <label style={{ display: 'block' }}>Select Theme</label>
          <select value={ theme } onChange={this.onChangeTheme} ref="theme">
            <option value="default">Default</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>
    );
  }

  // This is some cleanup tasks when the Notes panel is unmounting.
  componentWillUnmount() {
    if(this.stopListeningOnStory) {
      this.stopListeningOnStory()
    }

    this.unmounted = true
    const { channel, api } = this.props
    //channel.removeListener('kadira/notes/add_notes', this.onAddNotes);
  }
}

addons.register('themeManager', (api) => {
  const channel = addons.getChannel()
  addons.addPanel('themeManager', {
    title: 'Theme Manager',
    render: () => (
      <ThemeManager channel={channel} api={api}/>
    ),
  })
})
