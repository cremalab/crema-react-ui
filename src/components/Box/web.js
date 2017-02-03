import React from 'react'
import Base from './Base'
import {
  ContainerWeb as Container,
  InnerWeb as Inner 
} from './style'

export default function Web(props) {
  return <Base
    platform='web'
    deps={{
      Container,
      Inner
    }}
    {...props}
  />
}
