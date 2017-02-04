import React from 'react'
import BoxWeb from './Web'
import BoxNative from './Native'
import { ChildWeb, TextWeb, ChildNative, TextNative } from './Elements'
import { shallow } from 'enzyme'

describe('Box', () => {

  describe('BoxWeb', () => {

    it('renders', () => {
      const wrapper = shallow(<BoxWeb />)
      expect(wrapper.length).toBe(1)
    })

    it('renders text inside Inner', () => {
      const actual = shallow(<BoxWeb>Deric</BoxWeb>)
        .find('Box')
        .shallow()
        .find(TextWeb)
        .children()
        .text()
      expect(actual).toEqual('Deric')
    })

    it('renders node without Inner', () => {
      const actual = shallow(<BoxWeb><div>deric</div></BoxWeb>)
        .find('Box')
        .shallow()
        .find(TextWeb)
        .length
      expect(actual).toBe(0)
    })

    it('wraps children in Container if childSpacing', () => {
      const actual = shallow(
        <BoxWeb childSpacing={2}>
          <div>ross</div>
          <div>deric</div>
        </BoxWeb>
      )
        .find('Box')
        .shallow()
        .find(ChildWeb)
        .length
      expect(actual).toBe(2)
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
        .find(TextNative)
        .children()
        .text()
      expect(actual).toBe('Deric')
    })

    it('wraps children in Container if childSpacing', () => {
      const actual = shallow(
        <BoxNative padding={4} childSpacing={4}>
          <BoxNative>ross</BoxNative>
          <BoxNative>deric</BoxNative>
        </BoxNative>
      )
        .find('Box')
        .shallow()
        .find(ChildNative)
        .length
      expect(actual).toBe(2)
    })

  })

})
