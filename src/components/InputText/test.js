import React from 'react'
import { Component as Web } from './Web'
import { Component as Native } from './Native'
import { shallow } from 'enzyme'


describe(Web.displayName, () => {

  describe('Web', () => {
    it('Renders', () => {
      const recieved = shallow(<Web />).length
      const expected = 1
      expect(recieved).toEqual(expected)
    })
  })

  describe('Native', () => {
    it('Renders', () => {
      const recieved = shallow(<Native />).length
      const expected = 1
      expect(recieved).toEqual(expected)
    })
  })

})
