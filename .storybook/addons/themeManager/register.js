import React from 'react'
import addons from '@kadira/storybook-addons'
import { ADDON_TITLE, ADDON_CHANGE_EVENT, ADDON_THEME_PARAM, ADDON_THEMES, ADDON_NAME } from './config'
import { getTheme, setTheme } from './storage'

class ThemeManager extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = { theme: getTheme() }
    this.onChangeTheme = this.onChangeTheme.bind(this)
  }

  onChangeTheme() {
    this.changeTheme(this.refs.theme.value)
  }

  changeTheme(theme) {
    const { api, channel } = this.props
    this.setState({ theme })
    setTheme(theme)
    channel.emit(ADDON_CHANGE_EVENT, theme)
  }

  render() {
    const { theme } = this.state

    return (
      <div>
        <div>
          <label style={{ display: 'block' }}>Select Theme</label>
          <select value={ theme } onChange={this.onChangeTheme} ref="theme">
            {
              Object.keys(ADDON_THEMES).map((key, i) => {
                return <option value={key} key={i}>{ ADDON_THEMES[key].title }</option>
              })
            }
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

addons.register(ADDON_NAME, (api) => {
  const channel = addons.getChannel()
  addons.addPanel(ADDON_NAME, {
    title: ADDON_TITLE,
    render: () => (
      <ThemeManager channel={channel} api={api}/>
    ),
  })
})
