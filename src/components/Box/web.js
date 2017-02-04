import React from 'react'
import Base from './Base'
import {
  ContainerWeb as Container,
  ChildWeb as Child,
  TextWeb as Text
} from './Elements'

export default function Web(props) {
  return <Base
    platform='web'
    elements={{
      Container,
      Child,
      Text
    }}
    {...props}
  />
}
