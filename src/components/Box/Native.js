import { withTheme } from 'styled-components'
import Native from 'styled-components/native'
import BoxFactory from '.'

export const Box = BoxFactory({elements: Native, platform: 'native'})
export default withTheme(Box)
