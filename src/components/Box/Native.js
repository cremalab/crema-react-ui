import React from 'react'
import Base from './Base'
import {
  ContainerNative as Container,
  ChildNative as Child,
  TextNative as Text
} from './Elements'

export default function Native(props) {
  return <Base
    platform='native'
    elements={{
      Container,
      Child,
      Text
    }}
    {...props}
  />
}
