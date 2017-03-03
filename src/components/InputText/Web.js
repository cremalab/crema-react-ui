import styled, { withTheme } from 'styled-components'
import ComponentFactory from '.'
import { Box } from '../indexWeb'

export const Component = ComponentFactory({
  elements: {
    styled,
    Box
  },
  platform: 'web'
})
export default withTheme(Component)
