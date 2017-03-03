import React, { PropTypes } from 'react'

function ComponentFactory({ elements, platform }) {

  Component.displayName = 'ComponentExample'

  Component.propTypes = {
    theme: PropTypes.object,
    children: PropTypes.any,
  }

  Component.defaultProps = {}

  function Component(props) {

    const {
      theme,
      children
    } = props

    const isWeb   = platform === 'web'
    const View    = isWeb ? elements['div'] : elements['View']

    const Container = View`
      backgroundColor: red
    `
    Container.displayName = 'Container'

    return (
      <Container>
        {children}
      </Container>
    )
  }

  return Component

}

export {
  ComponentFactory as default
}
