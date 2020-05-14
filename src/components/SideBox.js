import React from 'react'
import { Button } from 'reactstrap'

export default class SideBlock extends React.Component {
  state = {
    isOnline: true,
  }

  render() {
    const { isOnline, toggleStatus, toggleModal } = this.props

    return (
      <div className='pt-3'>
        <div className='row'>
          <div className='col-12'>
            <Button color="primary" onClick={toggleModal}>Create Message</Button>
          </div>
        </div>
        <div className="row custom-control custom-switch mt-4" >
          <div className='col-12'>
            <input
              type="checkbox"
              className="custom-control-input"
              id="customSwitch1"
              checked={isOnline}
              readOnly
            />
            <label
              className="custom-control-label"
              forhtml="customSwitch1"
              onClick={toggleStatus}
            >
              {isOnline ? 'Go offline' : 'Go online'}
            </label>
          </div>
        </div>
        <p className='mt-4'>Status: {isOnline ? 'Online' : 'Offline'}</p>
      </div>
    )
  }
}