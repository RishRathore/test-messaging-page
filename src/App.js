import React from 'react';

import MessageBox from './components/MessageBox'
import MessageFormSection from './components/MessageFormSection'

const App = () => (
  <div className="container mt-4">
    <div className='row'>
      <div className='col-8 container-box'>
        <MessageBox />
      </div>
      <div
        className='col-4 ml-2
        container-box'
        style={{ maxWidth: '29.333333%', height: '350px' }}
      >
        <MessageFormSection />
      </div>
    </div>
  </div>
)

export default App
