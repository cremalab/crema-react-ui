const defaultTheme = {
  platform: 'native',
  color: {
    primary: 'teal',
    secondary: 'papayawhip',
    tertiary: 'orange',
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

const darkTheme = {
  platform: 'web',
  color: {
    primary: 'pink',
    white: 'white',
    tertiary: 'blue',
    secondary: 'green'
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
  }
}

export { defaultTheme, darkTheme }
