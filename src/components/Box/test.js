import React from 'react'
import styledNative from 'styled-components/native'
import { Box } from '.'
import { shallow, render } from 'enzyme'

describe('Box', () => {

  it('renders', () => {
    const wrapper = shallow(<Box />)
    expect(wrapper.length).toBe(1)
  })

  it('renders web text node', () => {
    const actual = render(<Box>Deric</Box>)
      .find('span')
      .text()
    expect(actual).toEqual('Deric')
  })

  it('renders native text node', () => {
    const actual = shallow(<Box theme={{platform: 'native'}}>Deric</Box>)
      .find('Styled(Text)')
      .children()
      .text()
    expect(actual).toEqual('Deric')
  })

  it('renders wrapped child when childSpacing', () => {
    const actual = shallow(<Box childSpacing={2} theme={{platform: 'native'}}>Deric</Box>)
      .find('Styled(View)')
      .length
    expect(actual).toEqual(3)
  })

})
