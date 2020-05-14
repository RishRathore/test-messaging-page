import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import MessageBox from './components/MessageBox'
import MessageFormSection from './components/MessageFormSection'

const App = () => {
  const [isOnline, setOnlineStatus] = useState(true)

  return (
    <div className="container mt-4">
      <div className='row'>
        <div className='col-8 container-box'>
          <MessageBox isOnline={isOnline} />
        </div>
        <div
          className='col-4 ml-2
          container-box'
          style={{ maxWidth: '29.333333%', height: '350px' }}
        >
          <MessageFormSection isOnline={isOnline} setOnlineStatus={setOnlineStatus} />
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
