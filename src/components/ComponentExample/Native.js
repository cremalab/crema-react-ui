// import { withTheme } from 'styled-components'
import Native, { withTheme } from 'styled-components/native'
import ComponentFactory from '.'

export const Component = ComponentFactory({elements: Native, platform: 'native'})
export default withTheme(Component)
