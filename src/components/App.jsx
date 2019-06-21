import React from 'react'
import SectionPanel from './SectionPanel'
import LayoutPanel from './LayoutPanel'
import Section from './Section'
import Header from './Header'
import Title from './Title'

var App = () => (
  <div className='App'>
    <Title />
    <Header />
    <SectionPanel />
    <LayoutPanel />
    <Section />
  </div>
)

export default App
