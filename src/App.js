import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="container mt-4">
        <div className='row'>
          <div className='col-8 container-box'>
            <h2>Hello</h2>
          </div>
          <div className='col-4 container-box ml-2' style={{ maxWidth: '29.333333%' }}>
            <h2>Buttons</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default App
