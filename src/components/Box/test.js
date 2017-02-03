import React from 'react'
import BoxWeb from './Web'
import BoxNative from './Native'
import { shallow } from 'enzyme'

describe('Box', () => {

  describe('BoxWeb', () => {

    it('renders', () => {
      const wrapper = shallow(<BoxWeb />)
      expect(wrapper.length).toBe(1)
    })

    it('renders text', () => {
      const actual = shallow(<BoxWeb>Deric</BoxWeb>)
        .find('Box')
        .shallow()
        .children()
        .text()
      expect(actual).toBe('Deric')
    })

  })

  describe('Native', () => {

    it('renders', () => {
      const wrapper = shallow(<BoxNative />)
      expect(wrapper.length).toBe(1)
    })

    it('renders', () => {
      const actual = shallow(<BoxNative>Deric</BoxNative>)
        .find('Box')
        .shallow()
        .find('Styled(View)')
        .shallow()
      // expect(actual).toBe('Deric')
    })

  })

})
