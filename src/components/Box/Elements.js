import web, { css } from 'styled-components'
import native from 'styled-components/native'
import { scaleLens, colorLens } from 'utils/themeLenses'

const Container = css`
  background-color:    ${colorLens('backgroundColor')};
  margin:              ${scaleLens('margin')};
  margin-top:          ${scaleLens('marginTop')};
  padding:             ${scaleLens('padding')};
  border-radius:       ${scaleLens('borderRadius')};
`

const Child = css`
  margin-top:          ${scaleLens('marginTop')};
`

const Text = css`
  color:            ${colorLens('color')}
`

export const ContainerNative = native.View`${Container}`
export const ChildNative = native.Text`${Child}`
export const TextNative = native.Text`${Text}`

export const ContainerWeb = web.div`${Container}`
export const ChildWeb = web.div`${Child}`
export const TextWeb = web.span`${Text}`
