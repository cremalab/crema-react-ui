import React from 'react'
import { storiesOf } from '@kadira/storybook'
import BoxWeb from './Web'
import BoxNative from './Native'
import { text, number } from '@kadira/storybook-addon-knobs'
import styled from 'styled-components/native'

const View = styled.View``

storiesOf('Box', module)
  .add('default', () => (
    <BoxWeb
      padding={number('Padding', 0)}
    >
      { text('Label', 'BoxWeb') }
    </BoxWeb>
  ))
  .add('native', () => (
    <BoxNative
      padding={number('Padding', 0)}
    >
      { text('Label', 'BoxNative') }
    </BoxNative>
  ))
