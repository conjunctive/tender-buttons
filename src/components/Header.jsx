import React from 'react'
import { connect } from 'react-redux'

var Header = ({ section }) => (
  <div className='Header'>
    <h1>{section}</h1>
  </div>
)

var mapStateToProps = ({ section }) => ({ section })

export default connect(mapStateToProps, null)(Header)
