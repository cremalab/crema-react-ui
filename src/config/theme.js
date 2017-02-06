const defaultTheme = {
  platform: 'web',
  color: {
    primary: 'teal',
    secondary: 'papayawhip',
    tertiary: 'orange',
    white: 'white',
  },
  scale: {
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

const darkTheme = {
  platform: 'web',
  color: {
    primary: 'pink',
    white: 'white',
    tertiary: 'blue',
    secondary: 'green'
  },
  scale: {
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
