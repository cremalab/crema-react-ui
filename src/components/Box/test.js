import React from 'react'
import { Box as BoxWeb } from './Web'
import { Box as BoxNat } from './Native'
import { shallow } from 'enzyme'

describe('<Box /> Web', () => {

  it('renders', () => {
    const wrapper = shallow(<BoxWeb />)
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

describe('<Box /> Native', () => {

  it('renders', () => {
    const wrapper = shallow(<BoxNat />)
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
