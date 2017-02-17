# Crema React UI

## Theme

The theme consists of all project specific units, colors, font-sizes, etc. that determine the visual properties of the UI.

_Example theme definition:_

```js
const theme = {
  platform: 'native', // web, native
  color: {
    primary: 'teal',
    secondary: 'orange',
    tertiary: 'slateGray',
    highlight: 'limeGreen',
  },
  borderWidth: {
    1: 1,
    2: 3,
    3: 6,
  },
  spacing: {
    1: 2,
    2: 4,
    3: 8,
    4: 12,
    5: 16,
    6: 20,
    7: 24,
    8: 28,
    9: 32,
   10: 36,
  },
  fontSize: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 22,
  },
  fontWeight: {
    1: 200,
    2: 400,
    3: 600,
  },
}
```

## Components

Each component is built from theme aware primitives:
  - Box
  - Text
  - Grid
    - Row
    - Col


### Box

`Box` is the base UI component. For the most part, it is a thin abstraction over the native `View` or `div`. This allows for a standard cross-platform API that ties directly into a standard theme structure while providing some conveniences (e.g. theme based spacing of child elements)

#### Theme Properties
  - `backgroundColor` [theme.color]
  - `borderColor` [theme.color]
  - `borderWidth` [theme.borderWidth]
  - `borderRadius` [theme.radius]
  - `margin`  [theme.spacing]
  - `opacity` [theme.opacity]
  - `padding` [theme.spacing]
  - `spacing` [theme.spacing]

#### Convenience Properties
  - `childLayout` ['col', 'row'] default 'col'
  - `childAlign` ['start', 'end', 'center', 'stretch'] default 'stretch'
  - `childWrap` ['wrap', 'nowrap'] default 'nowrap'
  - `childJustify` ['start', 'end', 'center', 'space-between', 'space-around'] default 'start'

#### Standard Properties
Accepts all standard properties of `View`
https://facebook.github.io/react-native/docs/view.html
