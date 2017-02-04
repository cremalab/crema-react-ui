import { styleBy, colorLens, scaleLens } from '.'

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

const propsWeb          = {...props, platform: 'web'}
const propsWebShorthand = {...propsWeb, padding: [2, 4]}
const propsNative = {...props, platform: 'native'}
const propsNativeShorthand = {...props, padding: [2, 4]}
const propsBadBackground = {...props, background: ''}

describe('themeLenses', () => {

  describe('styleBy', () => {

    it('returns css attribute with style applied if property and theme attribute exists', () => {
      const actual = styleBy(scaleLens, 'padding', 'padding')(propsWebShorthand)
      expect(actual).toBe('padding: 8px 16px;')
    })

    it('returns undefined if property and theme attribute exists', () => {
      const actual = styleBy(scaleLens, 'padding', 'transform')(propsWeb)
      expect(actual).toBeUndefined()
    })

  })

  describe('spacingLens', () => {

    it('returns scale length with scaleUnit (px) when platform is `web`', () => {
      const actual = scaleLens('padding')(propsWeb)
      expect(actual).toBe('20px')
    })

    it('returns scale length without scaleUnit when platform is `native`', () => {
      const actual = scaleLens('padding')(propsNative)
      expect(actual).toBe('20')
    })

    it('returns shorthand for array', () => {
      const actual = scaleLens('padding')(propsWebShorthand)
      expect(actual).toBe('8px 16px')
    })

    it('returns shorthand for array', () => {
      const actual = scaleLens('padding')(propsNativeShorthand)
      expect(actual).toBe('8 16')
    })

  })

  describe('colorLens', () => {
    it('returns color at prop key from theme', () => {
      const actual = colorLens('background')(props)
      expect(actual).toBe('red')
    })
  })

  describe('colorLens handles none matching color', () => {
    it('returns color at prop key from theme', () => {
      const actual = colorLens('background')(propsBadBackground)
      expect(actual).toBeUndefined()
    })
  })

})
