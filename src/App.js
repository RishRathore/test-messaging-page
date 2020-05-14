import React from 'react';

import MessageBox from './components/MessageBox'
import SideBox from './components/SideBox'

class App extends React.Component {
  render() {
    return (
      <div className="container mt-4">
        <div className='row'>
          <div className='col-8 container-box'>
            <MessageBox />
          </div>
          <div className='col-4 ml-2' style={{ maxWidth: '29.333333%' }}>
            <SideBox />
          </div>
        </div>
      </div>
    )
  }
}

export default App
