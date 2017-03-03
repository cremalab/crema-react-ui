import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Web from './Web'
import Native from './Native'

storiesOf(Web.displayName, module)
  .add('Web', () => {
    return (
      <Web />
    )
  })
  .add('Native', () => {
    return (
      <Native />
    )
  })
