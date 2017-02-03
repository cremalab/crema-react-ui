import React from 'react'
import { storiesOf } from '@kadira/storybook'
import BoxWeb from './Web'
import BoxNative from './Native'
import { text } from '@kadira/storybook-addon-knobs'
import styled from 'styled-components/native'

const View = styled.View``

storiesOf('Box', module)
  .add('default', () => (
    <BoxWeb>{ text('Label', 'Box with Text') }</BoxWeb>
  ))
  .add('native', () => (
    <BoxNative>{ text('Label', 'Box with Text') }</BoxNative>
  ))
