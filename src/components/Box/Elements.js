import web, { css } from 'styled-components'
import native from 'styled-components/native'
import { styleBy, scaleLens, colorLens } from 'utils/themeLenses'

const defaultProps = {
  theme: {
    color: {
      primary: 'teal',
      white: 'white',
    },
    scaleUnit: 'px',
    scale: {
      '0': 0,
      '1': 4,
      '2': 8,
      '3': 12,
      '4': 16,
      '5': 20,
      '6': 24,
      '7': 28,
      '8': 32,
    }
  }
}

const Container = css`
  ${styleBy(colorLens, 'background-color', 'backgroundColor')}
  ${styleBy(scaleLens, 'margin',           'margin')}
  ${styleBy(scaleLens, 'padding',          'padding')}
  ${styleBy(scaleLens, 'border-radius',    'borderRadius')}
`
Container.defaultProps = defaultProps

const Child = css`
  ${styleBy(scaleLens, 'margin-top', 'childSpacing')}
`
Child.defaultProps = defaultProps

const Text = css`
  ${styleBy(colorLens, 'color', 'color')}
`
Text.defaultProps = defaultProps

export const ContainerNative = native.View`${Container}`
export const ChildNative = native.Text`${Child}`
export const TextNative = native.Text`${Text}`

export const ContainerWeb = web.div`${Container}`
export const ChildWeb = web.div`${Child}`
export const TextWeb = web.span`${Text}`
