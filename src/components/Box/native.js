import React from 'react'
import Base from './Base'
import styled from 'styled-components/native'

const Container = styled.View``

const Inner = styled.Text``

const deps = {
  platform: 'native',
  Container: Container,
  Inner: Inner
}

export default function Native(props) {
  return <Base deps={deps} {...props} />
}
