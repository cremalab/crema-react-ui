import React from 'react'
import { storiesOf } from '@kadira/storybook'
import BoxWeb from './Web'
import BoxNative from './Native'
// import { text, number, array } from '@kadira/storybook-addon-knobs'

const BoxWebDisplay = (props) => <BoxWeb
  padding={4}
  backgroundColor={'primary'}
  color={'white'}
  {...props}
/>

const BoxNativeDisplay = (props) => <BoxNative
  padding={4}
  backgroundColor={'primary'}
  color={'white'}
  {...props}
/>

storiesOf('Box', module)
  .add('web', () => (
    <BoxWeb childSpacing={3} padding={3}>
      <BoxWebDisplay>
        Box Web
      </BoxWebDisplay>
      <BoxWebDisplay>
        Box Web
      </BoxWebDisplay>
      <BoxWebDisplay>
        Box Web
      </BoxWebDisplay>
      <BoxWebDisplay>
        Box Web
      </BoxWebDisplay>
      <BoxWebDisplay>
        Box Web
      </BoxWebDisplay>
      <BoxWebDisplay>
        Box Web
      </BoxWebDisplay>
    </BoxWeb>
  ))
  .add('native', () => (
    <BoxNativeDisplay>
      Box Native
    </BoxNativeDisplay>
  ))
  .add('child spacing', () => (
    <BoxNative childSpacing={2}>
      <BoxNativeDisplay>
        Box
      </BoxNativeDisplay>
      <BoxNativeDisplay>
        Box
      </BoxNativeDisplay>
      <BoxNativeDisplay>
        Box
      </BoxNativeDisplay>
    </BoxNative>
  ))
