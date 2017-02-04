import React from 'react'
import BoxWeb from './Web'
import BoxNative from './Native'
import { shallow } from 'enzyme'
import { InnerWeb, InnerNative } from './style'

describe('Box', () => {

  describe('BoxWeb', () => {

    it('renders', () => {
      const wrapper = shallow(<BoxWeb />)
      expect(wrapper.length).toBe(1)
    })

    it('renders text inside Inner', () => {
      const actual = shallow(<BoxWeb>Deric</BoxWeb>)
        .find('Base')
        .shallow()
        .find(InnerWeb)
        .children()
        .text()
      expect(actual).toEqual('Deric')
    })

    it('renders node without Inner', () => {
      const actual = shallow(<BoxWeb><div>deric</div></BoxWeb>)
        .find('Base')
        .shallow()
        .find(InnerWeb)
        .length
      expect(actual).toBe(0)
    })

  })

  describe('Native', () => {

    it('renders', () => {
      const wrapper = shallow(<BoxNative />)
      expect(wrapper.length).toBe(1)
    })

    it('renders', () => {
      const actual = shallow(<BoxNative>Deric</BoxNative>)
        .find('Base')
        .shallow()
        .find(InnerNative)
        .children()
        .text()
      expect(actual).toBe('Deric')
    })

  })

})
