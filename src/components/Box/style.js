import web, { css } from 'styled-components'
import native from 'styled-components/native'
import { scaleLens, colorLens } from 'utils/themeLenses'

const Container = css`
  background-color: ${colorLens('background')};
  margin:           ${scaleLens('margin')};
  padding:          ${scaleLens('padding')};
  radius:           ${scaleLens('radius')};
`

const Inner = css`
  color:            ${colorLens('color')}
`

export const ContainerNative = native.View`${Container}`
export const InnerNative = native.Text`${Inner}`

export const ContainerWeb = web.div`${Container}`
export const InnerWeb = web.span`${Inner}`
