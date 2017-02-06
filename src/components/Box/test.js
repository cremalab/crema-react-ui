import React from 'react'
import { Box } from '.'
import { shallow } from 'enzyme'
import { ThemeProvider, withTheme } from 'styled-components'

describe('Box', () => {

  describe('BoxWeb', () => {


    it('renders', () => {
      const wrapper = shallow(<Box />)
      expect(wrapper.length).toBe(1)
    })

    it('renders text inside Inner', () => {
      const actual = shallow(<Box>Deric</Box>)
        .shallow()
        .find('div')
        .shallow()

        // .debug()
      console.log(actual)
      // expect(actual).toEqual('Deric')
    })

    // it('renders node without Inner', () => {
    //   const actual = shallow(<BoxWeb><div>deric</div></BoxWeb>)
    //     .find('Box')
    //     .shallow()
    //     .debug()
    //   expect(actual).toBe(0)
    // })
    //
    // it('wraps children in Container if childSpacing', () => {
    //   const actual = shallow(
    //     <BoxWeb childSpacing={2}>
    //       <div>ross</div>
    //       <div>deric</div>
    //     </BoxWeb>
    //   )
    //     .find('Box')
    //     .shallow()
    //     .debug()
    //   expect(actual).toBe(2)
    // })

  })

  // describe('Native', () => {
  //
  //   it('renders', () => {
  //     const wrapper = shallow(<BoxNative />)
  //     expect(wrapper.length).toBe(1)
  //   })
  //
  //   it('renders', () => {
  //     const actual = shallow(<BoxNative>Deric</BoxNative>)
  //       .find('Base')
  //       .shallow()
  //       .debug()
  //     expect(actual).toBe('Deric')
  //   })
  //
  //   it('wraps children in Container if childSpacing', () => {
  //     const actual = shallow(
  //       <BoxNative padding={4} childSpacing={4}>
  //         <BoxNative>ross</BoxNative>
  //         <BoxNative>deric</BoxNative>
  //       </BoxNative>
  //     )
  //       .find('Box')
  //       .shallow()
  //       .debug()
  //     expect(actual).toBe(2)
  //   })
  //
  // })

})
