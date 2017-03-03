const defaultTheme = {
  color: {
    primary: 'gainsboro',
    secondary: 'lightgray',
    tertiary: 'silver',
    white: 'white',
    black: 'darkslategray'
  },
  colorTintIncrement: 10,
  colorShadeIncrement: 10,
  spacing: {
    unit: 'px',
    0: 0,
    1: 1,
    2: 2,
    3: 4,
    4: 8,
    5: 12,
    6: 16,
    7: 20,
    8: 24,
    9: 28,
    10: 32,
  },
  fontSizes: {
    0: 0,
    1: 8,
    2: 10,
    3: 12,
    4: 14,
    5: 16,
  },
  opacity: {
    1: 1.0,
    2: 0.75,
    3: 0.5,
    4: 0.25,
    5: 0.0,
  }
}

const darkTheme = {
  color: {
    primary: 'teal',
    secondary: 'papayawhip',
    tertiary: 'pink',
    white: 'white',
  },
  spacing: {
    unit: 'px',
    '0': 0,
    '1': 4,
    '2': 8,
    '3': 12,
    '4': 16,
    '5': 20,
    '6': 24,
    '7': 28,
    '8': 32,
  },
  opacity: {
    0: 0,
    1: 0.25,
    2: 0.5,
    3: 0.75,
    4: 0.90,
    5: 1,
  }
}

export { defaultTheme, darkTheme }
