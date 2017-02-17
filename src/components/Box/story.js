import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Box from '.'
// import { text, number, array } from '@kadira/storybook-addon-knobs'

storiesOf('Box', module)
  .add('childLayout column', () => (
    <Box
      backgroundColor='secondary'
      padding={4}
      childSpacing={1}
      max
      >
      <Box borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      <Box borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      <Box borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      <Box borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      <Box borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      <Box borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      <Box borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      <Box borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
    </Box>
  ))
  .add('childLayout row', () => (
    <Box
      backgroundColor='secondary'
      padding={4}
      // childSpacing={1}
      childLayout='column'
      >
      <Box max borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      <Box borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      <Box borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      <Box borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      <Box borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      <Box borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      <Box borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      <Box borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
    </Box>
  ))
