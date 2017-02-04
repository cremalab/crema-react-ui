import React from 'react'
import { configure, addDecorator } from '@kadira/storybook'
import { withKnobs } from '@kadira/storybook-addon-knobs'
import ThemeManagerProvider from './addons/themeManager/provider'

addDecorator((story, context) => {
  const storyWithKnobs = withKnobs(story, context)
  return <ThemeManagerProvider>{ storyWithKnobs }</ThemeManagerProvider>
})

const req = require.context('../src/', true, /story\.js$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
