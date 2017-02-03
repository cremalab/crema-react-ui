import React from 'react'
import { storiesOf } from '@kadira/storybook'
import BoxWeb from './Web'
import BoxNative from './Native'
import { text, number } from '@kadira/storybook-addon-knobs'

storiesOf('Box', module)
  .add('default', () => (
    <BoxWeb
      padding={number('Padding', 1)}
      background={text('Background', 'primary')}
      color={text('Background', 'white')}
    >
      { text('Label', 'BoxWeb') }
    </BoxWeb>
  ))
  .add('native', () => (
    <BoxNative
      padding={number('Padding', 1)}
      background={text('Background', 'primary')}
      color={text('Background', 'white')}
    >
      { text('Label', 'BoxNative') }
    </BoxNative>
  ))
