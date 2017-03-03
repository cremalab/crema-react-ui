import { withTheme } from 'styled-components'
import styled from 'styled-components/native'
import ComponentFactory from '.'
import { Box } from '../indexNative'

export const Component = ComponentFactory({
  elements: {
    styled,
    Box
  },
  platform: 'native'
})
export default withTheme(Component)
