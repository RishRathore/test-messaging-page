import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

import { triggerNotifier } from '../utils/notifier'

export default class MessageFormSection extends React.Component {
  state = {
    isOnline: true,
    openForm: false,
    body: '',
    sender: '',
    messageBuffer: [],
    isValid: true,
  }

  componentDidUpdate = ({ }, prevState) => {
    const { isOnline, messageBuffer } = this.state

    if (isOnline !== prevState.isOnline && isOnline && messageBuffer.length > 0) {
      messageBuffer.forEach(params => {
        console.log('call create message api', params)
      })

      this.setState({ messageBuffer: [] })
    }
  }

  toggleStatus = () => {
    this.setState(state => ({ isOnline: !state.isOnline }))
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  resetForm = () => {
    this.setState({ body: '', sender: '', isValid: true })
  }

  onSubmit = () => {
    const {
      state: { isOnline, body, sender, isValid }
    } = this

    if (sender !== '' && body !== '') {
      const params = {
        body,
        sender,
        posted_at: new Date()
      }

      if (isOnline) {
        console.log('call create api', params)
      } else {
        this.setState(state => ({
          messageBuffer: [...state.messageBuffer, params]
        }))
        triggerNotifier({
          type: 'info',
          message: 'Your are offline !. The create request has been bufferred'
        })
      }
      !isValid && this.setState({ isValid: true }) // reset state
    } else this.setState({ isValid: false })
  }



  render() {
    const { isOnline, sender, body, isValid } = this.state

    return (
      <div className='container'>
        <div className="row">
          <div className='col-12 custom-control custom-switch mt-2'>
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
              onClick={this.toggleStatus}
            >
              {isOnline ? 'online' : 'offline'}
            </label>
          </div>
        </div>
        <div className='row mt-2'>
          <div className='col-12'>
          <hr />
          <Form>
              <FormGroup>
                <Label for="exampleEmail">Sender</Label>
                <Input
                  type="text"
                  name="sender"
                  id="exampleEmail"
                  value={sender}
                  onChange={this.handleInput}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Message</Label>
                <Input
                  type="textarea"
                  name="body"
                  id="exampleText"
                  value={body}
                  onChange={this.handleInput}
                />
              </FormGroup>
              {!isValid && 
                <p className='mr-5 error-msg'>* both fields required</p>
              }
            </Form>
            <div style={{ textAlign: 'center' }}>
              <Button size="sm" color="secondary" onClick={this.resetForm}>Reset</Button>{' '}
              <Button size="sm" color="primary" onClick={this.onSubmit}>
                Create Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}