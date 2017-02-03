import * as React from 'react';
import { storiesOf } from '@kadira/storybook';
import { ButtonWeb, ButtonNative } from './index';

storiesOf('Button', {})
  .add('Web', () => {
    return (
      <ButtonWeb>hi there</ButtonWeb>
      // <ButtonWeb children='hi'>Web Button</ButtonWeb>
  )})
  .add('Native', () => (
     <ButtonNative>Native Button</ButtonNative>
  ))
