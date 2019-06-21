import React from 'react'
import { connect } from 'react-redux'
import { setSection } from '../state'
import PanelButton from './PanelButton'

var SectionPanel = ({ section, setSection }) => (
  <div className='SectionPanel'>
    <PanelButton
      label={'Objects'}
      isActive={section === 'Objects'}
      onClick={setSection} />
    <PanelButton
      label={'Food'}
      isActive={section === 'Food'}
      onClick={setSection} />
    <PanelButton
      label={'Rooms'}
      isActive={section === 'Rooms'}
      onClick={setSection} />
  </div>
)

var mapStateToProps = ({ section }) => ({ section })

var mapDispatchToProps = dispatch => ({
  setSection: section => dispatch(setSection(section))
})

export default connect(mapStateToProps, mapDispatchToProps)(SectionPanel)
