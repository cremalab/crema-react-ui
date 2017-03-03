import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Component as Web } from './Web'
import { Component as Native } from './Native'

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
