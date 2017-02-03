import React, { PropTypes } from 'react'

const BoxBase = ({ El }) => ({ children }) => (
  <El>
    { children }
  </El>
)

BoxBase.propTypes = {
  chidlren: PropTypes
}

export default boxBase
