import { styleBy, themeColor, themeScale, themeDisplay } from '.'

const theme = {
  platform: 'web',
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

const props = {
  padding: 5,
  background: 'primary',
  theme: theme
}

const propsWeb    = {...props, theme: {...theme, platform: 'web'}}
const propsNative = {...props, theme: {...theme, platform: 'native'}}

describe('themeLenses', () => {

  describe('styleBy', () => {

    it('returns css attribute with style applied if property and theme attribute exists', () => {
      const actual = styleBy(themeScale, 'padding', [2, 4])(propsWeb)
      expect(actual).toBe('padding: 8px 16px;')
    })

    it('returns undefined if property and theme attribute exists', () => {
      const actual = styleBy(themeScale, 'padding', 'transform')(propsWeb)
      expect(actual).toBeUndefined()
    })

  })

  describe('themeScale', () => {

    it('returns scale length with scaleUnit (px) when platform is `web`', () => {
      const actual =  styleBy(themeScale, 'padding', 5)(propsWeb)
      expect(actual).toBe('padding: 20px;')
    })

    it('returns scale length without scaleUnit when platform is `native`', () => {
      const actual =  styleBy(themeScale, 'padding', 5)(propsNative)
      expect(actual).toBe('padding: 20;')
    })

    it('returns shorthand for array', () => {
      const actual = styleBy(themeScale, 'padding', [2, 4])(propsWeb)
      expect(actual).toBe('padding: 8px 16px;')
    })

    it('returns negative values if opts.negate is true', () => {
      const actual = styleBy(themeScale, 'padding', [2, 4], {negate: true})(propsWeb)
      expect(actual).toBe('padding: -8px -16px;')
    })

  })

  describe('themeColor', () => {
    it('returns color at prop key from theme', () => {
      const actual = styleBy(themeColor, 'background', 'primary')(propsWeb)
      expect(actual).toBe('background: red;')
    })
  })

})
