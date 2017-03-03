import { withTheme } from 'styled-components'
import Native from 'styled-components/native'
import TextFactory from '.'

export const Text = TextFactory({elements: Native, platform: 'native'})
export default withTheme(Text)
