import React from 'react'
import Base from './Base'
import {
  ContainerNative as Container,
  InnerNative as Inner
} from './style'

export default function Native(props) {
  return <Base
    platform='native'
    deps={{
      Container,
      Inner
    }}
    {...props}
  />
}
