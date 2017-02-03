import React from 'react'
import Base from './Base'
import styled from 'styled-components'
import propToUnit from 'utils/propToUnit'


const div = styled.div`
  padding: ${propToUnit('padding')};
`

const deps = {
  platform: 'web',
  Container: div
}

export default function Web(props) {
  return <Base
    platform='web'
    deps={deps}
    {...props}
  />
}
