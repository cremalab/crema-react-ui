import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Box from './Web'
import BoxN from './Native'
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
      childLayout='column'
      childSpacing={3}
      padding={3}
      backgroundColor='primary'
      >
      <BoxN
        childSpacing={2}
        backgroundColor='secondary'
        >
        <BoxN borderRadius={1} padding={4} backgroundColor='tertiary'>BoxN</BoxN>
        <BoxN borderRadius={1} padding={4} backgroundColor='tertiary'>BoxN</BoxN>
        <BoxN borderRadius={1} padding={4} backgroundColor='tertiary'>BoxN</BoxN>
        <BoxN borderRadius={1} padding={4} backgroundColor='tertiary'>BoxN</BoxN>
        <BoxN borderRadius={1} padding={4} backgroundColor='tertiary'>BoxN</BoxN>
        <BoxN borderRadius={1} padding={4} backgroundColor='tertiary'>BoxN</BoxN>
        <BoxN borderRadius={1} padding={4} backgroundColor='tertiary'>BoxN</BoxN>
        <BoxN borderRadius={1} padding={4} backgroundColor='tertiary'>BoxN</BoxN>
      </BoxN>
      <Box
        childSpacing={2}
        childLayout='row'
        min
        >
        <Box borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
        <Box min borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
        <Box min borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
        <Box min borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
        <Box min borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
        <Box min borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
        <Box min borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
        <Box borderRadius={1} padding={4} backgroundColor='tertiary'>Box</Box>
      </Box>
    </Box>
  ))
