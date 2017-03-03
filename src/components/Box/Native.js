// import { withTheme } from 'styled-components'
import Native, { withTheme } from 'styled-components/native'
import BoxFactory from '.'

export const Box = BoxFactory({elements: Native, platform: 'native'})
export default withTheme(Box)
