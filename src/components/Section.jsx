import React from 'react'
import { connect } from 'react-redux'
import Poem from './Poem'

var Section = ({ layout, poems }) => (
  <div className={layout}>
    {poems.map(Poem)}
  </div>
)

var mapStateToProps = ({ layout, section, data }) =>
  ({ layout, poems: data[section] })

export default connect(mapStateToProps, null)(Section)
