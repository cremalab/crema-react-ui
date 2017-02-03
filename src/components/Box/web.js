import React from 'react'
import Base from './Base'
import styled from 'styled-components'

const div = styled.div`
  background: red
`

const deps = {
  platform: 'web',
  Container: div
}

export default function Web(props) {
  return <Base deps={deps} {...props} />
}
