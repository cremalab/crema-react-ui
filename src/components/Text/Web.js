import { withTheme } from 'styled-components'
import Web from 'styled-components'
import TextFactory from '.'

export const Text = TextFactory({elements: Web, platform: 'web'})
export default withTheme(Text)
