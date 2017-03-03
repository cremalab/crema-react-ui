import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Text from './Web'
import NativeText from './Native'

const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Donec ullamcorper pharetra odio, ut eleifend ante tristique nec.
Mauris porttitor neque nec purus tempus, at posuere urna aliquet.
`

const StoryText = props => <div>
  <Text {...props} children={text} />
  <hr />
  [native]:
  <NativeText {...props} children={text} />
</div>

storiesOf('Text', module)
  .add('default', () => <StoryText />)
  .add('bold', () => <StoryText weight="bold" />)
  .add('size 5', () => <StoryText size={5} />)
  .add('size 5 bold', () => <StoryText size={5} weight="bold" />)
  .add('family secondary', () => <StoryText family="secondary" />)
  .add('color primary', () => <StoryText color="primary" />)
  .add('italic 4', () => <StoryText italic={true} size={4} />)
