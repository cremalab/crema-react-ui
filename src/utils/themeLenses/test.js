import { colorLens, scaleLens } from '.'

const props = {
  padding: 5,
  background: 'primary',
  theme: {
    color: {
      primary: 'red'
    },
    scaleUnit: 'px',
    scale: {
      '0': 0,
      '1': 4,
      '2': 8,
      '3': 12,
      '4': 16,
      '5': 20,
      '6': 24,
      '7': 28,
      '8': 32,
    }
  }
}

const propsWeb    = {...props, platform: 'web'}
const propsNative = {...props, platform: 'native'}

describe('themeLenses', () => {

  describe('spacingLens', () => {

    it('returns scale length with scaleUnit (px) when platform is `web`', () => {
      const actual = scaleLens('padding')(propsWeb)
      expect(actual).toBe('20px')
    })

    it('returns scale length without scaleUnit when platform is `native`', () => {
      const actual = scaleLens('padding')(propsNative)
      expect(actual).toBe(20)
    })

  })

  describe('colorLens', () => {
    it('returns color at prop key from theme', () => {
      const actual = colorLens('background')(props)
      expect(actual).toBe('red')
    })
  })

})
