import styled from 'styled-components'

import React, { PropTypes, Children } from 'react'
import { themeScale, alignments } from 'utils/style'

function TextFactory({elements, platform}) {

  Text.displayName = 'Text'

  Text.propTypes = {
    size: PropTypes.number,
    theme: PropTypes.object,
    weight: PropTypes.oneOf(['normal','bold','100','200','300','400','500','600','700','800','900']),
    family: PropTypes.oneOf(['primary','secondary']),
    color: PropTypes.oneOf(['primary','secondary','tertiary','white','black']),
    italic: PropTypes.bool,
  }

  Text.defaultProps = {
    size: 3,
    weight: 'normal',
    family: 'primary',
    color: 'black',
    italic: false
  }

  function Text(props) {

    const { size, children, theme, weight, family, color, style, italic } = props

    const isWeb   = platform === 'web'
    const View    = isWeb ? elements['div'] : elements['Text']

    const TextContainer = View`
      font-size: ${props => themeScale(size, theme.fontSizes, { platform })};
      font-weight: ${weight};
      font-family: ${props => theme.fontFamilies[family]};
      color: ${props => theme.color[color]};
      font-style: ${italic ? 'italic' : 'normal'};
    `
    TextContainer.displayName = 'TextContainer'

    return (
      <TextContainer>
        { children }
      </TextContainer>
    )
  }

  return Text

}

export {
  TextFactory as default
}
