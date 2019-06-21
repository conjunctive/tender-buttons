import React from 'react'
import Stanza from './Stanza'

var Poem = ({ title, content }) => (
  <div className='Poem'>
    <h2>{title}</h2>
    {content.map(Stanza)}
  </div>
)

export default Poem
