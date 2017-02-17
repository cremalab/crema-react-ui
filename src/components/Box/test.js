import React from 'react'
import { Box } from '.'
import { shallow, render } from 'enzyme'

describe('<Box />', () => {

  it('renders', () => {
    const wrapper = shallow(<Box />)
    expect(wrapper.length).toBe(1)
  })

  describe('theme prop', () => {
    it(`backgroundColor`)
    it(`backgroundImage`)
    it(`borderColor`)
    it(`borderWidth`)
    it(`borderRadius`)
    it(`children`)
    it(`margin`)
    it(`opacity`)
    it(`padding`)
    it(`theme`)
  })

  describe('convenience prop', () => {
    it(`childSpacing`)
    it(`childLayout`)
    it(`childAlign`)
    it(`childWrap`)
    it(`childJustify`)
  })

})
