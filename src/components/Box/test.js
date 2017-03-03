import React from 'react'
import { Box as BoxWeb } from './Web'
import { Box as BoxNat } from './Native'
import { shallow } from 'enzyme'

describe('<Box /> Web', () => {


  describe('render', () => {
    it('without children', () => {
      const wrapper = shallow(<BoxWeb />)
      expect(wrapper.length).toBe(1)
    })
    it('with children', () => {
      const wrapper = shallow(<BoxWeb>Hi</BoxWeb>)
      expect(wrapper.find('Child').shallow().text())
        .toBe('Hi')
    })
  })

  describe('props', () => {
    it(`default`, () => {
      const wrapper = shallow(
        <BoxWeb>
          Hi
        </BoxWeb>
      )
      expect(wrapper.unrendered.props).toMatchSnapshot()
    })
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
    it(`childSpacing`)
    it(`childLayout`)
    it(`childAlign`)
    it(`childWrap`)
    it(`childJustify`)
  })

})

describe('<Box /> Native', () => {

  describe('render', () => {
    it('without children', () => {
      const wrapper = shallow(<BoxNat />)
      expect(wrapper.length).toBe(1)
    })
    // it('with children', () => {
    //   const wrapper = render(<BoxNat><BoxNat/></BoxNat>)
    //   expect(wrapper.length)
    //     .toBe(1)
    // })
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
