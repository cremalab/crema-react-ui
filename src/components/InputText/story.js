import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Web from './Web'
import Native from './Native'
import { Box } from 'components/indexWeb'

storiesOf('InputText', module)
  .add('Default', () => {
    return (
      <Box
        padding={6}
        childSpacing={6}>
        <p>Web</p>
        <Web placeholder='Placeholder...' />
        <p>Native</p>
        <Native placeholder='Placeholder...' />
      </Box>
    )
  })
