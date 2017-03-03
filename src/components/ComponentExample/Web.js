import { withTheme } from 'styled-components'
import Web from 'styled-components'
import ComponentFactory from '.'

export const Component = ComponentFactory({elements: Web, platform: 'web'})
export default withTheme(Component)
