import React from 'react'
import Base from './Base'
import styled from 'styled-components/native'
import propToUnit from 'utils/propToUnit'


const Container = styled.View`
  padding: ${propToUnit('padding')};
`

const Inner = styled.Text`
`

export default function Native(props) {
  return <Base
    platform='native'
    deps={{
      Container: Container,
      Inner: Inner
    }}
    {...props}
  />
}
