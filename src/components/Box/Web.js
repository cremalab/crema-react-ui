import { withTheme } from 'styled-components'
import Web from 'styled-components'
import BoxFactory from '.'

export const Box = BoxFactory({elements: Web, platform: 'web'})
export default withTheme(Box)
