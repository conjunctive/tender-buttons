import React from 'react'
import { connect } from 'react-redux'
import { setLayout } from '../state'
import PanelButton from './PanelButton'

var LayoutPanel = ({ layout, setLayout }) => (
  <div className='LayoutPanel'>
    <PanelButton
      label={'Stack'}
      isActive={layout === 'Stack'}
      onClick={setLayout} />
    <PanelButton
      label={'Grid'}
      isActive={layout === 'Grid'}
      onClick={setLayout} />
  </div>
)

var mapStateToProps = ({ layout }) => ({ layout })

var mapDispatchToProps = dispatch => ({
  setLayout: layout => dispatch(setLayout(layout))
})

export default connect(mapStateToProps, mapDispatchToProps)(LayoutPanel)
