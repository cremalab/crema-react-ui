import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Box from '.'
// import { text, number, array } from '@kadira/storybook-addon-knobs'

storiesOf('Box', module)
  .add('childLayout column', () => (
    <Box
      backgroundColor='secondary'
      padding={[8]}
      childSpacing={1}
      >
      <Box color='secondary' borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      <Box color='secondary' borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      <Box color='secondary' borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      <Box color='secondary' borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      <Box color='secondary' borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      <Box color='secondary' borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      <Box color='secondary' borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      <Box color='secondary' borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
    </Box>
  ))
  .add('childLayout row', () => (
    <Box
      backgroundColor='secondary'
      padding={[8]}
      childLayout='row'
      childSpacing={1}
      >
      <Box color='secondary' borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      <Box color='secondary' borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      <Box color='secondary' borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      <Box color='secondary' borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      <Box color='secondary' borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      <Box color='secondary' borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      <Box color='secondary' borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      <Box color='secondary' borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
    </Box>
  ))
