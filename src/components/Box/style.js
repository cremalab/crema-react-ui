import web, { css } from 'styled-components'
import native from 'styled-components/native'
import { unit, color } from '../../utils/style'

const ContainerStyle = css`
  background-color: ${color('background')};
  margin:     ${unit('margin')};
  padding:    ${unit('padding')};
  radius:     ${unit('radius')};
`

const InnerStyle = css`
  color:      ${color('color')}
`

export const ContainerNative = native.View`${ContainerStyle}`
export const InnerNative = native.Text`${InnerStyle}`

export const ContainerWeb = web.div`${ContainerStyle}`
export const InnerWeb = web.span`${InnerStyle}`
