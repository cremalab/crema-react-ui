# Box

`Box` is the base UI component. For the most part, it is a thin abstraction over the native `View` or `div`. This allows for a standard cross-platform API that ties directly into a standard theme structure while providing some conveniences (e.g. theme based spacing of child elements)

## Theme Properties
  - `backgroundColor` _[theme.color]_
  - `borderColor`     _[theme.color]_
  - `borderWidth`     _[theme.borderWidth]_
  - `borderRadius`    _[theme.radius]_
  - `margin`          _[theme.spacing]_
  - `opacity`         _[theme.opacity]_
  - `padding`         _[theme.spacing]_
  - `spacing`         _[theme.spacing]_

## Convenience Properties
  - `childLayout`  _['col', 'row'] default 'col'_
  - `childAlign`   _['start', 'end', 'center', 'stretch'] default 'stretch'_
  - `childWrap`    _['wrap', 'nowrap'] default 'nowrap'_
  - `childJustify` _['start', 'end', 'center', 'space-between', 'space-around'] default 'start'_

## Standard Properties
Accepts all standard properties of `View`
https://facebook.github.io/react-native/docs/view.html

## Example Usage
```html
<Box
  padding={2}>
  <Text>I'm a box</Text>
</Box>
```
