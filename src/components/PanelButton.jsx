import React from 'react'

var PanelButton = ({ label, isActive, onClick }) => (
  <button
    className={`PanelButton${isActive ? ' ActivePanelButton' : ''}`}
    onClick={() => onClick(label)}
  >
    {label}
  </button>
)

export default PanelButton
