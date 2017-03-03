import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Box from './Web'

storiesOf('Box', module)
  .add('base', () => {
    return (
      <Box
        padding={[6, 10]}
        childSpacing={6}
        childLayout='row'
        backgroundColor='primary'
        backgroundColorShade={2}>
        <Box
          min
          padding={6}
          borderRadius={6}
          backgroundColor='white'>Hi Deric</Box>
        <Box
          padding={6}
          borderRadius={6}
          backgroundColor='white'/>
      </Box>
    )
  })
